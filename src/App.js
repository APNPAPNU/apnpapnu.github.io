import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import cx from 'classnames';

import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/it';
// import 'moment/locale/ja';
import 'moment/locale/ko';
// import 'moment/locale/pl';
import 'moment/locale/pt-br';
// import 'moment/locale/ru';

import './Core.css';
import './App.css';
import './components/PresentationNode.css';

import './utils/i18n';
import dexie from './utils/dexie';
import * as bungie from './utils/bungie';
import * as voluspa from './utils/voluspa';
import GoogleAnalytics from './components/GoogleAnalytics';
import store from './utils/reduxStore';
import manifest from './utils/manifest';
import * as ls from './utils/localStorage';

import runOnceTasks from './utils/runOnceTasks';

import Header from './components/UI/Header';
import Tooltip from './components/Tooltip';
import Footer from './components/UI/Footer';
import NotificationLink from './components/Notifications/NotificationLink';
import NotificationProgress from './components/Notifications/NotificationProgress';
import ServiceWorkerUpdate from './components/Notifications/ServiceWorkerUpdate';
import RefreshService from './components/RefreshService';

import ProfileRoutes from './ProfileRoutes';

import Loading from './views/Loading';
import Index from './views/Index';
import CharacterSelect from './views/CharacterSelect';
import Inspect from './views/Inspect';
import Read from './views/Read';
import Settings from './views/Settings';
import Credits from './views/Credits';
import Experiments from './views/Experiments';
import Suggestions from './views/Suggestions';
import FAQ from './views/FAQ';
import ChaliceRecipes from './views/ChaliceRecipes';

import ClanBannerBuilder from './views/Experiments/ClanBannerBuilder';
import DataInspector from './views/Experiments/DataInspector';
import AnimatedEmblems from './views/Experiments/AnimatedEmblems';

import OOB from './views/OOB';

const RedirectRoute = props => <Route {...props} render={({ location }) => <Redirect to={{ pathname: '/character-select', state: { from: location } }} />} />;

