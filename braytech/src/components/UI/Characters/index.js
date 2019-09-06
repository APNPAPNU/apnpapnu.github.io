import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import cx from 'classnames';
import Moment from 'react-moment';

import * as utils from '../../../utils/destinyUtils';
import { removeMemberIds } from '../../../utils/paths';
import manifest from '../../../utils/manifest';
import ObservedImage from '../../ObservedImage';
import Button from '../../../components/UI/Button';

import './styles.css';

class Characters extends React.Component {
  render() {
    const { t, member, viewport } = this.props;
    let characters = member.data.profile.characters.data;
    let charactersByLastPlayed = Object.entries(member.data.profile.characterActivities.data).sort((a, b) => {
      let x = new Date(a[1].dateActivityStarted).getTime();
      let y = new Date(b[1].dateActivityStarted).getTime();

      return y - x;
    });
    let characterProgressions = member.data.profile.characterProgressions.data;
    let characterActivities = member.data.profile.characterActivities.data;

    let charactersIdLastPlayed = charactersByLastPlayed.length ? charactersByLastPlayed[0][0] : false;

    return (
      <div className={cx('characters-list', { responsive: viewport.width < 1024 })}>
        {characters.map(character => {
          let capped = characterProgressions[character.characterId].progressions[1716568313].level === characterProgressions[character.characterId].progressions[1716568313].levelCap ? true : false;

          let progress = capped ? characterProgressions[character.characterId].progressions[2030054750].progressToNextLevel / characterProgressions[character.characterId].progressions[2030054750].nextLevelAt : characterProgressions[character.characterId].progressions[1716568313].progressToNextLevel / characterProgressions[character.characterId].progressions[1716568313].nextLevelAt;

          let state = null;
          if (character.characterId === charactersIdLastPlayed && characterActivities[character.characterId].currentActivityHash !== 0) {
            if (manifest.DestinyActivityDefinition[characterActivities[character.characterId].currentActivityHash] && manifest.DestinyActivityDefinition[characterActivities[character.characterId].currentActivityHash].placeHash === 2961497387) {
              state = (
                <>
                  <div className='activity'>Orbit</div>
                  <Moment fromNow>{characters.find(d => d.characterId === character.characterId).dateLastPlayed}</Moment>
                </>
              );
            } else {
              state = (
                <>
                  {!manifest.DestinyActivityModeDefinition[characterActivities[character.characterId].currentActivityModeHash] || !manifest.DestinyActivityModeDefinition[characterActivities[character.characterId].currentActivityModeHash].displayProperties || !manifest.DestinyActivityDefinition[characterActivities[character.characterId].currentActivityHash] || !manifest.DestinyActivityDefinition[characterActivities[character.characterId].currentActivityHash].displayProperties ? (
                    <div className='activity'>Classified</div>
                  ) : (
                    <div className='activity'>
                      {manifest.DestinyActivityModeDefinition[characterActivities[character.characterId].currentActivityModeHash].displayProperties.name}: {manifest.DestinyActivityDefinition[characterActivities[character.characterId].currentActivityHash].displayProperties.name}
                    </div>
                  )}
                  <Moment fromNow>{characters.find(d => d.characterId === character.characterId).dateLastPlayed}</Moment>
                </>
              );
            }
          } else {
            state = (
              <>
                <div className='time-before'>{t('Last played')}</div>
                <Moment fromNow>{characters.find(d => d.characterId === character.characterId).dateLastPlayed}</Moment>
              </>
            );
          }

          return (
            <div key={character.characterId} className='char'>
              <Button
                className='linked'
                anchor
                to={`/${member.membershipType}/${member.membershipId}/${character.characterId}${removeMemberIds(this.props.location.pathname)}`}
                action={e => {
                  this.props.characterClick(character.characterId);
                }}
              >
                <ObservedImage
                  className={cx('image', 'emblem', {
                    missing: !character.emblemBackgroundPath
                  })}
                  src={`https://www.bungie.net${character.emblemBackgroundPath ? character.emblemBackgroundPath : `/img/misc/missing_icon_d2.png`}`}
                />
                <div className='class'>{utils.classHashToString(character.classHash, character.genderType)}</div>
                <div className='species'>{utils.raceHashToString(character.raceHash, character.genderType)}</div>
                <div className='light'>{character.light}</div>
                <div className='level'>
                  {t('Level')} {character.baseCharacterLevel}
                </div>
                <div className='progress'>
                  <div
                    className={cx('bar', {
                      capped: capped
                    })}
                    style={{
                      width: `${progress * 100}%`
                    }}
                  />
                </div>
              </Button>
              {character.titleRecordHash ? <div className='title'>{manifest.DestinyRecordDefinition[character.titleRecordHash].titleInfo.titlesByGenderHash[character.genderHash]}</div> : null}
              <div className='state'>{state}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    viewport: state.viewport
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(Characters);
