import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import cx from 'classnames';

import Records from '../Records';
import { ProfileLink } from '../../components/ProfileLink';
import { enumerateRecordState } from '../../utils/destinyEnums';

class RecordsTracked extends React.Component {
  render() {
    const { t, member, triumphs, limit, pageLink } = this.props;
    const characterRecords = member.data.profile.characterRecords.data;
    const profileRecords = member.data.profile.profileRecords.data.records;
    const characterId = member.characterId;

    let hashes = triumphs.tracked;

    hashes = hashes.filter(hash => {

      let state;
      if (profileRecords[hash]) {
        state = profileRecords[hash] ? profileRecords[hash].state : 0;
      } else if (characterRecords[characterId].records[hash]) {
        state = characterRecords[characterId].records[hash] ? characterRecords[characterId].records[hash].state : 0;
      } else {
        state = 0;
      }

      return !enumerateRecordState(state).recordRedeemed && enumerateRecordState(state).objectiveNotCompleted

    });

    return (
      <>
        <ul className={cx('list record-items')}>
          <Records selfLink {...this.props} hashes={hashes} ordered='progress' limit={limit} />
          {hashes.length < 1 ? (
            <li key='none-tracked' className='none-tracked'>
              <div className='text'>{t("You aren't tracking any records yet!")}</div>
            </li>
          ) : null}
        </ul>
        {pageLink && hashes.length > 0 ? (
          <ProfileLink className='button' to={{ pathname: '/triumphs/tracked', state: { from: '/triumphs' } }}>
            <div className='text'>{t('See all tracked')}</div>
          </ProfileLink>
        ) : null}
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    triumphs: state.triumphs
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(RecordsTracked);