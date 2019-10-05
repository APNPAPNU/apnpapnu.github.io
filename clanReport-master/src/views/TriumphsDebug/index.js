import { orderBy } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import { getClansForUser, getProfile } from "src/store/clan";
import {
  getCharacterPGCRHistory,
  toggleViewPGCRDetails,
  getPGCRDetails
} from "src/store/pgcr";

import tableStyles from "app/components/Table/styles.styl";
import GamesTable from "app/components/GamesTable";

import getRecordsFromProfile from "./getRecordsFromProfile";

// import s from "./styles.styl";

class UserPage extends Component {
  componentDidMount() {
    this.props.getClansForUser(this.props.routeParams);
    this.props.getProfile(this.props.routeParams).then(profile => {
      Object.keys(profile.characters.data).forEach(characterId => {
        this.props.getCharacterPGCRHistory(
          this.props.routeParams,
          characterId,
          {
            mode: this.props.router.location.query.mode || 46,
            completeHistory: true
          }
        );
      });
    });
  }

  renderName() {
    const { profile, pKey } = this.props;
    return profile ? profile.profile.data.userInfo.displayName : pKey;
  }

  render() {
    const { profile, recordsDefs } = this.props;
    const records = profile && getRecordsFromProfile(profile);

    const mappedRecords =
      false &&
      records &&
      recordsDefs &&
      records
        .map(record => {
          const def = recordsDefs[record.hash];
          return {
            ...record,
            def
          };
        })
        .filter(r => r.completed)
        .filter(r => {
          return !r.def || !r.def.displayProperties.name;
        });

    return (
      <div>
        <h2>{this.renderName()}</h2>

        <h3>Nightfalls</h3>
        <GamesTable
          games={this.props.gameHistory}
          pgcrDetails={this.props.pgcrDetails}
          onGameRowClick={this.viewPGCRDetails}
          activePgcrs={this.props.activePgcrs}
        />

        <h3>nameless triumphs</h3>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <td>hash</td>
              <td>triumph</td>
              <td>completed</td>
              <td>state</td>
            </tr>
          </thead>

          <tbody>
            {mappedRecords &&
              mappedRecords.map(record => (
                <tr>
                  <td>
                    <a
                      href={`https://data.destinysets.com/i/Record:${
                        record.hash
                      }`}
                    >
                      {record.hash}
                    </a>
                  </td>

                  <td>
                    {record.def &&
                      (record.def.displayProperties.name || <em>no name</em>)}
                  </td>

                  <td>{record.completed ? "yes" : ""}</td>
                  <td>{record.state}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const MAX_GAMES = 999999999;

function mapStateToProps(state, ownProps) {
  const pKey = `${ownProps.routeParams.membershipType}/${
    ownProps.routeParams.membershipId
  }`;

  const profile = state.clan.profiles[pKey];

  const byCharacter = Object.values(state.pgcr.histories[pKey] || {});
  const allGames = [].concat(...byCharacter).filter(Boolean);
  const gameHistory = orderBy(allGames, g => new Date(g.period), [
    "desc"
  ]).slice(0, MAX_GAMES);

  return {
    isAuthenticated: state.auth.isAuthenticated,
    clans: state.clan.clanResults,
    gameHistory,
    activePgcrs: state.pgcr.viewDetails,
    pgcrDetails: state.pgcr.pgcr,
    pKey,
    profile,
    recordsDefs: state.definitions.DestinyRecordDefinition
  };
}

const mapDispatchToActions = {
  getClansForUser,
  getProfile,
  getCharacterPGCRHistory,
  toggleViewPGCRDetails,
  getPGCRDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(UserPage);
