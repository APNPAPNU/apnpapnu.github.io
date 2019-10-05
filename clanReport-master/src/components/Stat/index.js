import React from "react";
import cx from "classnames";

import s from "./styles.styl";

export default function Stat({ className, name, value, extra }) {
  return (
    <div className={cx(className, s.root)}>
      <div className={s.extra}>{extra}</div>
      <div className={s.value}>{value}</div>
      <div className={s.name}>{name}</div>
    </div>
  );
}
