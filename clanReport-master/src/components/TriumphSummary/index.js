import React from "react";

import BungieImage from "src/components/BungieImage";

import s from "./styles.styl";

export default function TriumphSummary({ record, anchorLink, typeOverride }) {
  const type = typeOverride || "Record";
  const linkProps = anchorLink
    ? { href: `#${anchorLink}` }
    : {
        href: `https://data.destinysets.com/i/${type}:${record.hash}`,
        target: "_blank"
      };

  const intervalPoints = record.intervalInfo
    ? record.intervalInfo.intervalObjectives.map(io => io.intervalScoreValue)
    : [];

  return (
    <div className={s.recordSummary}>
      {record.displayProperties.icon && (
        <div className={s.recordAccessory}>
          <div className={s.iconWrapper}>
            <BungieImage
              className={s.icon}
              src={record.displayProperties.icon}
            />
          </div>
        </div>
      )}

      <div className={s.recordMain}>
        <a className={s.link} {...linkProps}>
          {record.displayProperties.name}

          {record.completionInfo && (
            <small className={s.points}>
              {intervalPoints.length
                ? intervalPoints.join("pts + ")
                : record.completionInfo.ScoreValue}
              pts
            </small>
          )}
        </a>
        <br />
        <small className={s.desc}>{record.displayProperties.description}</small>
      </div>
    </div>
  );
}
