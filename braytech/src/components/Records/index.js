import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import orderBy from 'lodash/orderBy';
import cx from 'classnames';

import ObservedImage from '../ObservedImage';
import { ProfileLink } from '../../components/ProfileLink';
import Collectibles from '../../components/Collectibles';
import ProgressBar from '../UI/ProgressBar';
import manifest from '../../utils/manifest';
import * as paths from '../../utils/paths';
import { enumerateRecordState } from '../../utils/destinyEnums';

import './styles.css';

class Records extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToRecordRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.highlight && this.scrollToRecordRef.current !== null) {
      window.scrollTo({
        top: this.scrollToRecordRef.current.offsetTop + this.scrollToRecordRef.current.offsetHeight / 2 - window.innerHeight / 2
      });
    }
  }

  trackThisClick = e => {
    let tracked = this.props.triumphs.tracked;
    let hashToTrack = parseInt(e.currentTarget.dataset.hash, 10);
    let target = tracked.indexOf(hashToTrack);

    if (target > -1) {
      tracked = tracked.filter((hash, index) => index !== target);
    } else {
      tracked.push(hashToTrack);
    }

    this.props.setTrackedTriumphs(tracked);
  };

  selfLink = hash => {
    let link = ['/triumphs'];
    let root = manifest.DestinyPresentationNodeDefinition[manifest.settings.destiny2CoreSettings.recordsRootNode];
    let seals = manifest.DestinyPresentationNodeDefinition[manifest.settings.destiny2CoreSettings.medalsRootNode];

    root.children.presentationNodes.forEach(nP => {
      let nodePrimary = manifest.DestinyPresentationNodeDefinition[nP.presentationNodeHash];              

      nodePrimary.children.presentationNodes.forEach(nS => {
        let nodeSecondary = manifest.DestinyPresentationNodeDefinition[nS.presentationNodeHash];

        nodeSecondary.children.presentationNodes.forEach(nT => {
          let nodeTertiary = manifest.DestinyPresentationNodeDefinition[nT.presentationNodeHash];

          if (nodeTertiary.children.records.length) {
            let found = nodeTertiary.children.records.find(c => c.recordHash === parseInt(hash, 10));
            if (found) {
              link.push(nodePrimary.hash, nodeSecondary.hash, nodeTertiary.hash, found.recordHash)
            }
          } else {
            nodeTertiary.children.presentationNodes.forEach(nQ => {
              let nodeQuaternary = manifest.DestinyPresentationNodeDefinition[nQ.presentationNodeHash];

              if (nodeQuaternary.children.records.length) {
                let found = nodeQuaternary.children.records.find(c => c.recordHash === hash);
                if (found) {
                  link.push(nodePrimary.hash, nodeSecondary.hash, nodeTertiary.hash, nodeQuaternary.hash, found.recordHash)
                }
              }      
            });
          }

        });
      });
    });

    if (link.length === 1) {
      seals.children.presentationNodes.forEach(nP => {
        let nodePrimary = manifest.DestinyPresentationNodeDefinition[nP.presentationNodeHash];              

        if (nodePrimary.children.records.length) {
          let found = nodePrimary.children.records.find(c => c.recordHash === parseInt(hash, 10));
          if (found) {
            link.push('seal', nodePrimary.hash, found.recordHash)
          }
        }

      });
    }

    link = link.join('/');
    return link;
  }

  render() {
    const { t, hashes, member, triumphs, collectibles, ordered, limit, selfLinkFrom, readLink, forceDisplay = false } = this.props;
    const highlight = parseInt(this.props.highlight, 10) || false;
    const recordsRequested = hashes;
    const characterId = member && member.characterId;
    const characterRecords = member && member.data.profile.characterRecords.data;
    const profileRecords = member && member.data.profile.profileRecords.data.records;
    const tracked = triumphs.tracked;

    let recordsOutput = [];
    recordsRequested.forEach(hash => {
      const definitionRecord = manifest.DestinyRecordDefinition[hash];
      const recordScope = definitionRecord.scope || 0;
      const recordData = recordScope === 1 ? characterRecords && characterRecords[characterId].records[definitionRecord.hash] : profileRecords && profileRecords[definitionRecord.hash];

      // console.log(definitionRecord.displayProperties.name)
      // console.log(recordData)
      // console.log(enumerateRecordState(recordData.state))
      // console.log('---')
      // const recordData = {
      //   ...characterRecords && characterRecords[characterId].records[definitionRecord.hash],
      //   ...profileRecords && profileRecords[definitionRecord.hash]
      // };

      //console.log(enumerateRecordState(characterRecords[characterId].records[definitionRecord.hash] && characterRecords[characterId].records[definitionRecord.hash].state), enumerateRecordState(profileRecords[definitionRecord.hash] && profileRecords[definitionRecord.hash].state))

      let objectives = [];
      let completionValueTotal = 0;
      let progressValueTotal = 0;
      
      let link = this.selfLink(hash);

      // readLink
      if (definitionRecord.loreHash && !selfLinkFrom && readLink) {
        link = `/read/record/${definitionRecord.hash}`;
      }

      if (definitionRecord.objectiveHashes) {
        definitionRecord.objectiveHashes.forEach((hash, index) => {
          let definitionObjective = manifest.DestinyObjectiveDefinition[hash];

          let playerProgress = recordData && recordData.objectives.find(o => o.objectiveHash === hash);
          playerProgress = playerProgress ? playerProgress : {
            complete: false,
            progress: 0,
            objectiveHash: definitionObjective.hash
          };

          // override
          if (hash === 1278866930 && playerProgress.complete) {
            playerProgress.progress = 16;
          }

          objectives.push(<ProgressBar key={`${hash}${index}`} objective={definitionObjective} progress={playerProgress} />);

          if (playerProgress) {
            let v = parseInt(playerProgress.completionValue, 10);
            let p = parseInt(playerProgress.progress, 10);

            completionValueTotal = completionValueTotal + v;
            progressValueTotal = progressValueTotal + (p > v ? v : p); // prevents progress values that are greater than the completion value from affecting the average
          }
        });
      }

      let progressDistance = progressValueTotal / completionValueTotal;
      progressDistance = Number.isNaN(progressDistance) ? 0 : progressDistance;

      let state = recordData && Number.isInteger(recordData.state) ? recordData.state : 4;

      if (enumerateRecordState(state).invisible && (collectibles && collectibles.hideInvisibleRecords)) {
        return;
      }

      if (enumerateRecordState(state).recordRedeemed && (collectibles && collectibles.hideCompletedRecords) && !forceDisplay) {
        return;
      }

      let ref = highlight === definitionRecord.hash ? this.scrollToRecordRef : null;

      if (definitionRecord.redacted) {
        recordsOutput.push({
          completed: enumerateRecordState(state).recordRedeemed,
          progressDistance,
          hash: definitionRecord.hash,
          element: (
            <li
              key={definitionRecord.hash}
              ref={ref}
              className={cx('redacted', {
                // eslint-disable-next-line eqeqeq
                highlight: highlight && highlight == definitionRecord.hash
              })}
            >
              <div className='properties'>
                <div className='icon'>
                  <ObservedImage className={cx('image', 'icon')} src={`https://www.bungie.net${manifest.settings.destiny2CoreSettings.undiscoveredCollectibleImage}`} />
                </div>
                <div className='text'>
                  <div className='name'>Classified record</div>
                  <div className='description'>This record is classified and may be revealed at a later time.</div>
                </div>
              </div>
            </li>
          )
        });
      } else {
        let description = definitionRecord.displayProperties.description !== '' ? definitionRecord.displayProperties.description : false;
        description = !description && definitionRecord.loreHash ? manifest.DestinyLoreDefinition[definitionRecord.loreHash].displayProperties.description.slice(0, 117).trim() + '...' : description;
        // if (recordDefinition.hash === 2367932631) { ????
        //   console.log(enumerateRecordState(state));
        // }

        let linkTo;
        if (link && selfLinkFrom) {
          linkTo = {
            pathname: link,
            state: {
              from: selfLinkFrom
            }
          };
        }
        if (link && readLink) {
          linkTo = {
            pathname: link,
            state: {
              from: this.props.location.pathname
            }
          };
        }

        let rewards;
        if (definitionRecord.rewardItems && definitionRecord.rewardItems.length) {
          rewards = definitionRecord.rewardItems.map(r => {
            let definitionItem = manifest.DestinyInventoryItemDefinition[r.itemHash];
            let definitionCollectible = definitionItem.collectibleHash ? manifest.DestinyCollectibleDefinition[definitionItem.collectibleHash] : false;

            if (definitionCollectible && !definitionCollectible.redacted) {
              return definitionCollectible.hash;
            } else {
              return false;
            }
          }).filter(r => r);
        }

        recordsOutput.push({
          completed: enumerateRecordState(state).recordRedeemed,
          progressDistance,
          hash: definitionRecord.hash,
          element: (
            <li
              key={definitionRecord.hash}
              ref={ref}
              className={cx({
                linked: link && linkTo,
                highlight: highlight && highlight === definitionRecord.hash,
                completed: enumerateRecordState(state).recordRedeemed,
                unredeemed: !enumerateRecordState(state).recordRedeemed && !enumerateRecordState(state).objectiveNotCompleted,
                tracked: tracked.includes(definitionRecord.hash) && !enumerateRecordState(state).recordRedeemed && enumerateRecordState(state).objectiveNotCompleted,
                'no-description': !description
              })}
            >
              {!enumerateRecordState(state).recordRedeemed && enumerateRecordState(state).objectiveNotCompleted ? (
                <div className='track-this' onClick={this.trackThisClick} data-hash={definitionRecord.hash}>
                  <div />
                </div>
              ) : null}
              <div className='properties'>
                <div className='icon'>
                  <ObservedImage className={cx('image', 'icon')} src={`https://www.bungie.net${definitionRecord.displayProperties.icon}`} />
                </div>
                <div className='text'>
                  <div className='name'>{definitionRecord.displayProperties.name}</div>
                  <div className='meta'>
                    <div className='commonality tooltip' data-hash='commonality' data-table='BraytechDefinition'>{manifest.statistics.triumphs && manifest.statistics.triumphs[definitionRecord.hash] ? manifest.statistics.triumphs[definitionRecord.hash] : `0.00`}%</div>
                    {definitionRecord.completionInfo && definitionRecord.completionInfo.ScoreValue !== 0 ? <div className='score tooltip' data-hash='score' data-table='BraytechDefinition'>{definitionRecord.completionInfo.ScoreValue}</div> : null}
                  </div>
                  <div className='description'>{description}</div>
                </div>
              </div>
              <div className='objectives'>{objectives}</div>
              {rewards && rewards.length ? (
                <ul className='list rewards collection-items'>
                  <Collectibles forceDisplay selfLinkFrom={paths.removeMemberIds(this.props.location.pathname)} hashes={rewards} />
                </ul>
              ) : null}
              {link && linkTo ? !selfLinkFrom && readLink ? <Link to={linkTo} /> : <ProfileLink to={linkTo} /> : null}
            </li>
          )
        });
      }
    });

    if (recordsRequested.length > 0 && recordsOutput.length === 0 && collectibles && collectibles.hideCompletedRecords && !forceDisplay) {
      recordsOutput.push({
        element: (
          <li key='lol' className='all-completed'>
            <div className='properties'>
              <div className='text'>{t('All completed')}</div>
            </div>
          </li>
        )
      });
    }

    if (ordered === 'progress') {
      recordsOutput = orderBy(recordsOutput, [item => item.progressDistance], ['desc']);
    } else if (ordered) {
      recordsOutput = orderBy(recordsOutput, [item => item.completed], ['asc']);
    } else {
    }

    if (limit) {
      recordsOutput = recordsOutput.slice(0, limit);
    }

    return recordsOutput.map(obj => obj.element);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    triumphs: state.triumphs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTrackedTriumphs: value => {
      dispatch({ type: 'SET_TRACKED_TRIUMPHS', payload: value });
    }
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withTranslation()
)(Records);
