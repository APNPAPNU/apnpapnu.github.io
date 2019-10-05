/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { memoize } from "lodash";
import { AllHtmlEntities } from "html-entities";
import "react-table/react-table.css";

import {
  profileHasCompletedTriumph,
  profileHasCollectible,
  getCurrentActivity
} from "src/lib/destinyUtils";

import {
  getClanDetails,
  getClanMembers,
  getProfile,
  getRecentActivitiesForAccount
} from "src/store/clan";

import { setBulkDefinitions } from "src/store/definitions";

import PrettyDate from "src/components/Date";
import Table from "src/components/Table";
import { ImageWithTooltip } from "src/components/Item";

import s from "./styles.styl";

const entities = new AllHtmlEntities();
const decode = memoize(string => entities.decode(string));

const PARENT_SEAL_NODE = 1652422747;

const baseSort = sortFn => member =>
  member.profile ? sortFn(member) : -99999999999;

const baseSort2 = sortFn => member =>
  member.profile &&
  member.profile &&
  member.profile.profileRecords &&
  member.profile.profileRecords.data
    ? sortFn(member)
    : -99999999999;

const maxLight = member =>
  member.profile &&
  Math.max(...Object.values(member.profile.characters.data).map(c => c.light));

const k = ({ membershipType, membershipId }) =>
  [membershipType, membershipId].join("/");

const makeCollectibleCell = (name, collectibleHash) => ({
  name,
  cell: d =>
    d.profile && profileHasCollectible(d.profile, collectibleHash) ? "Yes" : ""
});

const makeTriumphCell = (name, triumphHash) => ({
  name,
  cell: d =>
    d.profile && profileHasCompletedTriumph(d.profile, triumphHash) ? "Yes" : ""
});

const orZero = v => (v ? v : 0);

const EGO_COLUMNS = [
  // makeCollectibleCell("niobe labs", NIOBE_EMBLEM_COLLECTIBLE),
  // makeTriumphCell("solo ST", 851701008), // Solo Shattered Throne
  {
    name: "bonus power",
    cell: d =>
      orZero(
        d.profile &&
          d.profile.profileProgression.data &&
          d.profile.profileProgression.data.seasonalArtifact.powerBonus
      )
  },
  {
    name: "season rank",
    cell: d => {
      const character =
        d.profile &&
        d.profile.characterProgressions.data &&
        Object.values(d.profile.characterProgressions.data)[0];

      return orZero(character && character.progressions[1628407317].level);
    }
  }
];

class ClanPage extends Component {
  componentDidMount() {
    this.props.getClanDetails(this.props.routeParams.groupId);

    this.props.getClanMembers(this.props.routeParams.groupId).then(data => {
      data.results.forEach(member => {
        this.props.getProfile(member.destinyUserInfo).then(profile => {
          // this.props.getRecentActivitiesForAccount(profile.profile);
        });
      });
    });
  }

  getClanDetails() {
    const membersQuery = this.props.clanDetails[this.props.routeParams.groupId];
    return membersQuery;
  }

  getClanMembers() {
    const { clanMembers, profiles } = this.props;
    const membersQuery = clanMembers[this.props.routeParams.groupId];
    const members = membersQuery ? membersQuery.results : [];

    return members.map(member => {
      return {
        ...member,
        profile: profiles[k(member.destinyUserInfo)]
      };
    });
  }

  renderName() {
    const clanDetails = this.getClanDetails();

    if (clanDetails) {
      return decode(clanDetails.detail.name);
    }

    return <span>{this.props.routeParams.groupId}</span>;
  }

