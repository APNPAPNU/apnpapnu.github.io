import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import cx from 'classnames';

import './styles.css';

import About from './About';
import Roster from './Roster';
import Stats from './Stats';
import Admin from './Admin';
import NoClan from './NoClan';

class Clan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);   

  }

  render() {
    const { t, member, groupMembers, view = 'about' } = this.props;
    const group = member.data.groups.results.length > 0 ? member.data.groups.results[0].group : false;

    if (group) {

      let views = {
        'about': {
          'name': 'about',
          'component': About
        },
        'roster': {
          'name': 'roster',
          'component': Roster
        },
        'stats': {
          'name': 'stats',
          'component': Stats
        },
        'admin': {
          'name': 'admin',
          'component': Admin
        }
      };

      let ViewComponent = views[view].component;

      const clanLevel = group.clanInfo.d2ClanProgressions[584850370];

      return (
        <div className={cx('view', views[view].name)} id='clan'>
          <div className='module head'>
            <div className='content'>
              <div className='page-header'>
                <div className='sub-name'>{t('Clan')}</div>
                <div className='name'>
                  {group.name}
                  <div className='tag'>[{group.clanInfo.clanCallsign}]</div>
                </div>
              </div>
            </div>
            <div className='content highlight'>
              <div className='value'>{group.memberCount}</div>
              <div className='name'>{t('Members')}</div>
            </div>
            <div className='content highlight'>
              <div className='value'>{groupMembers.members.filter(member => member.isOnline).length}</div>
              <div className='name'>{t('Online')}</div>
            </div>
            <div className='content highlight'>
              <div className='value'>{clanLevel.level}</div>
              <div className='name'>{t('Clan level')}</div>
            </div>
          </div>
          <div className='padder'>
            <ViewComponent {...this.props} group={group} />
          </div>
        </div>
      )
    } else {
      return <NoClan />
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    groupMembers: state.groupMembers
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(Clan);
