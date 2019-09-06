import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import cx from 'classnames';

import manifest from '../../utils/manifest';
import { enumerateRecordState } from '../../utils/destinyEnums';
import Records from '../Records';

class RecordsUnredeemed extends React.Component {
  render() {
    const { t, member, triumphs, limit } = this.props;
    const characterRecords = member && member.data.profile.characterRecords.data;
    const profileRecords = member && member.data.profile.profileRecords.data.records;

    let hashes = [];
    let ignores = [];

    let records = {
      ...profileRecords,
      ...characterRecords[member.characterId].records
    }

    Object.entries(records).forEach(([key, record]) => {
      const definitionRecord = manifest.DestinyRecordDefinition[key];
      
      if (definitionRecord && definitionRecord.redacted) {
        return;
      }

      // ignore collections badges etc
      if (ignores.includes(parseInt(key, 10))) {
        return;
      }

      if (definitionRecord.presentationInfo && definitionRecord.presentationInfo.parentPresentationNodeHashes && definitionRecord.presentationInfo.parentPresentationNodeHashes.length && !enumerateRecordState(record.state).invisible && !enumerateRecordState(record.state).objectiveNotCompleted && !enumerateRecordState(record.state).recordRedeemed) {
        hashes.push(key);
      }

    });

    return (
      <>
        <ul className={cx('list record-items')}>
          <Records selfLink {...this.props} hashes={hashes} ordered='rarity' limit={limit} />
        </ul>
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
)(RecordsUnredeemed);