  render() {
    const members = this.getClanMembers();
    const clan = this.getClanDetails();
    const {
      profiles,
      activityDefs,
      activityModeDefs,
      presentationNodeDefs,
      recordDefs,
      routeParams: { groupId }
    } = this.props;
    const data = members.map(m => ({
      ...m,
      profile: profiles[k(m.destinyUserInfo)]
    }));

    const EGO = window.location.search.includes("ego");

    const columns = [
      {
        name: "gamertag",
        cell: d => (
          <Link
            className={s.link}
            to={`/${d.destinyUserInfo.membershipType}/${d.destinyUserInfo.membershipId}`}
          >
            {d.destinyUserInfo.displayName}
          </Link>
        )
      },
      {
        name: "date joined",
        sortValue: baseSort(member => member.joinDate),
        cell: member => <PrettyDate date={member.joinDate} />
      },
      {
        name: "current light",
        sortValue: baseSort(d => maxLight(d)),
        cell: d => maxLight(d)
      },
      {
        name: "triumph score",
        sortValue: baseSort2(
          d =>
            d.profile.profileRecords.data && d.profile.profileRecords.data.score
        ),
        cell: d =>
          d.profile &&
          d.profile.profileRecords.data &&
          d.profile.profileRecords.data.score
      },
      ...(EGO
        ? EGO_COLUMNS
        : [
            {
              name: "seals",
              cell: d => {
                return (
                  presentationNodeDefs &&
                  presentationNodeDefs[
                    PARENT_SEAL_NODE
                  ].children.presentationNodes
                    .map(childNode => {
                      const sealPresentationNode =
                        presentationNodeDefs[childNode.presentationNodeHash];
                      return recordDefs[
                        sealPresentationNode.completionRecordHash
                      ];
                    })
                    .map(titleRecord => {
                      if (!titleRecord) {
                        return null;
                      }

                      return profileHasCompletedTriumph(
                        d.profile,
                        titleRecord.hash
                      ) ? (
                        // bring down the patriarchy
                        <ImageWithTooltip
                          containerClassName={s.seal}
                          className={s.sealImage}
                          src={titleRecord.displayProperties.icon}
                          key={titleRecord.hash}
                        >
                          {titleRecord.titleInfo.titlesByGender.Female}
                        </ImageWithTooltip>
                      ) : null;
                    })
                    .filter(Boolean)
                );
              }
            },
            {
              name: "current activity",
              sortValue: baseSort(member => {
                const currentActivity =
                  member.profile && getCurrentActivity(member.profile);

                return currentActivity
                  ? currentActivity.dateActivityStarted
                  : member.profile.profile.data.dateLastPlayed;
              }),
              cell: member => {
                const profile = member.profile;
                const currentActivity =
                  member.profile && getCurrentActivity(member.profile);

                let currentActivityDef =
                  activityDefs &&
                  currentActivity &&
                  activityDefs[currentActivity.currentActivityHash];

                const currentActivityModeDef =
                  activityModeDefs &&
                  currentActivity &&
                  activityModeDefs[currentActivity.currentActivityModeHash];

                return (
                  <span>
                    {currentActivityDef && (
                      <span>
                        {currentActivityModeDef &&
                          `${currentActivityModeDef.displayProperties.name}: `}
                        {currentActivityDef.displayProperties.name}{" "}
                        <span className={s.started}>
                          (Started{" "}
                          <PrettyDate
                            date={currentActivity.dateActivityStarted}
                          />
                          )
                        </span>
                      </span>
                    )}

                    {!currentActivityDef && profile && profile.profile.data && (
                      <span className={s.lastPlayed}>
                        Last played{" "}
                        <PrettyDate
                          date={profile.profile.data.dateLastPlayed}
                        />
                      </span>
                    )}
                  </span>
                );
              }
            }
          ])
    ];

    return (
      <div className={s.root}>
        <h2>Clan {this.renderName()}</h2>

        {clan && (
          <div className={s.details}>
            <p>
              <em>{decode(clan.detail.motto)}</em>
            </p>
            <p>{decode(clan.detail.about)}</p>
          </div>
        )}

        <p>
          New:{" "}
          <Link to={`/clan/${groupId}/leaderboards`} className={s.boringLink}>
            Activity Leaderboards
          </Link>
        </p>

        <div className={s.tableWrapper}>
          {members.length > 0 && (
            <Table
              data={data}
              columns={columns}
              defaultSortField="current activity"
            />
          )}
        </div>

        <Link to="/compare-triumphs">Compare triumphs</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activityDefs: state.definitions.DestinyActivityDefinition,
    activityModeDefs: state.definitions.DestinyActivityModeDefinition,
    presentationNodeDefs: state.definitions.DestinyPresentationNodeDefinition,
    recordDefs: state.definitions.DestinyRecordDefinition,
    isAuthenticated: state.auth.isAuthenticated,
    clanMembers: state.clan.clanMembers,
    clanDetails: state.clan.clanDetails,
    profiles: state.clan.profiles,
    recentActivities: state.clan.recentActivities
  };
}

const mapDispatchToActions = {
  setBulkDefinitions,
  getClanDetails,
  getClanMembers,
  getProfile,
  getRecentActivitiesForAccount
};

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(ClanPage);
