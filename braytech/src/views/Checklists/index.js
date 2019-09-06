/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import cx from 'classnames';

import ObservedImage from '../../components/ObservedImage';

import './styles.css';

import ChecklistFactory from './ChecklistFactory';

function getItemsPerPage(width) {
  if (width >= 1920) return 6;
  if (width >= 1600) return 5;
  if (width >= 1200) return 4;
  if (width >= 800) return 3;
  if (width >= 660) return 2;
  if (width >= 500) return 1;
  return 1;
}

const ListButton = p => (
  <li key={p.name} className='linked'>
    {p.icon ? <div className={p.icon} /> : <ObservedImage className='image' src={p.image} />}
    <a
      className={cx({
        active: p.visible
      })}
      onClick={p.onClick}
    />
  </li>
);

ListButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  image: PropTypes.string,
  visible: PropTypes.bool
};

export class Checklists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      itemsPerPage: getItemsPerPage(props.viewport.width)
    };
  }

  toggleCompleted = () => {
    let currentState = this.props.collectibles;
    let newState = {
      hideCompletedChecklistItems: !currentState.hideCompletedChecklistItems
    };

    this.props.setCollectibleDisplayState(newState);
  };

  componentDidUpdate(prevProps, prevState) {
    const newWidth = this.props.viewport.width;
    if (prevProps.viewport.width !== newWidth) {
      this.setState({ itemsPerPage: getItemsPerPage(newWidth) });
    }
    if (prevState.itemsPerPage !== this.state.itemsPerPage || prevState.page !== this.state.page) {
      this.props.rebindTooltips();
    }
  }

  changeSkip = index => {
    this.setState({
      page: Math.floor(index / this.state.itemsPerPage)
    });
  };

  render() {
    const { t, member, collectibles } = this.props;
    const { page, itemsPerPage } = this.state;

    const f = new ChecklistFactory(t, member.data.profile, member.characterId, collectibles.hideCompletedChecklistItems);

    const lists = [
      f.regionChests(),
      f.lostSectors(),
      f.adventures(),
      f.ghostScans(),
      f.sleeperNodes(),
      f.latentMemories(),
      f.corruptedEggs(),
      f.ahamkaraBones(),
      f.catStatues(),
      f.ghostStories(),
      f.awokenOfTheReef(),
      f.forsakenPrince()
    ];

    // if (Object.values(member.data.profile.profileProgression.data.checklists[2448912219]).filter(i => i).length === 4) {
    //   lists.push(f.caydesJournals());
    // }

    let sliceStart = parseInt(page, 10) * itemsPerPage;
    let sliceEnd = sliceStart + itemsPerPage;

    const visible = lists.slice(sliceStart, sliceEnd);

    let toggleCompletedLink = (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a className='button' onClick={this.toggleCompleted}>
        {this.props.collectibles.hideCompletedChecklistItems ? (
          <>
            <i className='segoe-uniF16E' />
            {t('Show all')}
          </>
        ) : (
          <>
            <i className='segoe-uniF16B' />
            {t('Hide completed')}
          </>
        )}
      </a>
    );

    return (
      <div className='view' id='checklists'>
        <div className={cx('module', 'head', 'cols-' + this.state.itemsPerPage)}>
          <div className='content'>
            <div className='page-header'>
              <div className='sub-name'>{t('Location collections')}</div>
              <div className='name'>{t('Checklists')}</div>
            </div>
          </div>
          <div className='content source'>
            <p>Mapping data</p>
            <p>Data for some checklists is supplemented by hand of an Iron Lord, <a href='https://lowlidev.com.au/destiny/' target='_blank' rel='noopener noreferrer'>lowlidev</a>, and he deserves your favour, Guardian.</p>
          </div>
        </div>
        <div className={cx('padder', 'cols-' + this.state.itemsPerPage)}>
          <div className='module views'>
            <ul className='list'>
              {lists.map((list, i) => (
                <ListButton name={list.name} icon={list.icon} image={list.image} key={i} visible={visible.includes(list)} onClick={() => this.changeSkip(i)} />
              ))}
            </ul>
          </div>
          {visible.map(list => (
            <div className='module list' key={list.name}>
              {list.checklist}
            </div>
          ))}
        </div>
        <div className='sticky-nav'>
          <div />
          <ul>
            <li>{toggleCompletedLink}</li>
          </ul>
        </div>
      </div>
    );
  }
}

Checklists.propTypes = {
  member: PropTypes.object.isRequired,
  collectibles: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    collectibles: state.collectibles,
    viewport: state.viewport
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rebindTooltips: value => {
      dispatch({ type: 'REBIND_TOOLTIPS', payload: new Date().getTime() });
    },
    setCollectibleDisplayState: value => {
      dispatch({ type: 'SET_COLLECTIBLES', payload: value });
    }
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withTranslation()
)(Checklists);