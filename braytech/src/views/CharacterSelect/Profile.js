import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import * as destinyUtils from '../../utils/destinyUtils';
import Characters from '../../components/UI/Characters';
import Flair from '../../components/UI/Flair';

class Profile extends React.Component {
  render() {
    const { t, member, from } = this.props;

    const groups = member.data.groups.results;

    const timePlayed = Math.floor(
      Object.keys(member.data.profile.characters.data).reduce((sum, key) => {
        return sum + parseInt(member.data.profile.characters.data[key].minutesPlayedTotal);
      }, 0) / 1440
    );

    return (
      <div className='user'>
        <div className='info'>
          <div className='displayName'>{member.data.profile.profile.data.userInfo.displayName}</div>
          {groups.length === 1 && <div className='clan'>{groups[0].group.name}</div>}
          <Flair type={member.membershipType} id={member.membershipId} />
          <div className='basics'>
            <div>
              <div className='value'>
                {timePlayed} {timePlayed === 1 ? t('day played') : t('days played')}
              </div>
              <div className='name'>{t('Time played across characters')}</div>
            </div>
            <div>
              <div className='value'>{member.data.profile.profileRecords.data.score.toLocaleString('en-us')}</div>
              <div className='name'>{t('Triumph score')}</div>
            </div>
            <div>
              <div className='value'>{destinyUtils.collectionTotal(member.data.profile).toLocaleString('en-us')}</div>
              <div className='name'>{t('Collection total')}</div>
            </div>
          </div>
        </div>
        <Characters data={member.data} location={{ ...from }} characterClick={this.props.onCharacterClick} />
      </div>
    );
  }
}

Profile.propTypes = {
  onCharacterClick: PropTypes.func.isRequired,
  from: PropTypes.object.isRequired,
  member: PropTypes.object.isRequired
};

export default withTranslation()(Profile);
