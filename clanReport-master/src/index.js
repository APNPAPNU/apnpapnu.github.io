import "app/lib/autotrack.build";
import "app/lib/ls";

import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./AppRouter";
import "./index.styl";

const render = App => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

render(AppRouter);
