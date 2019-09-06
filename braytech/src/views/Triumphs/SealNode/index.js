import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import cx from 'classnames';

import manifest from '../../../utils/manifest';
import { enumerateRecordState } from '../../../utils/destinyEnums';
import ObservedImage from '../../../components/ObservedImage';
import Records from '../../../components/Records';

class SealNode extends React.Component {
  render() {
    const { t } = this.props;
    const characterId = this.props.member.characterId;

    const characters = this.props.member.data.profile.characters.data;
    const genderHash = characters.find(character => character.characterId === characterId).genderHash;
    const profileRecords = this.props.member.data.profile.profileRecords.data.records;

    // for MOMENTS OF TRIUMPH: MMXIX
    const characterRecords = this.props.member.data.profile.characterRecords.data;

    const sealBars = {
      2588182977: {
        image: '037E-00001367.png'
      },
      3481101973: {
        image: '037E-00001343.png'
      },
      147928983: {
        image: '037E-0000134A.png'
      },
      2693736750: {
        image: '037E-0000133C.png'
      },
      2516503814: {
        image: '037E-00001351.png'
      },
      1162218545: {
        image: '037E-00001358.png'
      },
      2039028930: {
        image: '0560-000000EB.png'
      },
      991908404: {
        image: '0560-0000107E.png'
      },
      3170835069: {
        image: '0560-00006583.png'
      },
      1002334440: {
        image: '0560-00007495.png'
      }
    };

    let definitionSeal = manifest.DestinyPresentationNodeDefinition[this.props.match.params.secondary];

    // for MOMENTS OF TRIUMPH: MMXIX
    let states = [];
    definitionSeal.children.records.forEach(record => {
      let scope = profileRecords[record.recordHash] ? profileRecords[record.recordHash] : characterRecords[characterId].records[record.recordHash];
      if (scope) {
        states.push(scope);
      }
    });
    // --

    let progress = profileRecords[definitionSeal.completionRecordHash] && profileRecords[definitionSeal.completionRecordHash].objectives[0].progress;
    let total = profileRecords[definitionSeal.completionRecordHash] && profileRecords[definitionSeal.completionRecordHash].objectives[0].completionValue;

    // MOMENTS OF TRIUMPH: MMXIX does not have the above ^
    if (definitionSeal.hash === 1002334440) {
      progress = states.filter(s => !enumerateRecordState(s.state).objectiveNotCompleted && enumerateRecordState(s.state).recordRedeemed).length;
      total = states.length;
    }

    let isComplete = progress === total ? true : false;

    let title = manifest.DestinyRecordDefinition[definitionSeal.completionRecordHash].titleInfo.titlesByGenderHash[genderHash];

    let sealCommonality = manifest.statistics.seals && manifest.statistics.seals[definitionSeal.hash];

    return (
      <div className='node seal'>
        <div className='children'>
          <div className='icon'>
            <div className='corners t' />
            <ObservedImage className='image' src={sealBars[definitionSeal.hash] ? `/static/images/extracts/badges/${sealBars[definitionSeal.hash].image}` : `https://www.bungie.net${definitionSeal.displayProperties.originalIcon}`} />
            <div className='corners b' />
          </div>
          <div className='text'>
            <div className='name'>{definitionSeal.displayProperties.name}</div>
            <div className='description'>{definitionSeal.displayProperties.description}</div>
          </div>
          <div className='until'>
            {total && isComplete ? <h4 className='completed'>{t('Seal completed')}</h4> : <h4>{t('Seal progress')}</h4>}
            <div className='progress'>
              <div className='text'>
                <div className='title'>{title}</div>
                {total ? (
                  <div className='fraction'>
                    {progress}/{total}
                  </div>
                ) : null}
              </div>
              <div className={cx('bar', { completed: total && isComplete })}>
                {total ? (
                  <div
                    className='fill'
                    style={{
                      width: `${(progress / total) * 100}%`
                    }}
                  />
                ) : null}
              </div>
            </div>
          </div>
          {sealCommonality ? (
            <div className='commonality'>
              <h4>{t('Seal commonality')}</h4>
              <div className='value'>{sealCommonality}%</div>
              <div className='description'>
                {t("The seal's rarity represented as a percentage of players who are indexed by VOLUSPA.")}
              </div>
            </div>
          ) : null}
        </div>
        <div className='entries'>
          <ul className='list tertiary record-items'>
            <Records {...this.props} hashes={definitionSeal.children.records.map(child => child.recordHash)} highlight={this.props.match.params.tertiary || false} />
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    theme: state.theme,
    collectibles: state.collectibles
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(SealNode);
