import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import app from "./app";
import auth from "./auth";
import clan from "./clan";
import pgcr from "./pgcr";
import leaderboards from "./leaderboards";

import definitions, {
  setBulkDefinitions,
  definitionsStatus,
  definitionsError,
  SET_BULK_DEFINITIONS
} from "app/store/definitions";

import { fasterGetDefinitions } from "app/lib/definitions";

const rootReducer = combineReducers({
  app,
  auth,
  clan,
  pgcr,
  definitions,
  leaderboards
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: [SET_BULK_DEFINITIONS],
        stateSanitizer: state => ({
          ...state,
          definitions: state.definitions ? "[hidden]" : state.definitions
        })
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);
window.__store = store;

store.subscribe(() => (window.__state = store.getState()));

const LANGUAGE = "en";

fasterGetDefinitions(
  LANGUAGE,
  null,
  data => {
    store.dispatch(definitionsStatus(data));
  },
  (err, data) => {
    if (err) {
      store.dispatch(definitionsError(err));
      return;
    }

    if (data && data.definitions) {
      store.dispatch(definitionsStatus({ status: null }));
      store.dispatch(setBulkDefinitions(data.definitions));
    }
  }
);

export default store;
