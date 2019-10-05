import React, { Component } from "react";
import { Link } from "react-router";
import cx from "classnames";

import BungieImage from "src/components/BungieImage";
import Icon from "src/components/Icon";

import s from "./styles.styl";

export function Player({ className, userInfo, children, linkedActivityId }) {
  const hasLink = linkedActivityId && linkedActivityId !== "0";
  return (
    <a
      className={cx(className, s.player)}
      target="_blank"
      rel="noopener"
      href={hasLink && `https://destinytracker.com/d2/pgcr/${linkedActivityId}`}
    >
      {userInfo.iconPath && (
        <div className={s.playerWell}>
          <BungieImage className={s.playerIcon} src={userInfo.iconPath} />
        </div>
      )}

      <div className={s.playerMain}>
        <div className={s.playerName}>{userInfo.displayName}</div>
        <div className={s.playerAlt}>{children}</div>
      </div>

      {hasLink && (
        <div className={s.iconWell}>
          <Icon name="external-link-square" />
        </div>
      )}
    </a>
  );
}

export function BasePlayerList(props) {
  const {
    entries,
    title,
    small,
    titleLink,
    playerClassName,
    className,
    renderPlayerChildren
  } = props;

  return (
    <div className={cx(className, s.root, { [s.small]: small })}>
      <div className={s.top}>
        <h3 className={s.title}>
          {titleLink ? <Link to={titleLink}>{title}</Link> : title}
        </h3>
      </div>

      <ol className={s.list}>
        {entries.map((entry, index) => (
          <li className={s.listItem} key={entry.membershipId || index}>
            <Player
              userInfo={
                (entry.player && entry.player.destinyUserInfo) ||
                entry.player ||
                entry
              }
              className={playerClassName}
              linkedActivityId={entry.value && entry.value.activityId}
            >
              {renderPlayerChildren(entry)}
            </Player>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default class PlayerList extends Component {
  render() {
    const {
      entries,
      title,
      small,
      titleLink,
      playerClassName,
      className
    } = this.props;

    return (
      <BasePlayerList
        entries={entries}
        title={title}
        small={small}
        titleLink={titleLink}
        playerClassName={playerClassName}
        className={className}
        renderPlayerChildren={entry => entry.value.basic.displayValue}
      />
    );
  }
}
