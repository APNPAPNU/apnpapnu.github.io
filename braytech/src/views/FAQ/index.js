import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import Records from '../../components/Records';

import './styles.css';

class FAQ extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { t } = this.props;

    const qa = [
      {
        k: 'braytech',
        q: t("Braytech won't update to the newest version"),
        a: t("Follow these steps carefully for Google Chrome desktop (other browsers idk I'm one guy give me a break... Tweet me if you have to)\n\n1. Press F12 to open Chrome DevTools\n2. Select the Application tab in DevTools\n3. On the right side of the panel, click Unregister to unregister Braytech's Service Worker\n4. Close all Braytech tabs\n5. Open a Braytech tab")
      },
      {
        k: 'api',
        q: t("Clan stats don't match [other thing]"),
        a: t('There are multiple sources for stats in Destiny. Clan stats relies on the less intensive HistoricalStats API endpoint. The stats it returns are collated server-side by Bungie and sometimes differ ever so slightly from summing PGCRs (post game carnage reports) one by one as other tools may.')
      },
      {
        k: 'api',
        q: t('Erroneous triumph records'),
        a: t('Sometimes in computing, things go wrong. At current, there are some strange-looking records under the _Triumphs_ view. They are API errors which will eventually be resolved by Bungie.'),
        r: [4182231867]
      }
    ];

    return (
      <div className='view' id='faq'>
        <div className='module intro'>
          <div className='page-header'>
            <div className='name'>{t('Frequently Asked Questions')}</div>
          </div>
        </div>
        <div className='module overview'>
          <h4>Braytech</h4>
          <ul>
            {qa
              .filter(q => q.k === 'braytech')
              .map((qa, index) => {
                return (
                  <li key={index} className='qa'>
                    {qa.q}
                  </li>
                );
              })}
          </ul>
          <h4>API</h4>
          <ul>
            {qa
              .filter(q => q.k === 'api')
              .map((qa, index) => {
                return (
                  <li key={index} className='qa'>
                    {qa.q}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className='module faq'>
          <h4>Braytech</h4>
          <div className='k'>
            {qa
              .filter(q => q.k === 'braytech')
              .map((qa, index) => {
                return (
                  <div key={index} className='qa'>
                    <div className='q'>{qa.q}</div>
                    <ReactMarkdown className='a' source={qa.a} />
                  </div>
                );
              })}
          </div>
          <h4>API</h4>
          <div className='k'>
            {qa
              .filter(q => q.k === 'api')
              .map((qa, index) => {
                return (
                  <div key={index} className='qa'>
                    <div className='q'>{qa.q}</div>
                    <ReactMarkdown className='a' source={qa.a} />
                    {qa.r ? (
                      <ul className='list record-items'>
                        <Records hashes={qa.r} ordered forceDisplay />
                      </ul>
                    ) : null}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(),
  withTranslation()
)(FAQ);
