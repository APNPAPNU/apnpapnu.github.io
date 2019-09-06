import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { orderBy, flattenDepth } from 'lodash';
import cx from 'classnames';

import manifest from '../../utils/manifest';
import * as utils from '../../utils/destinyUtils';
import ObservedImage from '../../components/ObservedImage';
import Spinner from '../../components/UI/Spinner';
import ProgressBar from '../../components/UI/ProgressBar';
import Ranks from '../../components/Ranks';
import Roster from '../../components/Roster';

import './styles.css';

class SitRep extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.rebindTooltips();
  }

  render() {
    const { t, member, groupMembers } = this.props;
    const group = member.data.groups.results.length > 0 ? member.data.groups.results[0].group : false;
    const characters = member.data.profile.characters.data;
    const character = characters.find(c => c.characterId === member.characterId);
    const characterProgressions = member.data.profile.characterProgressions.data;

    // const milestonesData = Object.values(member.data.milestones).map(m => manifest.DestinyMilestoneDefinition[m.milestoneHash]);
    // console.log(milestonesData);

    // const times = [
    //   { "name": "Ice and Shadow", "mins": 5 },
    //   { "name": "The Gateway", "mins": 5 },
    //   { "name": "Riptide", "mins": 5 },
    //   { "name": "A Deadly Trial", "mins": 5 },
    //   { "name": "Unbroken", "mins": 5 },
    //   { "name": "Utopia", "mins": 6 },
    //   { "name": "Looped", "mins": 6 },
    //   { "name": "Hope", "mins": 6 },
    //   { "name": "Hijacked", "mins": 6 },
    //   { "name": "Deep Storage", "mins": 6 },
    //   { "name": "Combustion", "mins": 7 },
    //   { "name": "Payback", "mins": 7 },
    //   { "name": "Pilgrimage", "mins": 7 },
    //   { "name": "Larceny", "mins": 7 },
    //   { "name": "Sacrilege", "mins": 7 },
    //   { "name": "Homecoming", "mins": 7 },
    //   { "name": "Six", "mins": 8 },
    //   { "name": "Chosen", "mins": 9 },
    //   { "name": "Fury", "mins": 9 },
    //   { "name": "High Plains Blues", "mins": 9 },
    //   { "name": "Scorned", "mins": 9 },
    //   { "name": "Omega", "mins": 11 },
    //   { "name": "Beyond Infinity", "mins": 11 },
    //   { "name": "1AU", "mins": 12 },
    //   { "name": "The Machinist", "mins": 12 },
    //   { "name": "Last Call", "mins": 13 },
    //   { "name": "Nothing Left to Say", "mins": 13 },
    //   { "name": "Off-World Recovery", "mins": 12 }
    // ];

    // let obj = {};

    // manifest.DestinyMilestoneDefinition[3082135827].activities.forEach(ac => {
    //   let def = manifest.DestinyActivityDefinition[ac.activityHash];

    //   let time = times.find(t => t.name.toLowerCase().trim() === def.selectionScreenDisplayProperties.name.toLowerCase().trim())
    //   if (!time) console.log(def)
    //   obj[def.hash] = {
    //     timeToComplete: time && time.mins || -1
    //   }
    // })

    // console.log(JSON.stringify(obj))

    let milestones = [];
    Object.values(characterProgressions[member.characterId].milestones).forEach(milestone => {
      let def = manifest.DestinyMilestoneDefinition[milestone.milestoneHash];

      if (milestone.milestoneHash === 4253138191) {
        return; // Weekly Clan Engrams
      }

      // console.log(def.displayProperties.name, milestone);

      // if (milestone.milestoneHash === 1300394968) console.log(def.displayProperties.name, milestone);

      let state = {
        earned: false,
        redeemed: false,
        objective: {
          progress: 0,
          completionValue: 1
        },
        rewards: [],
        supps: false
      };

      let displayProperties = {
        name: def.displayProperties.name,
        description: def.displayProperties.description
      };

      if (milestone.availableQuests) {
        let availableQuest = milestone.availableQuests[0];

        state.earned = availableQuest.status.completed;
        state.redeemed = availableQuest.status.redeemed;
        state.objective.progress = availableQuest.status.stepObjectives[0].progress;
        state.objective.completionValue = availableQuest.status.stepObjectives[0].completionValue;

        displayProperties.name = manifest.DestinyMilestoneDefinition[milestone.milestoneHash].quests[availableQuest.questItemHash].displayProperties.name;
        displayProperties.description = manifest.DestinyObjectiveDefinition[availableQuest.status.stepObjectives[0].objectiveHash].displayProperties.description !== '' ? manifest.DestinyObjectiveDefinition[availableQuest.status.stepObjectives[0].objectiveHash].displayProperties.description : manifest.DestinyObjectiveDefinition[availableQuest.status.stepObjectives[0].objectiveHash].progressDescription;

        let questItem = manifest.DestinyInventoryItemDefinition[availableQuest.questItemHash];
        if (questItem.value) {
          let questRewardItem = questItem.value.itemValue.find(i => i.itemHash);
          if (questRewardItem) {
            state.rewards.push(questRewardItem.itemHash);
          }
        }
      } else if (milestone.rewards) {
        if (milestone.activities && milestone.activities.length) {
          milestone.activities.forEach(a => {
            if (a.challenges.length > 0) {
              a.challenges.forEach(c => {
                state.earned = c.objective.complete;
                state.objective.progress = c.objective.progress;
                state.objective.completionValue = c.objective.completionValue;
              });
            }
          });
        } else {
          state.earned = milestone.rewards[0].entries[0].earned;
          state.redeemed = milestone.rewards[0].entries[0].redeemed;
        }

        let rewardEntryHashes = flattenDepth(milestone.rewards.map(r => r.entries), 1).map(r => r.rewardEntryHash);
        let mappedRewards = flattenDepth(rewardEntryHashes.map(r => Object.values(manifest.DestinyMilestoneDefinition[milestone.milestoneHash].rewards[r].rewardEntries).find(e => e.rewardEntryHash === r).items), 1).map(i => i.itemHash);

        state.rewards.push(...mappedRewards);
      } else {
        return;
      }

      if ([3082135827, 2171429505, 1300394968].includes(milestone.milestoneHash)) {
        let activities = milestone.activities;
        if (milestone.milestoneHash === 2171429505) activities = milestone.activities.filter(nf => nf.modifierHashes);
        if (milestone.milestoneHash === 1300394968) activities = milestone.activities.filter(ad => ad.challenges.length);

        state.supps = (
          <>
            <h4>{t('Activities available')}</h4>
            <ul className='list activities'>
              {orderBy(
                activities.map((ac, i) => {
                  const definitionActivity = manifest.DestinyActivityDefinition[ac.activityHash];

                  return {
                    light: definitionActivity.activityLightLevel,
                    el: (
                      <li key={i} className='linked tooltip' data-table='DestinyActivityDefinition' data-hash={ac.activityHash}>
                        <div className='name'>{definitionActivity.selectionScreenDisplayProperties && definitionActivity.selectionScreenDisplayProperties.name ? definitionActivity.selectionScreenDisplayProperties.name : definitionActivity.displayProperties && definitionActivity.displayProperties.name ? definitionActivity.displayProperties.name : t('Unknown')}</div>
                        <div>
                          <div className='time'>
                            {definitionActivity.timeToComplete ? (
                              <>
                                {t('{{number}} mins', { number: definitionActivity.timeToComplete || 0 })}
                              </>
                            ) : null}
                          </div>
                          <div className='light'>
                            <span>{definitionActivity.activityLightLevel}</span>
                          </div>
                        </div>
                      </li>
                    )
                  };
                }),
                [m => m.light],
                ['asc']
              ).map(e => e.el)}
            </ul>
          </>
        );
      }

      // console.log(state.rewards)

      milestones.push({
        order: milestone.order,
        element: (
          <li key={milestone.milestoneHash} className={cx(`milestone-${milestone.milestoneHash}`, { 'has-icon': [3082135827, 2171429505, 1300394968].includes(milestone.milestoneHash), 'full-width': [3082135827, 2171429505, 1300394968].includes(milestone.milestoneHash), supps: state.supps, earned: state.earned })}>
            <ProgressBar
              objective={{
                progressDescription: displayProperties.name,
                completionValue: state.objective.completionValue
              }}
              progress={{
                progress: state.objective.progress,
                objectiveHash: milestone.milestoneHash
              }}
              hideCheck
            />
            <div className='basic'>
              <div className='text'>{displayProperties.description}</div>
              {state.rewards.map((r, i) => {
                const def = manifest.DestinyInventoryItemDefinition[r];
                return (
                  <div key={i} className='reward'>
                    <ObservedImage className='image' src={`https://www.bungie.net${def.displayProperties.icon}`} />
                    <div className='name'>{def.displayProperties.name}</div>
                  </div>
                );
              })}
            </div>
            {state.supps ? <div className='supps'>{state.supps}</div> : null}
          </li>
        )
      });
    });

    milestones = orderBy(milestones, [m => m.order], ['asc']);

    const wellRestedState = utils.isWellRested(characterProgressions[character.characterId]);

    if (wellRestedState.wellRested) {
      const definitionSandboxPerk = manifest.DestinySandboxPerkDefinition[1519921522];

      milestones.unshift({
        order: 0,
        element: (
          <li key='rest' className='well-rested'>
            <ProgressBar
              objective={{
                progressDescription: definitionSandboxPerk.displayProperties && definitionSandboxPerk.displayProperties.name,
                completionValue: wellRestedState.requiredXP
              }}
              progress={{
                progress: wellRestedState.progress,
                objectiveHash: 'rest'
              }}
              hideCheck
            />
            <div className='basic'>
              <div className='text'>{definitionSandboxPerk.displayProperties && definitionSandboxPerk.displayProperties.description}</div>
            </div>
          </li>
        )
      });
    }

    // console.log(member);

    return (
      <div className='view' id='sit-rep'>
        <div className='module milestones'>
          <div className='sub-header sub'>
            <div>{t('Milestones')}</div>
          </div>
          {milestones.length ? <ul className='list'>{milestones.map(m => m.element)}</ul> : <div className='milestones-completed'>{t("You've completed all of your milestones for this character.")}</div>}
        </div>
        <div className='module'>
          <div className='sub-header sub'>
            <div>{t('Ranks')}</div>
          </div>
          <ul className='list ranks'>
            {[2772425241, 2626549951, 2000925172].map(hash => {
              return <Ranks key={hash} hash={hash} data={{ membershipType: member.membershipType, membershipId: member.membershipId, characterId: member.characterId, characters: member.data.profile.characters.data, characterProgressions }} />;
            })}
          </ul>
        </div>
        {group ? (
          <div className='module clan-roster'>
            <div className='sub-header sub'>
              <div>{t('Clan roster')}</div>
              <div>{groupMembers.members.filter(member => member.isOnline).length} online</div>
            </div>
            <div className='refresh'>{groupMembers.loading && groupMembers.members.length !== 0 ? <Spinner mini /> : null}</div>
            {groupMembers.loading && groupMembers.members.length === 0 ? <Spinner /> : <Roster mini showOnline />}
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    groupMembers: state.groupMembers,
    collectibles: state.collectibles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rebindTooltips: value => {
      dispatch({ type: 'REBIND_TOOLTIPS', payload: new Date().getTime() });
    }
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withTranslation()
)(SitRep);
