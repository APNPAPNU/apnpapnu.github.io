import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import orderBy from 'lodash/orderBy';
import cx from 'classnames';

import manifest from '../../utils/manifest';
import { enumerateRecordState } from '../../utils/destinyEnums';
import { ProfileLink } from '../../components/ProfileLink';
import Records from '../Records';

class RecordsAlmost extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToRecordRef = React.createRef();
  }

  render() {
    const { t, member, sort } = this.props;
    const characterRecords = member && member.data.profile.characterRecords.data;
    const profileRecords = member && member.data.profile.profileRecords.data.records;

    let almost = [];
    let ignores = [];

    // ignore collections badges
    manifest.DestinyPresentationNodeDefinition[manifest.settings.destiny2CoreSettings.badgesRootNode].children.presentationNodes.forEach(child => {
      ignores.push(manifest.DestinyPresentationNodeDefinition[child.presentationNodeHash].completionRecordHash);
      manifest.DestinyPresentationNodeDefinition[child.presentationNodeHash].children.presentationNodes.forEach(subchild => {
        ignores.push(manifest.DestinyPresentationNodeDefinition[subchild.presentationNodeHash].completionRecordHash);
      });
    });

    // ignore triumph seals
    // manifest.DestinyPresentationNodeDefinition[manifest.settings.destiny2CoreSettings.medalsRootNode].children.presentationNodes.forEach(child => {
    //   ignores.push(manifest.DestinyPresentationNodeDefinition[child.presentationNodeHash].completionRecordHash);
    // });

    let records = {
      ...profileRecords,
      ...characterRecords[member.characterId].records
    }

    Object.entries(records).forEach(([key, record]) => {
      if (manifest.DestinyRecordDefinition[key].redacted) {
        return;
      }

      // ignore collections badges etc
      if (ignores.includes(parseInt(key, 10))) {
        return;
      }

      if (enumerateRecordState(record.state).invisible || enumerateRecordState(record.state).recordRedeemed) {
        return;
      }

      let completionValueTotal = 0;
      let progressValueTotal = 0;

      record.objectives.forEach(obj => {
        let v = parseInt(obj.completionValue, 10);
        let p = parseInt(obj.progress, 10);

        completionValueTotal = completionValueTotal + v;
        progressValueTotal = progressValueTotal + (p > v ? v : p); // prevents progress values that are greater than the completion value from affecting the average
      });

      // var mark = false;

      const distance = progressValueTotal / completionValueTotal;
      // if (distance > 0.81 && distance < 1.0) {
      //   mark = true;
      // }

      if (distance >= 1.0) {
        return;
      }

      let selfLinkFrom = this.props.selfLinkFrom || false;

      let definitionRecord = manifest.DestinyRecordDefinition[key] || false;
      let score = 0;

      if (definitionRecord && definitionRecord.completionInfo) {
        score = definitionRecord.completionInfo.ScoreValue;
      }

      almost.push({
        distance,
        score,
        commonality: manifest.statistics.triumphs && manifest.statistics.triumphs[definitionRecord.hash] ? manifest.statistics.triumphs[definitionRecord.hash] : 0,
        element: <Records key={key} {...this.props} selfLink selfLinkFrom={selfLinkFrom} hashes={[key]} />
      });
    });

    if (sort === 1) {
      almost = orderBy(almost, [record => record.score, record => record.distance], ['desc', 'desc']);
    } else if (sort === 2) {
      almost = orderBy(almost, [record => record.commonality, record => record.distance], ['desc', 'desc']);
    } else {
      almost = orderBy(almost, [record => record.distance, record => record.score], ['desc', 'desc']);
    }

    almost = this.props.limit ? almost.slice(0, this.props.limit) : almost;

    return (
      <>
        <ul className={cx('list record-items')}>
          {almost.map(r => {
            return r.element;
          })}
        </ul>
        {this.props.pageLink ? (
          <ProfileLink className='button' to={{ pathname: '/triumphs/almost-complete', state: { from: '/triumphs' } }}>
            <div className='text'>{t('See next 100')}</div>
          </ProfileLink>
        ) : null}
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(RecordsAlmost);