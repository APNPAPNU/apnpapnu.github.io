import React, { Component, Fragment } from "react";
import { sortBy, mapValues } from "lodash";
import { get } from "lodash";
import { connect } from "react-redux";

import SearchForPlayer from "src/components/SearchForPlayer";
import PlayerLink from "src/components/PlayerLink";
import PrettyDate from "src/components/Date";
import { PlatformIcon } from "src/components/Icon";

import destinyAuth from "src/lib/destinyAuth";
import { setAuth, getMembership } from "src/store/auth";
import { getLeaderboard, getLeaderboardStatus } from "src/store/leaderboards";

import s from "./styles.styl";

const CLIENT_ID = process.env.REACT_APP_BUNGIE_CLIENT_ID;
const AUTH_URL = `https://www.bungie.net/en/OAuth/Authorize?client_id=${CLIENT_ID}&response_type=code`;

const MAX_LEADERBOARD = 10;

const LEADERBOARD_PLATFORMS = [
  ["all", "All"],
  ["1", "Xbox"],
  ["2", "PS4"],
  ["4", "PC"]
];
class App extends Component {
  state = {
    leaderboardPlatform: "all"
  };

  componentDidMount() {
    this.props.getLeaderboard();
    this.props.getLeaderboardStatus();

    destinyAuth((err, result) => {
      this.props.setAuth({ err, result });

      if (result.isFinal && result.isAuthenticated) {
        this.props.getMembership();
      }
    });
  }

  selectLeaderboard(platform) {
    this.setState({
      leaderboardPlatform: platform
    });

    if (!this.props.leaderboards[platform]) {
      this.props.getLeaderboard(platform);
    }
  }

  render() {
    const {
      memberships,
      isAuthenticated,
      leaderboards,
      leaderboardStatus
    } = this.props;
    const { leaderboardPlatform } = this.state;

    return (
      <div className={s.root}>
        <div className={s.selectPlayer}>
          {isAuthenticated ? (
            <Fragment>
              <h2>Your linked accounts</h2>
              {memberships.map(player => (
                <PlayerLink player={player} />
              ))}
            </Fragment>
          ) : (
            <Fragment>
              <a className={s.authLink} href={AUTH_URL}>
                Login with Bungie.net to see your linked accounts
              </a>
            </Fragment>
          )}

          <SearchForPlayer className={s.playerSearch} />
        </div>

        <div className={s.leaderboards}>
          <div className={s.leaderboardTop}>
            <h2>
              Leaderboards
              <div className={s.leaderboardSelect}>
                {LEADERBOARD_PLATFORMS.map(([platform, name]) => (
                  <button
                    key={platform}
                    className={s.leaderboardPlatformButton}
                    disabled={leaderboardPlatform === platform}
                    onClick={() => this.selectLeaderboard(platform)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </h2>
          </div>

          <div className={s.leaderboard}>
            <h3>Collections</h3>
            <ol>
              {leaderboards[leaderboardPlatform] &&
                leaderboards[leaderboardPlatform].collection
                  .slice(0, MAX_LEADERBOARD)
                  .map(player => (
                    <li
                      key={player.membershipId}
                      className={s.leaderboardItem}
                      data-rank={player.collectionRank}
                    >
                      <div>
                        <PlatformIcon membershipType={player.membershipType} />{" "}
                        {player.displayName}
                        <br />
                        <small>{player.collectionScore} collected</small>
                      </div>
                    </li>
                  ))}
            </ol>
          </div>

          <div className={s.leaderboard}>
            <h3>Triumphs</h3>
            <ol>
              {leaderboards[leaderboardPlatform] &&
                leaderboards[leaderboardPlatform].triumph
                  .slice(0, MAX_LEADERBOARD)
                  .map(player => (
                    <li
                      key={player.membershipId}
                      className={s.leaderboardItem}
                      data-rank={player.triumphRank}
                    >
                      <div>
                        <PlatformIcon membershipType={player.membershipType} />{" "}
                        {player.displayName}
                        <br />
                        <small>{player.triumphScore} pts</small>
                      </div>
                    </li>
                  ))}
            </ol>
          </div>

          <p className={s.leaderboardTop}>
            {leaderboardStatus && (
              <Fragment>
                <em>
                  <small>
                    Tracking {leaderboardStatus.profileCount.toLocaleString()}{" "}
                    profiles, last updated{" "}
                    <PrettyDate
                      date={leaderboardStatus.latestProfileLastCrawled}
                    />
                  </small>
                </em>
                <br />
              </Fragment>
            )}

            <em>
              <small>
                Leaderboards are experimental. I know the collection score is
                higher than in-game or on Braytech.org.
                <br />
                Don&apos;t @ me.
              </small>
            </em>
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const leaderboards = mapValues(state.leaderboards.leaderboard, list => {
    return {
      collection: sortBy(list, entry => entry.collectionRank),
      triumph: sortBy(list, entry => entry.triumphRank)
    };
  });

  return {
    leaderboards: leaderboards,
    leaderboardStatus: state.leaderboards.status,
    memberships: get(state, "auth.membership.destinyMemberships", []),
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToActions = {
  setAuth,
  getMembership,
  getLeaderboard,
  getLeaderboardStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(App);
