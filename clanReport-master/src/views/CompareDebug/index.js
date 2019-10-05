import React, { Fragment, Component, useState } from "react";
import { sortBy, flow, mapValues, filter, groupBy } from "lodash/fp";
import { connect } from "react-redux";
import { getMilestones } from "src/lib/destiny";

import { getProfile } from "src/store/clan";
import { getCharacterPGCRHistory, toggleSinceForsaken } from "src/store/pgcr";
import Modal from "src/components/Modal";
import Icon from "src/components/Icon";
import SearchForPlayer from "src/components/SearchForPlayer";

import s from "./styles.styl";
import beavertime, { fastishTimes } from "./beavertime";

const PGCR_MODE = 46;
const FORSAKEN_ISH = new Date(2018, 8, 2);

const FASTEST = "Fastest";
const TEAM_SCORE = "Team Score";

const ACTIVITY_BLACKLIST = [1207505828];

function str_pad_left(_string, pad, length) {
  const string = _string.toString ? _string.toString() : _string;
  const maxLength = Math.max(length, string.length);
  return (new Array(length + 1).join(pad) + string).slice(-maxLength);
}

function fmtSeconds(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return (
    str_pad_left(minutes, "0", 2) + "m " + str_pad_left(seconds, "0", 2) + "s"
  );
}

function getMinMaxTime(compFn, hash) {
  const hashs = hash.toString ? hash.toString() : hash;
  const timeA = beavertime[hashs];
  const timeB = fastishTimes[hashs];

  if (!timeA || !timeB) {
    return "-";
  }

  const result = compFn(timeA, timeB);

  return fmtSeconds(result);
}

// eslint-disable-next-line no-unused-vars
function getMinTime(hash) {
  return getMinMaxTime(Math.min, hash);
}
function getMaxTime(hash) {
  return getMinMaxTime(Math.max, hash);
}

const NIGHTFALL_HASHES = [
  "3280234344",
  "3701132453",
  "1034003646",
  "936308438",
  "1282886582",
  "3372160277",
  "522318687",
  "3145298904",
  "4259769141",
  "3289589202",
  "3718330161",
  "272852450",
  "3108813009",
  "3034843176"
];

