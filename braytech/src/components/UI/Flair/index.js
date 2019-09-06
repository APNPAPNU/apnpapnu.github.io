import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import cx from 'classnames';

import manifest from '../../../utils/manifest';
import * as enums from '../../../utils/destinyEnums';
import userFlair from '../../../data/userFlair';

import './styles.css';

class Flair extends React.Component {
  componentDidMount() {
    this.props.rebindTooltips();
  }

  render() {
    const { t, type, id } = this.props;
    
    let flair = userFlair.find(f => f.user === type + id);
    let primaryFlair = false;
    if (flair) {
      primaryFlair = flair.trophies.find(t => t.primary);
    }

    return (
      <div className='stamps'>
        <div className='tooltip' data-hash={`platform_${enums.PLATFORMS[type].toLowerCase()}`} data-table='BraytechDefinition'>
          <i className={`destiny-platform_${enums.PLATFORMS[type].toLowerCase()}`} />
        </div>
        {flair
          ? flair.trophies.map((s, i) => {
              return (
                <div key={i} className='tooltip' data-hash={s.hash} data-table='BraytechDefinition'>
                  <i className={cx(s.icon, s.classnames)} />
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rebindTooltips: value => {
      dispatch({ type: 'REBIND_TOOLTIPS', payload: new Date().getTime() });
    }
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withTranslation()
)(Flair);
