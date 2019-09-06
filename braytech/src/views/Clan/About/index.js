import React from 'react';
import ReactMarkdown from 'react-markdown';
import cx from 'classnames';

import * as bungie from '../../../utils/bungie';
import ClanBanner from '../../../components/UI/ClanBanner';
import Roster from '../../../components/Roster';
import Spinner from '../../../components/UI/Spinner';
import ProgressBar from '../../../components/UI/ProgressBar';
import Checkbox from '../../../components/UI/Checkbox';
import manifest from '../../../utils/manifest';

import ClanViewsLinks from '../ClanViewsLinks';

import './styles.css';

class AboutView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weeklyRewardState: false
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);

    const groupId = this.props.group.groupId;
    const groupWeeklyRewardState = await bungie.GetClanWeeklyRewardState(groupId);

    this.setState({ weeklyRewardState: groupWeeklyRewardState });
  }

  render() {
    const { t, member, group, groupMembers } = this.props;

    const weeklyRewardState = this.state.weeklyRewardState;

    const clanLevel = group.clanInfo.d2ClanProgressions[584850370];

    const weeklyClanEngramsDefinition = manifest.DestinyMilestoneDefinition[4253138191].rewards[1064137897].rewardEntries;
    let rewardState = null;
    if (this.state.weeklyRewardState) {
      rewardState = weeklyRewardState.rewards.find(reward => reward.rewardCategoryHash === 1064137897).entries;
    }

    return (
      <>
        <ClanViewsLinks {...this.props} />
        <div className='module banner'>
          <ClanBanner bannerData={group.clanInfo.clanBannerData} />
        </div>
        <div className='module about'>
          <div className='module-header'>
            <div className='sub-name'>{t('About')}</div>
          </div>
          <ReactMarkdown className={cx('bio', { 'includes-motto': group.motto !== '' })} escapeHtml disallowedTypes={['image', 'imageReference']} source={group.motto !== '' ? `_${group.motto}_\n\n${group.about}` : group.about} />
        </div>
        <div className='module progression'>
          <div className='module-header'>
            <div className='sub-name'>{t('Progression')}</div>
          </div>
          <h4>{t('Level')}</h4>
          {clanLevel.level === clanLevel.levelCap ? (
            <ProgressBar
              classNames='level-6'
              objective={{
                progressDescription: `${t('Level')} ${clanLevel.level}`,
                completionValue: 1
              }}
              progress={{
                progress: 1,
                objectiveHash: 'clanLevel'
              }}
              hideCheck
              chunky
            />
          ) : (
            <ProgressBar
              objective={{
                progressDescription: `${t('Level')} ${clanLevel.level}`,
                completionValue: clanLevel.nextLevelAt
              }}
              progress={{
                progress: clanLevel.progressToNextLevel,
                objectiveHash: 'clanLevel'
              }}
              hideCheck
              chunky
            />
          )}
          <h4>{t('Engrams')}</h4>
          <ul className='clan-rewards'>
            {rewardState ? (
              rewardState.map(reward => (
                <li key={reward.rewardEntryHash}>
                  <Checkbox completed={reward.earned} text={weeklyClanEngramsDefinition[reward.rewardEntryHash].displayProperties.name} />
                </li>
              ))
            ) : (
              <Spinner mini />
            )}
          </ul>
        </div>
        <div className='module roster'>
          <div className='module-header'>
            <div className='sub-name'>{t('Roster')}</div>
          </div>
          {groupMembers.loading && groupMembers.members.length === 0 ? <Spinner mini /> : <Roster mini limit='10' />}
        </div>
      </>
    );
  }
}

export default AboutView;
