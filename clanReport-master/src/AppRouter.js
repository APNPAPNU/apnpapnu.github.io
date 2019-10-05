// eslint-disable no-console
import React, { Component } from "react";
import { Router, Route, Redirect, browserHistory } from "react-router";
import { Provider } from "react-redux";

import store from "./store";
import App from "./views/App";
import Home from "./views/Home";
import UserPage from "./views/UserPage";
import ClanPage from "./views/ClanPage";
import TriumphReport from "./views/TriumphReport";
import CompareTriumphs from "./views/CompareTriumphs";
import CompareNightfalls from "./views/CompareDebug";
import NewCollections from "./views/NewCollections";
import StatsPage from "./views/StatsPage";
import ClanLeaderboards from "./views/ClanLeaderboards";
import Experiments from "./views/Experiments";

export default class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="/stats" mode="collectibles" component={StatsPage} />
            <Route
              path="/stats/collectibles"
              mode="collectibles"
              component={StatsPage}
            />
            <Route path="/stats/records" mode="records" component={StatsPage} />
            <Route path="/clan/:groupId" component={ClanPage} />
            <Route
              path="/clan/:groupId/leaderboards"
              component={ClanLeaderboards}
            />
            <Route
              path="/clan/:groupId/leaderboards/:mode"
              component={ClanLeaderboards}
            />
            <Route
              path="/clan/:groupId/leaderboards/:mode/:modalStatId"
              component={ClanLeaderboards}
            />
            <Route path="/triumph-report" component={TriumphReport} />
            <Route path="/compare-triumphs" component={CompareTriumphs} />
            <Redirect from="/compare-debug" to="/compare-nightfalls" />
            <Route path="/compare-nightfalls" component={CompareNightfalls} />
            <Route path="/new-collections" component={NewCollections} />

            <Route path="/experiments/:name" component={Experiments} />

            <Route path="/:membershipType/:membershipId" component={UserPage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
