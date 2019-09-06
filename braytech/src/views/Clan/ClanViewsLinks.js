import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import * as ls from '../../utils/localStorage';
import { NoAuth, DiffProfile } from '../../components/BungieAuth';
import { ProfileNavLink } from '../../components/ProfileLink';

class ClanViewsLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.auth = ls.get('setting.auth');
  }

  render() {
    const { t, member } = this.props;

    const isAdmin = this.auth && this.auth.destinyMemberships.find(m => m.membershipId === member.membershipId) && member.data.groups.results.find(r => r.member.memberType > 2 && r.member.destinyUserInfo.membershipId === this.auth.destinyMemberships.find(m => m.membershipId === member.membershipId).membershipId);

    return (
      <div className='module views'>
        <ul className='list'>
          <li className='linked'>
            <div className='icon about' />
            <ProfileNavLink to='/clan' exact />
          </li>
          <li className='linked'>
            <div className='icon roster' />
            <ProfileNavLink to='/clan/roster' />
          </li>
          {/* <li className='linked'>
            <div className='icon stats' />
            <ProfileNavLink to='/clan/stats' />
          </li> */}
          {isAdmin ? (
            <li className='linked'>
              <div className='icon admin' />
              <ProfileNavLink to='/clan/admin' />
            </li>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default compose(
  connect(),
  withTranslation()
)(ClanViewsLinks);
