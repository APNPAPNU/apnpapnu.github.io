import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { useDarkMode } from "src/lib/hooks";

import destinyAuth from "src/lib/destinyAuth";
import { setAuth, getMembership } from "src/store/auth";
import Icon from "src/components/Icon";

import s from "./styles.styl";

const CLIENT_ID = process.env.REACT_APP_BUNGIE_CLIENT_ID;
const AUTH_URL = `https://www.bungie.net/en/OAuth/Authorize?client_id=${CLIENT_ID}&response_type=code`;

export default function App({ children }) {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h1>clan.report</h1>
      </div>

      {children}

      <p className={s.footer}>
        <button
          className={s.darkModeButton}
          onClick={() => toggleDarkMode(!darkMode)}
        >
          <Icon icon={darkMode ? "sun" : "moon"} />{" "}
          {darkMode ? "Light" : "Dark"} Mode{" "}
        </button>
      </p>

      <p className={s.footer}>
        <Link to="/compare-nightfalls">Compare Nightfalls</Link> /{" "}
        <Link to="/compare-triumphs">Compare triumphs</Link> /{" "}
        <Link to="/stats">Playerbase stats</Link>
      </p>

      <p className={s.footer}>
        clan.report is made by{" "}
        <a
          href="https://twitter.com/joshhunt"
          target="_blank"
          rel="noopener noreferrer"
        >
          joshhunt
        </a>
        , who also made <a href="https://destinysets.com">Destiny Sets</a> and
        the <a href="https://data.destinysets.com">Destiny Data Explorer</a>.
        All content is owned by their respective owners, most probably Bungie.
      </p>
    </div>
  );
}

class _AuthRequired extends Component {
  componentDidMount() {
    destinyAuth((err, result) => {
      this.props.setAuth({ err, result });

      if (result.isFinal && result.isAuthenticated) {
        this.props.getMembership();
      }
    });
  }

  render() {
    return this.props.isAuthenticated ? (
      this.props.children
    ) : (
      <a href={AUTH_URL}>Login with Bungie.net to continue</a>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToActions = { setAuth, getMembership };

export const AuthRequired = connect(
  mapStateToProps,
  mapDispatchToActions
)(_AuthRequired);