function NightfallTable({
  currentNightfallHashes,
  nightfalls,
  profiles,
  activities,
  playersToCompare,
  activityDefs,
  nightfallCell
}) {
  const [showHash, setShowHash] = useState(false);

  return (
    <div className={s.tableWrapper}>
      <table className={s.table}>
        <thead>
          <tr>
            <td />
            {showHash && <td>Slowest</td>}
            {playersToCompare.map(pKey => (
              <td key={pKey}>
                {profiles[pKey] &&
                  profiles[pKey].profile.data.userInfo.displayName}
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {nightfalls &&
            nightfalls.map(nightfallHash => (
              <tr key={nightfallHash}>
                <td
                  className={
                    currentNightfallHashes.includes(nightfallHash)
                      ? s.thisNightfall
                      : undefined
                  }
                  onClick={() => setShowHash(!showHash)}
                >
                  {currentNightfallHashes.includes(nightfallHash) && (
                    <span>
                      <Icon name="calendar-check" />{" "}
                    </span>
                  )}
                  {activityDefs &&
                    activityDefs[nightfallHash].displayProperties.name}
                  <br />
                  <small className={s.grey}>
                    <Icon className={s.smallIcon} name="star" solid />{" "}
                    {fmtSeconds(beavertime[nightfallHash])}
                    <span className={s.spacer}>{", "}</span>
                    <Icon className={s.smallIcon} name="star" />{" "}
                    {fmtSeconds(fastishTimes[nightfallHash])}
                  </small>
                  {activityDefs && activityDefs[nightfallHash].guidedGame && (
                    <span>
                      {" - "}
                      <span className={s.grey}>Guided Game</span>
                    </span>
                  )}
                  {showHash && (
                    <Fragment>
                      <br /> {nightfallHash}
                    </Fragment>
                  )}
                </td>

                {showHash && (
                  <td>
                    {fmtSeconds(
                      playersToCompare.reduce((acc, pKey) => {
                        const forPlayer = activities[pKey];
                        const thisNightfall =
                          forPlayer && forPlayer[nightfallHash];

                        if (!thisNightfall || !thisNightfall.fastest) {
                          return acc;
                        }

                        const thisTime =
                          thisNightfall.fastest.values.activityDurationSeconds
                            .basic.value;

                        return Math.max(thisTime, acc);
                      }, 0)
                    )}
                  </td>
                )}

                {playersToCompare.map(pKey => {
                  const forPlayer = activities[pKey];
                  const thisNightfall = forPlayer && forPlayer[nightfallHash];

                  return (
                    <td key={pKey}>
                      {thisNightfall &&
                        nightfallCell(thisNightfall, pKey, nightfallHash)}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>

        <tfoot>
          <tr>
            <td>total accumulated time</td>

            {playersToCompare.map(pKey => {
              const forPlayer = activities[pKey];

              const accumulatedTime =
                forPlayer &&
                Object.entries(forPlayer).reduce(
                  (acc, [nightfallHash, nightfall]) => {
                    if (
                      !NIGHTFALL_HASHES.includes(nightfallHash) ||
                      !nightfall.fastest
                    ) {
                      return acc;
                    }

                    console.log("nightfall:", nightfall);

                    return (
                      acc +
                      nightfall.fastest.values.activityDurationSeconds.basic
                        .value
                    );
                  },
                  0
                );

              const accumulatedTimeMins = accumulatedTime / 60;

              return <td key={pKey}>{fmtSeconds(accumulatedTime)}</td>;
            })}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function getDisplayValue(pgcr, valueKey) {
  return pgcr && pgcr.values[valueKey].basic.displayValue;
}

function NightfallSummary({ nightfallHash, pgcr, pKey, highlight }) {
  const speedSeconds = pgcr.values.activityDurationSeconds.basic.value;
  const isFast = speedSeconds <= beavertime[nightfallHash.toString()];
  const isFastish = speedSeconds <= fastishTimes[nightfallHash.toString()];

  return (
    <a
      href={`https://www.bungie.net/en/PGCR/${pgcr.activityDetails.instanceId}`}
      target="_blank"
      className={s.nightfallLink}
    >
      <table className={s.nightfallSummary}>
        <tbody>
          <tr className={highlight === "duration" && s.bold}>
            <td className={s.grey}>
              <Icon name="stopwatch" />
            </td>
            <td>
              {getDisplayValue(pgcr, "activityDurationSeconds")}

              {(isFast || isFastish) && (
                <span>
                  {" "}
                  {isFast && <Icon name="star" solid />}
                  {isFastish && !isFast && <Icon name="star" />}
                </span>
              )}
            </td>
          </tr>
          <tr className={highlight === "team score" ? s.bold : undefined}>
            <td className={s.grey}>
              <Icon name="medal" />
            </td>
            <td>
              {getDisplayValue(pgcr, "teamScore")}
              <small> pts</small>
            </td>
          </tr>
        </tbody>
      </table>
    </a>
  );
}

class CompareDebug extends Component {
  state = {
    view: FASTEST,
    currentNightfallHashes: []
  };

  componentDidMount() {
    this.fetchProfiles(this.props.playersToCompare);

    getMilestones().then(milestones => {
      console.log({ milestones });
      const currentNightfallHashes = milestones[2171429505].activities
        .filter(activity => activity.modifierHashes)
        .map(activity => activity.activityHash.toString());

      console.log({ currentNightfallHashes });

      this.setState({ currentNightfallHashes });
    });
  }

  componentDidUpdate(prevProps) {
    const newPlayers = this.props.playersToCompare.filter(currentPlayer => {
      return !prevProps.playersToCompare.includes(currentPlayer);
    });

    if (newPlayers.length) {
      this.setState({ addPlayerModalVisible: false });
    }

    this.fetchProfiles(newPlayers);
  }

  toggleAddPlayer = () => {
    this.setState({
      addPlayerModalVisible: !this.state.addPlayerModalVisible
    });
  };

  fetchProfiles(playersToCompare) {
    playersToCompare
      .filter(playerKey => !this.props.profiles[playerKey])
      .forEach(playerKey => {
        const [membershipType, membershipId] = playerKey.split("/");
        this.props
          .getProfile({ membershipType, membershipId })
          .then(profile => {
            Object.keys(profile.characters.data).forEach(characterId => {
              this.props.getCharacterPGCRHistory(
                { membershipType, membershipId },
                characterId,
                {
                  completeHistory: true,
                  mode: this.props.router.location.query.mode || PGCR_MODE
                }
              );
            });
          });
      });
  }

  toggleAddPlayer = () => {
    this.setState({
      addPlayerModalVisible: !this.state.addPlayerModalVisible
    });
  };

  forsakenToggle = ev => {
    this.props.toggleSinceForsaken();
  };

  setView = view => {
    this.setState({ view });
  };

  render() {
    const {
      activityDefs,
      profiles,
      playersToCompare,
      activities,
      sinceForsaken
    } = this.props;
    const { addPlayerModalVisible, view, currentNightfallHashes } = this.state;

    const firstActivities = Object.values(activities).filter(Boolean)[0];

    const CUSTOM_SORT_INDEX = {
      1034003646: 1000100,
      3701132453: 1000101,
      3108813009: 1000102,
      3034843176: 1000103,
      1207505828: 1000999
    };

    const nightfalls =
      firstActivities &&
      activityDefs &&
      flow(
        sortBy(hash => activityDefs[hash].displayProperties.name),
        sortBy((hash, index) => {
          if (currentNightfallHashes.includes(hash)) {
            return 1;
          }

          return CUSTOM_SORT_INDEX[hash] || 2;
        })
      )(Object.keys(firstActivities));

    const VIEWS = [FASTEST, TEAM_SCORE];

    return (
      <div className={s.root}>
        <h2>Compare Nightfalls</h2>

        <button onClick={this.toggleAddPlayer}>Add player</button>
        <label>
          <input
            type="checkbox"
            onChange={this.forsakenToggle}
            checked={sinceForsaken}
          />
          Since Forsaken
        </label>

        <h3>
          {VIEWS.map(viewName => (
            <span
              key={viewName}
              onClick={() => this.setView(viewName)}
              className={view === viewName ? s.optionActive : s.option}
            >
              {viewName}
            </span>
          ))}
        </h3>

        {view === FASTEST && (
          <section>
            <NightfallTable
              currentNightfallHashes={currentNightfallHashes}
              nightfalls={nightfalls}
              profiles={profiles}
              activities={activities}
              playersToCompare={playersToCompare}
              activityDefs={activityDefs}
              nightfallCell={(nightfall, pKey, nightfallHash) =>
                nightfall.fastest && (
                  <NightfallSummary
                    nightfallHash={nightfallHash}
                    pgcr={nightfall.fastest}
                    pKey={pKey}
                    highlight="duration"
                  />
                )
              }
            />
          </section>
        )}
        {view === TEAM_SCORE && (
          <section>
            <NightfallTable
              currentNightfallHashes={currentNightfallHashes}
              nightfalls={nightfalls}
              profiles={profiles}
              activities={activities}
              playersToCompare={playersToCompare}
              activityDefs={activityDefs}
              nightfallCell={(nightfall, pKey, nightfallHash) =>
                nightfall.highestTeamScore && (
                  <NightfallSummary
                    nightfallHash={nightfallHash}
                    pgcr={nightfall.highestTeamScore}
                    pKey={pKey}
                    highlight="team score"
                  />
                )
              }
            />
          </section>
        )}

        <p>
          <small className={s.grey}>Legend:</small>
          <br />
          <small className={s.grey}>
            <Icon name="star" solid /> times are all from a selected single account with the emblem, so aim for <em>all</em> these and your times should be enough.
            <br />
            <Icon name="star" /> times are the slowest individual times found on accounts that have the emblem. your individual times will need to be at least this fast.
            <br />
          </small>
        </p>

        <p>
          <small className={s.grey}>
            Times indicate current guess at the qualifying time for the{" "}
            <em>After the Nightfall</em> emblem. They have been updated to all
            be from one single player.
          </small>
        </p>

        <Modal
          isOpen={addPlayerModalVisible}
          onRequestClose={this.toggleAddPlayer}
        >
          <SearchForPlayer className={s.addPlayerModal} url="compare-debug" />
        </Modal>
      </div>
    );
  }
}

function mapToValues(arr, fn) {
  return arr.reduce((acc, key) => {
    return {
      ...acc,
      [key]: fn(key)
    };
  }, {});
}

const OBJECTIVE_COMPLETED = "Objective Completed";

function getMinMaxValue(pgcrList, getValue, compareValues) {
  return (
    pgcrList &&
    pgcrList.length > 0 &&
    pgcrList.reduce((currentMinPGCR, pgcr) => {
      if (!currentMinPGCR) {
        return pgcr;
      }

      const currentMinValue = getValue(currentMinPGCR);
      const thisValue = getValue(pgcr);

      return compareValues(currentMinValue, thisValue) ? currentMinPGCR : pgcr;
    })
  );
}

const getMinValue = (...args) =>
  getMinMaxValue(...args, (currentBest, dis) => currentBest < dis);
const getMaxValue = (...args) =>
  getMinMaxValue(...args, (currentBest, dis) => currentBest > dis);

function mapStateToProps(state, ownProps) {
  const {
    DestinyPresentationNodeDefinition: presentationNodeDefs,
    DestinyRecordDefinition: recordDefs,
    DestinyActivityDefinition: activityDefs
  } = state.definitions;

  const { sinceForsaken } = state.pgcr;

  const { players } = ownProps.router.location.query;
  const playersToCompare = players ? players.split(",") : [];
  const profiles = mapToValues(
    playersToCompare,
    pKey => state.clan.profiles[pKey]
  );

  const activities = mapToValues(playersToCompare, pKey => {
    const byCharacter = Object.values(state.pgcr.histories[pKey] || {});
    const allGames = [].concat(...byCharacter).filter(Boolean);

    const nightfalls = flow(
      filter(Boolean),
      filter(pgcr =>
        sinceForsaken ? new Date(pgcr.period) > FORSAKEN_ISH : true
      ),
      filter(
        pgcr =>
          !ACTIVITY_BLACKLIST.includes(
            pgcr.activityDetails.directorActivityHash
          )
      ),
      groupBy(pgcr => pgcr.activityDetails.directorActivityHash),
      mapValues(pgcrList => {
        const completed = pgcrList.filter(pgcr => {
          return (
            pgcr.values.completionReason.basic.displayValue ===
            OBJECTIVE_COMPLETED
          );
        });

        const highestTeamScore = getMaxValue(
          completed,
          pgcr => pgcr.values.teamScore.basic.value
        );
        const fastest = getMinValue(
          completed,
          pgcr => pgcr.values.activityDurationSeconds.basic.value
        );

        return {
          fastest,
          highestTeamScore,
          all: pgcrList,
          completed
        };
      })
    )(allGames);

    return nightfalls;
  });

  return {
    recordDefs,
    activityDefs,
    presentationNodeDefs,
    playersToCompare,
    profiles,
    activities,
    sinceForsaken
  };
}

const mapDispatchToActions = {
  getProfile,
  getCharacterPGCRHistory,
  toggleSinceForsaken
};

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(CompareDebug);
