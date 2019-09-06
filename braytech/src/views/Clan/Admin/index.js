import React from 'react';

import * as ls from '../../../utils/localStorage';
import { NoAuth, DiffProfile } from '../../../components/BungieAuth';
import Spinner from '../../../components/UI/Spinner';
import RosterAdmin from '../../../components/RosterAdmin';

import ClanViewsLinks from '../ClanViewsLinks';

import './styles.css';

class AdminView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.auth = ls.get('setting.auth');
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);   
  }

  render() {
    const { t, group, member, groupMembers } = this.props;

    if (!this.auth) {
      return <NoAuth />;
    }

    if ((this.auth && !this.auth.destinyMemberships.find(m => m.membershipId === member.membershipId)) || (this.auth && this.auth.destinyMemberships.find(m => m.membershipId === member.membershipId) && !member.data.groups.results.find(r => r.member.memberType > 2 && r.member.destinyUserInfo.membershipId === this.auth.destinyMemberships.find(m => m.membershipId === member.membershipId).membershipId))) {
      return <DiffProfile />;
    }

    return (
      <>
        <ClanViewsLinks {...this.props} />
        <div className='module'>
          <div className='status'>{groupMembers.members.length > 0 ? groupMembers.loading ? (
            <Spinner mini />
          ) : (
            <div className='ttl' />
          ) : null}</div>
          {groupMembers.loading && groupMembers.members.length === 0 ? <Spinner /> : <RosterAdmin />}
        </div>
      </>
    );
  }
}

export default AdminView;