// Print timings of promises to console (and performance logger)
// if we're running in development mode.
async function timed(name, promise) {
  if (process.env.NODE_ENV === 'development') console.time(name);
  const result = await promise;
  if (process.env.NODE_ENV === 'development') console.timeEnd(name);
  return result;
}

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      status: {
        code: false,
        detail: false
      }
    };

    this.currentLanguage = props.i18n.getCurrentLanguage();

    runOnceTasks();

    // We do these as early as possible - we don't want to wait
    // for the component to mount before starting the web requests
    this.startupRequests = {
      storedManifest: timed(
        'storedManifest',
        dexie
          .table('manifest')
          .toCollection()
          .first()
      ),
      manifestIndex: timed('GetDestinyManifest', bungie.GetDestinyManifest()),
      bungieSettings: timed('GetCommonSettings', bungie.GetCommonSettings()),
      voluspaStatistics: timed('statistics', voluspa.statistics())
    };

    const profile = ls.get('setting.profile');

    store.dispatch({
      type: 'MEMBER_SET_BY_PROFILE_ROUTE',
      payload: profile
    });

    moment.defineLocale('en-sml', {
      parentLocale: 'en',
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'now',
        ss: '%ss',
        m: '<1m',
        mm: '%dm',
        h: '1h',
        hh: '%dh',
        d: '1d',
        dd: '%dd',
        M: '1M',
        MM: '%dM',
        y: '1y',
        yy: '%dy'
      }
    });

    moment.locale(this.currentLanguage);
  }

  updateViewport = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    store.dispatch({ type: 'VIEWPORT_CHANGED', payload: { width, height } });
  };

  async componentDidMount() {
    this.updateViewport();
    window.addEventListener('resize', this.updateViewport);

    try {
      await timed('setUpManifest', this.setUpManifest());
    } catch (error) {
      //console.log(error);
      if (error.message === 'Failed to fetch') {
        this.setState({ status: { code: 'error_fetchingManifest', detail: error } });
      } else if (error.message === 'maintenance') {
        this.setState({ status: { code: 'error_maintenance', detail: error } });
      } else {
        this.setState({ status: { code: 'error_setUpManifest', detail: error } });
      }
    }
  }

  async setUpManifest() {
    this.setState({ status: { code: 'checkManifest' } });
    const storedManifest = await this.startupRequests.storedManifest;
    const manifestIndex = await this.startupRequests.manifestIndex;

    let manifestLanuage = this.currentLanguage;
    if (/^en/.test(manifestLanuage)) manifestLanuage = 'en';

    const currentVersion = manifestIndex.jsonWorldContentPaths[manifestLanuage];
    let tmpManifest = null;

    if (!storedManifest || currentVersion !== storedManifest.version) {
      // Manifest missing from IndexedDB or doesn't match the current version -
      // download a new one and store it.
      tmpManifest = await this.downloadNewManifest(currentVersion);
    } else {
      tmpManifest = storedManifest.value;
    }

    tmpManifest.settings = await this.startupRequests.bungieSettings;

    if (tmpManifest.settings && tmpManifest.settings.systems && !tmpManifest.settings.systems.D2Profiles.enabled) {
      throw new Error('maintenance');
    }

    this.availableLanguages = Object.keys(manifestIndex.jsonWorldContentPaths);
    this.availableLanguages.splice(1, 0, 'en-au');

    tmpManifest.statistics = (await this.startupRequests.voluspaStatistics) || {};

    manifest.set(tmpManifest, manifestLanuage);

    this.setState({ status: { code: 'ready' } });
  }

  async downloadNewManifest(version) {
    this.setState({ status: { code: 'fetchManifest' } });
    const manifest = await timed('downloadManifest', bungie.manifest(version));

    this.setState({ status: { code: 'setManifest' } });
    try {
      await timed('clearTable', dexie.table('manifest').clear());
      await timed('storeManifest', dexie.table('manifest').add({ version: version, value: manifest }));
    } catch (error) {
      // Can't write a manifest if we're in private mode in safari
      console.warn(`Error while trying to store the manifest in indexeddb: ${error}`);
    }
    return manifest;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewport);
  }

  render() {
    if (!window.ga) {
      GoogleAnalytics.init();
    }

    if (this.state.status.code !== 'ready') {
      // if (this.state.status.code !== 'ready' || this.state.status.code === 'ready') {
      return (
        <div className={cx('wrapper', this.props.theme.selected)}>
          <Loading state={this.state.status} />
          <NotificationLink />
        </div>
      );
    }

    return (
      <BrowserRouter>
        <Route
          render={route => (
            <div className={cx('wrapper', this.props.theme.selected, { standalone: window.matchMedia('(display-mode: standalone)').matches })}>
              <ServiceWorkerUpdate {...this.props} />
              <NotificationLink />
              <NotificationProgress />

              {/* Don't run the refresh service if we're currently selecting
                a character, as the refresh will cause the member to
                continually reload itself */}
              <Route path='/character-select' children={({ match, ...rest }) => !match && <RefreshService {...this.props} />} />

              <Tooltip {...route} onRef={ref => (this.TooltipComponent = ref)} />
              <Route component={GoogleAnalytics.GoogleAnalytics} />
              <div className='main'>
                <Switch>
                  <Route path='/:membershipType([1|2|4])/:membershipId([0-9]+)/:characterId([0-9]+)?' render={route => <ProfileRoutes {...route} />} />
                  <Route
                    render={() => (
                      <>
                        <Route render={route => <Header route={route} {...this.state} {...this.props} />} />
                        <Switch>
                          <RedirectRoute path='/clan' />
                          <RedirectRoute path='/character' exact />
                          <RedirectRoute path='/legend' exact />
                          <RedirectRoute path='/checklists' exact />
                          <RedirectRoute path='/collections/' />
                          <RedirectRoute path='/triumphs' />
                          <RedirectRoute path='/this-week' exact />
                          <RedirectRoute path='/reports' />
                          <RedirectRoute path='/now' exact />
                          <RedirectRoute path='/pursuits' />

                          <Route path='/character-select' exact component={CharacterSelect} />
                          <Route path='/inspect/:hash?' exact component={Inspect} />
                          <Route path='/read/:kind?/:hash?' exact component={Read} />
                          <Route path='/settings' exact render={route => <Settings {...route} availableLanguages={this.availableLanguages} />} />
                          <Route path='/suggestions/:id?' render={route => <Suggestions {...route} />} />
                          <Route path='/faq' exact component={FAQ} />
                          <Route path='/credits' exact component={Credits} />
                          <Route path='/chalice-tool/:rune1?/:rune2?/:rune3?' render={route => <ChaliceRecipes {...route} />} />
                          <Route path='/experiments' exact component={Experiments} />
                          <Route path='/experiments/clan-banner-builder/:decalBackgroundColorId?/:decalColorId?/:decalId?/:gonfalonColorId?/:gonfalonDetailColorId?/:gonfalonDetailId?/:gonfalonId?/' exact component={ClanBannerBuilder} />
                          <Route path='/experiments/data-inspector' exact component={DataInspector} />
                          <Route path='/experiments/animated-emblems' exact render={route => <AnimatedEmblems />} />
                          <Route path='/oob' component={OOB} />
                          <Route path='/' component={Index} />
                        </Switch>
                      </>
                    )}
                  />
                </Switch>
              </div>
              <Footer />
            </div>
          )}
        />
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    theme: state.theme
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(App);
