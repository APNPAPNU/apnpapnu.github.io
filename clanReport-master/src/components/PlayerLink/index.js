import React from "react";
import { Link } from "react-router";

import { PlatformIcon } from "src/components/Icon";

import s from "./styles.styl";

export default function PlayerLink({ player, url, saveRecentPlayer }) {
  const { membershipId, membershipType, displayName } = player;

  let link;

  if (url) {
    if (window.location.href.includes("?players=")) {
      link = `/${url}/${
        window.location.search
      },${membershipType}/${membershipId}`;
    } else {
      link = `/${url}/?players=${membershipType}/${membershipId}`;
    }
  } else {
    link = `/${membershipType}/${membershipId}`;
  }

  return (
    <Link
      className={s.root}
      key={membershipId}
      to={link}
      onClick={() => saveRecentPlayer && saveRecentPlayer(player)}
    >
      <PlatformIcon
        className={s.platformIcon}
        membershipType={membershipType}
      />
      {displayName}
    </Link>
  );
}
