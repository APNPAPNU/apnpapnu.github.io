import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import cx from 'classnames';

import { ProfileLink } from '../../components/ProfileLink';
import Button from '../../components/UI/Button';

import './styles.css';

import Root from './Root/';
import Node from './Node/';
import SealNode from './SealNode/';
import AlmostComplete from './AlmostComplete/';
import Tracked from './Tracked/';
import Unredeemed from './Unredeemed/';

class Triumphs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      almostCompleteSort: 0
    };
  }

  toggleCompleted = () => {
    let currentState = this.props.collectibles;
    let newState = {
      hideCompletedRecords: !currentState.hideCompletedRecords
    };

    this.props.setCollectibleDisplayState(newState);
  };

  toggleAlmostCompleteSort = () => {
    this.setState((prevState, props) => {
      prevState.almostCompleteSort = prevState.almostCompleteSort < 2 ? prevState.almostCompleteSort + 1 : 0;
      return prevState;
    });
  };

  componentDidMount() {
    if (!this.props.match.params.quaternary) {
      window.scrollTo(0, 0);
    }

    this.props.rebindTooltips();
  }

  componentDidUpdate(prevProps) {
    if ((!this.props.match.params.quaternary && prevProps.location.pathname !== this.props.location.pathname) || (!prevProps.match.params.quaternary && this.props.location.pathname === '/triumphs/almost-complete' && prevProps.location.pathname !== this.props.location.pathname)) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { t } = this.props;
    let primaryHash = this.props.match.params.primary ? this.props.match.params.primary : false;

    let toggleCompletedLink = (
      <Button action={this.toggleCompleted}>
        {this.props.collectibles.hideCompletedRecords ? (
          <>
            <i className='segoe-uniF16E' />
            {t('Show all')}
          </>
        ) : (
          <>
            <i className='segoe-uniF16B' />
            {t('Hide redeemed')}
          </>
        )}
      </Button>
    );


    let almostCompleteSortText;
    if (this.state.almostCompleteSort === 1) {
      almostCompleteSortText = (
        <>
          <i className='segoe-uniE17D' />
          {t('Sorted by score')}
        </>
      )
    } else if (this.state.almostCompleteSort === 2) {
      almostCompleteSortText = (
        <>
          <i className='segoe-uniE17D' />
          {t('Sorted by rarity')}
        </>
      )
    } else {
      almostCompleteSortText = (
        <>
          <i className='segoe-uniE17D' />
          {t('Sorted by completion')}
        </>
      )
    }

    let toggleAlmostCompleteSortLink = (
      <Button action={this.toggleAlmostCompleteSort}>
        {almostCompleteSortText}
      </Button>
    );

    let backLinkPath = this.props.location.state && this.props.location.state.from ? this.props.location.state.from : '/triumphs';

    if (!primaryHash) {
      return (
        <div className={cx('view', 'presentation-node', 'root')} id='triumphs'>
          <Root {...this.props} />
        </div>
      );
    } else if (primaryHash === 'seal') {
      return (
        <>
          <div className={cx('view', 'presentation-node')} id='triumphs'>
            <SealNode {...this.props} />
          </div>
          <div className='sticky-nav'>
            <div />
            <ul>
              <li>{toggleCompletedLink}</li>
              <li>
                <ProfileLink className='button' to={backLinkPath}>
                  <i className='destiny-B_Button' />
                  {t('Back')}
                </ProfileLink>
              </li>
            </ul>
          </div>
        </>
      );
    } else if (primaryHash === 'almost-complete') {
      return (
        <>
          <div className={cx('view')} id='triumphs'>
            <AlmostComplete {...this.props} sort={this.state.almostCompleteSort} />
          </div>
          <div className='sticky-nav'>
            <div />
            <ul>
              <li>{toggleAlmostCompleteSortLink}</li>
              <li>
                <ProfileLink className='button' to={backLinkPath}>
                  <i className='destiny-B_Button' />
                  {t('Back')}
                </ProfileLink>
              </li>
            </ul>
          </div>
        </>
      );
    } else if (primaryHash === 'tracked') {
      return (
        <>
          <div className={cx('view')} id='triumphs'>
            <Tracked {...this.props} />
          </div>
          <div className='sticky-nav'>
            <div />
            <ul>
              <li>
                <ProfileLink className='button' to={backLinkPath}>
                  <i className='destiny-B_Button' />
                  {t('Back')}
                </ProfileLink>
              </li>
            </ul>
          </div>
        </>
      );
    } else if (primaryHash === 'unredeemed') {
      return (
        <>
          <div className={cx('view')} id='triumphs'>
            <Unredeemed {...this.props} />
          </div>
          <div className='sticky-nav'>
            <div />
            <ul>
              <li>
                <ProfileLink className='button' to={backLinkPath}>
                  <i className='destiny-B_Button' />
                  {t('Back')}
                </ProfileLink>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={cx('view', 'presentation-node', 'parent')} id='triumphs'>
            <Node {...this.props} primaryHash={primaryHash} />
          </div>
          <div className='sticky-nav'>
            <div />
            <ul>
              <li>{toggleCompletedLink}</li>
              <li>
                <ProfileLink className='button' to={backLinkPath}>
                  <i className='destiny-B_Button' />
                  {t('Back')}
                </ProfileLink>
              </li>
            </ul>
          </div>
        </>
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    collectibles: state.collectibles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCollectibleDisplayState: value => {
      dispatch({ type: 'SET_COLLECTIBLES', payload: value });
    },
    rebindTooltips: value => {
      dispatch({ type: 'REBIND_TOOLTIPS', payload: new Date().getTime() });
    }
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withTranslation()
)(Triumphs);
