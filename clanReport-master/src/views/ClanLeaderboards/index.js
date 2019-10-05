import * as React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { Link } from "react-router";

import { Platform } from "../../lib/Bungie/BungieAPI";

import PlayerList from "../../components/PlayerList/index";
import Modal from "../../components/Modal";

const { useEffect, useState } = React;

const s = require("./styles.styl");

const DEFAULT_MODE = "5";

const MODES = [
  "5", // PVP
  "7", // PVE
  "4", // Raids
  "46", // Nightfalls
  "69", // Comp
  "19", // IB
  "66" // Forge
];

function ClanLeaderboards({
  historicalStatDefinitions,
  activityModeDefinitions,
  routeParams: { groupId, modalStatId, mode: _mode }
}) {
  const [loading, setLoading] = useState(true);
  const [pvpStats, setPvpStats] = useState();
  const [error, setError] = useState();

  console.log("modalStatId", { modalStatId });

  const mode = _mode || DEFAULT_MODE;

  useEffect(() => {
    setLoading(true);
    Platform.Destiny2Service.GetClanLeaderboards(groupId, mode, "", 100)
      .then(result => setPvpStats(Object.values(result)[0]))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [groupId, mode]);

  const modeDef =
    activityModeDefinitions &&
    Object.values(activityModeDefinitions).find(
      d => d.modeType.toString() === mode
    );

  const modalStat =
    modalStatId &&
    historicalStatDefinitions &&
    historicalStatDefinitions[modalStatId];

  const openModal = !!(modalStatId && pvpStats);

  return (
    <div>
      <h2>Clan Leaderboard</h2>

      <h3>
        {modeDef ? modeDef.displayProperties.name : `Mode ${mode}`}{" "}
        {loading && " - Loading..."}
      </h3>

      <p>
        Modes:
        {MODES.map(modeOpt => {
          const modeDef =
            activityModeDefinitions &&
            Object.values(activityModeDefinitions).find(
              d => d.modeType.toString() === modeOpt
            );

          return (
            <Link
              className={s.modeOpt}
              to={`/clan/${groupId}/leaderboards/${modeOpt}`}
            >
              {modeDef ? modeDef.displayProperties.name : modeOpt}
            </Link>
          );
        })}
      </p>

      {error && (
        <p>
          There was an error loading the leaderboard data. This data is in beta
          at the moment and there's a fair chance this mode isnt supported
          (yet?)
        </p>
      )}

      {!loading && !pvpStats && !error && (
        <p>
          No leaderboards to display. This data is in beta at the moment and
          there's a fair chance this mode isnt supported (yet?)
        </p>
      )}

      <div className={cx(s.leaderboards, loading && s.loading)}>
        {historicalStatDefinitions &&
          pvpStats &&
          Object.entries(pvpStats).map(([statId, { entries }]) => {
            const statDef = historicalStatDefinitions[statId];
            return (
              <div>
                <PlayerList
                  title={statDef && statDef.statName}
                  mode={mode}
                  titleLink={`/clan/${groupId}/leaderboards/${mode}/${statId}`}
                  entries={entries.slice(0, 10)}
                />
              </div>
            );
          })}
      </div>

      <Modal isOpen={openModal}>
        {openModal && (
          <PlayerList
            className={s.modalPlayerList}
            title={modalStat && modalStat.statName}
            mode={mode}
            titleLink={`/clan/${groupId}/leaderboards/${mode}`}
            entries={pvpStats && pvpStats[modalStatId].entries}
          />
        )}
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    historicalStatDefinitions:
      state.definitions.DestinyHistoricalStatsDefinition,
    activityModeDefinitions: state.definitions.DestinyActivityModeDefinition
  };
}

export default connect(mapStateToProps)(ClanLeaderboards);
