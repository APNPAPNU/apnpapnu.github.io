import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Tooltip } from "react-tippy";

import BungieImage from "src/components/BungieImage";

import s from "./styles.styl";

const NO_ICON = "/img/misc/missing_icon_d2.png";

export function ImageWithTooltip({
  src,
  className,
  children,
  containerClassName
}) {
  return (
    <Tooltip
      html={
        <Fragment>
          <div className={s.name}>{children}</div>
        </Fragment>
      }
      position="top"
      arrow
      followCursor
      className={containerClassName}
    >
      <BungieImage className={className} src={src} />
    </Tooltip>
  );
}

function Item({ item, className }) {
  const icon = (item && item.displayProperties.icon) || NO_ICON;

  return (
    <ImageWithTooltip className={className} src={icon}>
      {item && item.displayProperties.name}
    </ImageWithTooltip>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    item:
      state.definitions.DestinyInventoryItemDefinition &&
      state.definitions.DestinyInventoryItemDefinition[ownProps.hash]
  };
};

export default connect(mapStateToProps)(Item);
