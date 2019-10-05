import React from "react";
import { connect } from "react-redux";
import BungieImage from "src/components/BungieImage";

import s from "./styles.styl";

function CurrentActivity({ currentActivity, activity, activityMode }) {
  if (!activityMode || !activity) {
    return null;
  }

  return (
    <div className={s.root}>
      <BungieImage className={s.coverImage} src={activity.pgcrImage} />

      <div className={s.overlay}>
        <div className={s.text}>
          <div className={s.mode}>
            {activityMode && activityMode.displayProperties.name}
          </div>

          <div className={s.activity}>
            {activity && activity.displayProperties.name}
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const { currentActivity } = ownProps;
  const {
    definitions: { DestinyActivityDefinition, DestinyActivityModeDefinition }
  } = state;

  let activity =
    DestinyActivityDefinition &&
    currentActivity &&
    DestinyActivityDefinition[currentActivity.currentActivityHash];

  const activityMode =
    DestinyActivityModeDefinition &&
    currentActivity &&
    DestinyActivityModeDefinition[currentActivity.currentActivityModeHash];

  return {
    activity,
    activityMode
  };
}

export default connect(mapStateToProps)(CurrentActivity);
