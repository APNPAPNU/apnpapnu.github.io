import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { withTranslation } from 'react-i18next';
import cx from 'classnames';

import Records from '../Records';
import manifest from '../../utils/manifest';

import './styles.css';

class RecordsSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      search: ''
    };

    this.records = Object.entries(manifest.DestinyRecordDefinition).filter(r => !r[1].redacted);
  }

  onSearchChange = e => {
    this.setState({ search: e.target.value });
    this.searchForRecords();
  };

  onSearchKeyPress = e => {
    // If they pressed enter, ignore the debounce and search
    if (e.key === 'Enter') this.searchForRecords.flush();
  };

  // Debounced so that we don't make an API request for every single
  // keypress - only when they stop typing.
  searchForRecords = debounce(async (term = this.state.search) => {
    if (!term || term.length < 2) {
      this.setState({ results: [] });
      return;
    };

    console.log(term);

    let results = this.records.filter(r => {

      let name = r[1].displayProperties && r[1].displayProperties.name;
      let description = r[1].displayProperties && r[1].displayProperties.description;

      name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      description = description.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

      let conjoinedString = `${name} ${description}`;
      let regex = RegExp(term,'gi');

      if (regex.test(conjoinedString)) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({ results });
    
  }, 500);

  componentDidUpdate(prevProps, prevState) {
    if (prevState.results !== this.state.results) {
      this.props.rebindTooltips();
    }
  }

  render() {
    const { t } = this.props;
    const { results, search } = this.state;

    return (
      <div className={cx('records-search', { 'has-results': results.length })}>
        <div className='form'>
          <div className='field'>
            <input onChange={this.onSearchChange} type='text' placeholder={t('enter name or description')} spellCheck='false' value={search} onKeyPress={this.onSearchKeyPress} />
          </div>
        </div>
        <ul className='list record-items'>
          <Records selfLinkFrom='/triumphs' {...this.props} hashes={results.map(r => r[0])} ordered />
        </ul>
      </div>
    );
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
)(RecordsSearch);