import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

import Item from './Item';
import Activity from './Activity';
import Vendor from './Vendor';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hash: false,
      instanceId: false,
      state: false,
      quantity: false,
      rollNote: false,
      table: false,
      tooltipType: false
    };

    this.tooltip = React.createRef();
    this.touchMovement = false;
    this.mouseMoveXY = {
      x: 0,
      y: 0
    };
  }

  mouseMove = e => {
    let x = 0;
    let y = 0;
    let offset = 0;
    let tooltipWidth = 384;
    let tooltipHeight = this.state.hash ? this.tooltip.current.clientHeight : 0;
    let scrollbarAllowance = 24;

    x = e.clientX;
    y = e.clientY - (tooltipHeight >= 320 ? 140 : 0);

    if (x + tooltipWidth + scrollbarAllowance > window.innerWidth / 2 + tooltipWidth) {
      x = x - tooltipWidth - scrollbarAllowance - offset;
    } else {
      x = x + scrollbarAllowance + offset;
    }

    if (y + tooltipHeight + scrollbarAllowance > window.innerHeight) {
      y = window.innerHeight - tooltipHeight - scrollbarAllowance;
    }
    y = y < scrollbarAllowance ? scrollbarAllowance : y;

    if (this.state.hash) {
      this.mouseMoveXY = {
        x,
        y
      };
      this.tooltip.current.style.cssText = `top: ${y}px; left: ${x}px`;
    }
  };

  helper_targetMouseEnter = e => {
    // if (e.currentTarget.dataset.ignoretouch) console.warn(`helper_targetMouseEnter: Ignoring touch by target request`);
    if (e.currentTarget.dataset.hash) {
      this.setState({
        hash: e.currentTarget.dataset.hash,
        instanceId: e.currentTarget.dataset.instanceid,
        state: e.currentTarget.dataset.state,
        quantity: e.currentTarget.dataset.quantity,
        rollNote: e.currentTarget.dataset.rollnote ? true : false,
        table: e.currentTarget.dataset.table ? e.currentTarget.dataset.table : false,
        tooltipType: e.currentTarget.dataset.tooltiptype && e.currentTarget.dataset.tooltiptype !== '' ? e.currentTarget.dataset.tooltiptype : false
      });
    }
  };

  helper_targetMouseLeave = e => {
    this.resetState();
  };

  helper_targetTouchStart = e => {
    this.touchMovement = false;
  };

  helper_targetTouchMove = e => {
    this.touchMovement = true;
  };

  helper_targetTouchEnd = e => {
    if (!this.touchMovement) {
      // if (e.currentTarget.dataset.ignoretouch) console.warn(`helper_targetTouchEnd: Ignoring touch by target request`);
      if (e.currentTarget.dataset.hash) {
        // && !e.currentTarget.dataset.ignoretouch
        this.setState({
          hash: e.currentTarget.dataset.hash,
          instanceId: e.currentTarget.dataset.instanceid,
          state: e.currentTarget.dataset.state,
          quantity: e.currentTarget.dataset.quantity,
          rollNote: e.currentTarget.dataset.rollnote ? true : false,
          table: e.currentTarget.dataset.table ? e.currentTarget.dataset.table : false,
          tooltipType: e.currentTarget.dataset.tooltiptype && e.currentTarget.dataset.tooltiptype !== '' ? e.currentTarget.dataset.tooltiptype : false
        });
      }
    }
  };

  resetState = () => {
    this.setState({
      hash: false,
      instanceId: false,
      state: false,
      quantity: false,
      rollNote: false,
      table: false,
      tooltipType: false
    });
  };

  performBindTooltipItem = reset => {
    if (reset) {
      this.resetState();
    }

    let targets = document.querySelectorAll('.tooltip');
    targets.forEach(target => {
      target.addEventListener('touchstart', this.helper_targetTouchStart);
      target.addEventListener('touchmove', this.helper_targetTouchMove);
      target.addEventListener('touchend', this.helper_targetTouchEnd);
      target.addEventListener('mouseenter', this.helper_targetMouseEnter);
      target.addEventListener('mouseleave', this.helper_targetMouseLeave);
    });
  };

  helper_tooltipTouchStart = e => {
    this.touchMovement = false;
  };

  helper_tooltipTouchMove = e => {
    this.touchMovement = true;
  };

  helper_tooltipTouchEnd = e => {
    e.preventDefault();
    if (!this.touchMovement) {
      this.resetState();
    }
  };

  performBindTooltip = () => {
    this.tooltip.current.addEventListener('touchstart', this.helper_tooltipTouchStart);
    this.tooltip.current.addEventListener('touchmove', this.helper_tooltipTouchMove);
    this.tooltip.current.addEventListener('touchend', this.helper_tooltipTouchEnd);
  };

  componentDidUpdate(prevProps) {
    if (this.props.tooltips.bindTime !== prevProps.tooltips.bindTime) {
      // console.log('bindTime change');
      this.performBindTooltipItem(true);
    }

    if (this.props.location && prevProps.location.pathname !== this.props.location.pathname) {
      // console.log('location change');
      this.performBindTooltipItem(true);
    }

    if (this.props.member.data !== prevProps.member.data) {
      this.performBindTooltipItem();
    }

    if (this.state.hash) {
      this.performBindTooltip();
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.mouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.mouseMove);
  }

  render() {
    if (this.state.hash) {

      let Type = Item;

      if (this.state.table === 'DestinyActivityDefinition') Type = Activity;
      if (this.state.table === 'DestinyVendorDefinition') Type = Vendor;

      return (
        <div id='tooltip' ref={this.tooltip} style={{ top: `${this.mouseMoveXY.y}px`, left: `${this.mouseMoveXY.x}px` }}>
          <Type {...this.state} />
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    tooltips: state.tooltips
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTooltipDetailMode: value => {
      dispatch({ type: 'REBIND_TOOLTIPS', payload: {} });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tooltip);
