import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import cx from 'classnames';
import moment from 'moment';
import orderBy from 'lodash/orderBy';

import * as ls from '../../utils/localStorage';
import * as utils from '../../utils/destinyUtils';
import { ProfileLink } from '../../components/ProfileLink';
import getGroupMembers from '../../utils/getGroupMembers';
import MemberLink from '../MemberLink';

import './styles.css';

class Roster extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {
        sort: false,
        dir: 'desc'
      }
    };
  }

  componentDidMount() {
    const { member } = this.props;
    const group = member.data.groups.results.length > 0 ? member.data.groups.results[0].group : false;

    if (group) {
      this.callGetGroupMembers(group);
      this.startInterval();
    }
  }

  callGetGroupMembers = () => {
    const { member, groupMembers } = this.props;
    const result = member.data.groups.results.length > 0 ? member.data.groups.results[0] : false;

    const auth = ls.get('setting.auth');
    const isAuthed = auth && auth.destinyMemberships && auth.destinyMemberships.find(m => m.membershipId === member.membershipId);

    let now = new Date();

    if (result && (now - groupMembers.lastUpdated > 30000 || result.group.groupId !== groupMembers.groupId)) {
      getGroupMembers(result.group, result.member.memberType > 2 && isAuthed);
    }
  };

  startInterval() {
    this.refreshClanDataInterval = window.setInterval(this.callGetGroupMembers, 60000);
  }

  clearInterval() {
    window.clearInterval(this.refreshClanDataInterval);
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  changeSortTo = to => {
    this.setState((prevState, props) => {
      prevState.order.dir = prevState.order.sort === to && prevState.order.dir === 'desc' ? 'asc' : 'desc';
      prevState.order.sort = to;
      return prevState;
    });
  };

  render() {
    const { t, member, groupMembers, mini, showOnline = false } = this.props;

    let members = [];
    let results = showOnline ? groupMembers.members.filter(r => r.isOnline) : groupMembers.members;

    results.forEach(m => {
      let isPrivate = !m.profile || (!m.profile.characterActivities.data || !m.profile.characters.data.length);
      let isSelf = !isPrivate ? m.profile.profile.data.userInfo.membershipType.toString() === member.membershipType && m.profile.profile.data.userInfo.membershipId === member.membershipId : false;
      let { lastPlayed, lastActivity, lastCharacter, lastMode, display } = utils.lastPlayerActivity(m);
      let triumphScore = !isPrivate ? m.profile.profileRecords.data.score : 0;
      let valorPoints = !isPrivate ? m.profile.characterProgressions.data[m.profile.characters.data[0].characterId].progressions[2626549951].currentProgress : 0;
      let valorResets = !isPrivate ? (m.profile.profileRecords.data.records[559943871] ? m.profile.profileRecords.data.records[559943871].objectives[0].progress : 0) : 0;
      let gloryPoints = !isPrivate ? m.profile.characterProgressions.data[m.profile.characters.data[0].characterId].progressions[2000925172].currentProgress : 0;
      let infamyPoints = !isPrivate ? m.profile.characterProgressions.data[m.profile.characters.data[0].characterId].progressions[2772425241].currentProgress : 0;
      let infamyResets = !isPrivate ? (m.profile.profileRecords.data.records[3901785488] ? m.profile.profileRecords.data.records[3901785488].objectives[0].progress : 0) : 0;
      let characterIds = !isPrivate ? m.profile.characters.data.map(c => c.characterId) : [];
      let weeklyXp = !isPrivate ? characterIds.reduce((currentValue, characterId) => {
        let characterProgress = m.profile.characterProgressions.data[characterId].progressions[540048094].weeklyProgress || 0;
        return characterProgress + currentValue;
      }, 0) : 0;

      let totalValor = utils.totalValor();
      let totalInfamy = utils.totalInfamy();

      valorPoints = valorResets * totalValor + valorPoints;
      infamyPoints = infamyResets * totalInfamy + infamyPoints;

      /*

        lastPlayed:     Date
        lastActivity:   Object
        lastCharacter:  Object
        lastMode:       Object
        display:        String

      */

      // if (m.isOnline) {
      //   console.log(lastPlayed);
      // }

      members.push({
        sorts: {
          private: isPrivate,
          isOnline: m.isOnline,
          lastPlayed,
          lastActivity,
          lastCharacter: !isPrivate ? lastCharacter : false,
          triumphScore,
          gloryPoints,
          valorPoints,
          infamyPoints,
          weeklyXp: weeklyXp / characterIds.length * 5000
        },
        el: {
          full: (
            <li key={m.destinyUserInfo.membershipType + m.destinyUserInfo.membershipId} className={cx('row', { self: isSelf })}>
              <ul>
                <li className='col member'>
                  <MemberLink type={m.destinyUserInfo.membershipType} id={m.destinyUserInfo.membershipId} groupId={m.destinyUserInfo.groupId} displayName={m.destinyUserInfo.displayName} hideEmblemIcon={!m.isOnline} />
                </li>
                {!isPrivate ? (
                  <>
                    <li className='col lastCharacter'>
                      <div className='icon'>
                        <i
                          className={`destiny-class_${utils
                            .classTypeToString(lastCharacter.classType)
                            .toString()
                            .toLowerCase()}`}
                        />
                      </div>
                      <div className='icon'>
                        <div>{lastCharacter.baseCharacterLevel}</div>
                      </div>
                      <div className='icon'>
                        <div className={cx({ 'max-ish': lastCharacter.light >= 740, max: lastCharacter.light === 750 })}>
                          <span>{lastCharacter.light}</span>
                        </div>
                      </div>
                    </li>
                    <li className={cx('col', 'lastActivity', { display: m.isOnline && display })}>
                      <div>
                        {m.isOnline && display ? (
                          <>
                            {display} <span>{moment(lastPlayed).locale('en-sml').fromNow(true)}</span>
                          </>
                        ) : (
                          moment(lastPlayed).locale('en-sml').fromNow()
                        )}
                      </div>
                    </li>
                    <li className='col triumphScore'>{triumphScore.toLocaleString('en-us')}</li>
                    <li className='col progression glory'>{gloryPoints.toLocaleString('en-us')}</li>
                    <li className='col progression valor'>
                      {valorPoints.toLocaleString('en-us')} {valorResets ? <div className='resets'>({valorResets})</div> : null}
                    </li>
                    <li className='col progression infamy'>
                      {infamyPoints.toLocaleString('en-us')} {infamyResets ? <div className='resets'>({infamyResets})</div> : null}
                    </li>
                    <li className='col weeklyXp'><span>{weeklyXp.toLocaleString('en-us')}</span> / {(characterIds.length * 5000).toLocaleString('en-us')}</li>
                  </>
                ) : (
                  <>
                    <li className='col lastCharacter'>–</li>
                    <li className='col lastActivity'>–</li>
                    <li className='col triumphScore'>–</li>
                    <li className='col glory'>–</li>
                    <li className='col valor'>–</li>
                    <li className='col infamy'>–</li>
                    <li className='col weeklyXp'>–</li>
                  </>
                )}
              </ul>
            </li>
          ),
          mini: (
            <li key={m.destinyUserInfo.membershipType + m.destinyUserInfo.membershipId} className='row'>
              <ul>
                <li className='col member'>
                  <MemberLink type={m.destinyUserInfo.membershipType} id={m.destinyUserInfo.membershipId} groupId={m.destinyUserInfo.groupId} displayName={m.destinyUserInfo.displayName} hideEmblemIcon={!m.isOnline} />
                </li>
              </ul>
            </li>
          )
        }
      });
    });

    let order = this.state.order;

    if (order.sort === 'lastCharacter') {
      members = orderBy(members, [m => m.sorts.private, m => m.sorts.lastCharacter.baseCharacterLevel, m => m.sorts.lastCharacter.light, m => m.sorts.lastPlayed], ['asc', order.dir, order.dir, 'desc']);
    } else if (order.sort === 'triumphScore') {
      members = orderBy(members, [m => m.sorts.private, m => m.sorts.triumphScore, m => m.sorts.lastPlayed], ['asc', order.dir, 'desc']);
    } else if (order.sort === 'valor') {
      members = orderBy(members, [m => m.sorts.private, m => m.sorts.valorPoints, m => m.sorts.lastPlayed], ['asc', order.dir, 'desc']);
    } else if (order.sort === 'glory') {
      members = orderBy(members, [m => m.sorts.private, m => m.sorts.gloryPoints, m => m.sorts.lastPlayed], ['asc', order.dir, 'desc']);
    } else if (order.sort === 'infamy') {
      members = orderBy(members, [m => m.sorts.private, m => m.sorts.infamyPoints, m => m.sorts.lastPlayed], ['asc', order.dir, 'desc']);
    } else if (order.sort === 'weeklyXp') {
      members = orderBy(members, [m => m.sorts.private, m => m.sorts.weeklyXp, m => m.sorts.lastPlayed], ['asc', order.dir, 'desc']);
    } else {
      members = orderBy(members, [m => m.sorts.private, m => m.sorts.isOnline, m => m.sorts.lastActivity, m => m.sorts.lastPlayed, m => m.sorts.lastCharacter.light], ['asc', 'desc', 'desc', 'desc', 'desc']);
    }

    if (!mini) {
      members.unshift({
        sorts: {},
        el: {
          full: (
            <li key='header-row' className='row header'>
              <ul>
                <li className='col member' />
                <li
                  className={cx('col', 'lastCharacter', { sort: this.state.order.sort === 'lastCharacter', asc: this.state.order.dir === 'asc' })}
                  onClick={() => {
                    this.changeSortTo('lastCharacter');
                  }}
                >
                  <div className='full'>{t('Last character')}</div>
                  <div className='abbr'>{t('Char')}</div>
                </li>
                <li
                  className={cx('col', 'lastActivity', { sort: !this.state.order.sort })}
                  onClick={() => {
                    this.changeSortTo(false);
                  }}
                >
                  <div className='full'>{t('Last activity')}</div>
                  <div className='abbr'>{t('Activity')}</div>
                </li>
                <li
                  className={cx('col', 'triumphScore', { sort: this.state.order.sort === 'triumphScore', asc: this.state.order.dir === 'asc' })}
                  onClick={() => {
                    this.changeSortTo('triumphScore');
                  }}
                >
                  <div className='full'>{t('Triumph score')}</div>
                  <div className='abbr'>{t('T. Scr')}</div>
                </li>
                <li
                  className={cx('col', 'glory', { sort: this.state.order.sort === 'glory', asc: this.state.order.dir === 'asc' })}
                  onClick={() => {
                    this.changeSortTo('glory');
                  }}
                >
                  <div className='full'>{t('Glory')}</div>
                  <div className='abbr'>{t('Gly')}</div>
                </li>
                <li
                  className={cx('col', 'valor', { sort: this.state.order.sort === 'valor', asc: this.state.order.dir === 'asc' })}
                  onClick={() => {
                    this.changeSortTo('valor');
                  }}
                >
                  <div className='full'>{t('Valor (Resets)')}</div>
                  <div className='abbr'>{t('Vlr (R)')}</div>
                </li>
                <li
                  className={cx('col', 'infamy', { sort: this.state.order.sort === 'infamy', asc: this.state.order.dir === 'asc' })}
                  onClick={() => {
                    this.changeSortTo('infamy');
                  }}
                >
                  <div className='full'>{t('Infamy (Resets)')}</div>
                  <div className='abbr'>{t('Inf (R)')}</div>
                </li>
                <li
                  className={cx('col', 'weeklyXp', { sort: this.state.order.sort === 'weeklyXp', asc: this.state.order.dir === 'asc' })}
                  onClick={() => {
                    this.changeSortTo('weeklyXp');
                  }}
                >
                  <div className='full'>{t('Weekly Clan XP')}</div>
                  <div className='abbr'>{t('Clan XP')}</div>
                </li>
              </ul>
            </li>
          )
        }
      });
    }

    return (
      <>
        <ul className={cx('list', 'roster', { mini: mini })}>{mini ? this.props.limit ? members.slice(0, this.props.limit).map(m => m.el.mini) : members.map(m => m.el.mini) : members.map(m => m.el.full)}</ul>
        {mini ? (
          <ProfileLink className='button' to='/clan/roster'>
            <div className='text'>{t('See full roster')}</div>
          </ProfileLink>
        ) : null}
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    groupMembers: state.groupMembers
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(Roster);
