import React from "react";
import { get } from "lodash";
import { connect } from "react-redux";

import BungieImage from "app/components/BungieImage";
import TriumphSummary from "app/components/TriumphSummary";

import s from "./styles.styl";

function Experiments({ data, definitions }) {
  const { DestinyPresentationNodeDefinition } = definitions || {};

  if (!data || !DestinyPresentationNodeDefinition) {
    return "Loading...";
  }

  return (
    <div>
      <h1>Experiments</h1>

      {Object.entries(data).map(([presentationNodeHash, records]) => {
        const presentationNode =
          DestinyPresentationNodeDefinition[presentationNodeHash];
        return (
          <div>
            <h4>
              {(presentationNode &&
                presentationNode.displayProperties &&
                presentationNode.displayProperties.name) || (
                <em>no name / classified</em>
              )}
            </h4>
            <div className={s.records}>
              {records.map(record => (
                <div className={s.record}>
                  <TriumphSummary record={record} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    DestinyRecordDefinition,
    DestinyCollectibleDefinition
  } = state.definitions;

  const entriesDefinition =
    ownProps.routeParams.name === "records"
      ? DestinyRecordDefinition
      : DestinyCollectibleDefinition;

  if (!entriesDefinition) {
    return {};
  }

  const data = {};

  Object.values(entriesDefinition).forEach(record => {
    get(record, "presentationInfo.parentPresentationNodeHashes", []).forEach(
      parentHash => {
        if (!data[parentHash]) {
          data[parentHash] = [];
        }

        data[parentHash].push(record);
      }
    );
  });

  return {
    definitions: state.definitions,
    data
  };
}

export default connect(mapStateToProps)(Experiments);
