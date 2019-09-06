import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import cx from 'classnames';

import './styles.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { className, text, children, action, invisible, disabled, lined, anchor } = this.props;

    if (anchor) {
      return (
        <Link
          className={cx('button', className, { lined: lined, disabled: disabled, invisible: invisible })}
          onClick={e => {
            if (action) {
              action(e);
            }
          }}
          to={this.props.to}
        >
          {text ? <div className='text'>{text}</div> : children}
        </Link>
      );
    } else {
      return (
        <button
          className={cx('button', className, { lined: lined, disabled: disabled, invisible: invisible })}
          onClick={e => {
            if (action) {
              action(e);
            }
          }}
        >
          {text ? <div className='text'>{text}</div> : children}
        </button>
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    
  };
}

export default compose(connect(mapStateToProps))(Button);
