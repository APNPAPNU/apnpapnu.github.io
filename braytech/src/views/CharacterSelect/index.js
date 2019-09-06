import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import cx from 'classnames';
import { withTranslation, Trans } from 'react-i18next';

import store from '../../utils/reduxStore';
import * as ls from '../../utils/localStorage';
import Spinner from '../../components/UI/Spinner';
import ProfileError from './ProfileError';

import ProfileSearch from './ProfileSearch';
import Profile from './Profile';

import './styles.css';

class CharacterSelect extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  characterClick = characterId => {
    const { membershipType, membershipId } = this.props.member;

    ls.set('setting.profile', { membershipType, membershipId, characterId });
  };

  profileClick = async (membershipType, membershipId, displayName) => {
    window.scrollTo(0, 0);

    store.dispatch({ type: 'MEMBER_LOAD_MEMBERSHIP', payload: { membershipType, membershipId } });

    if (displayName) {
      ls.update('history.profiles', { membershipType, membershipId, displayName }, true, 9);
    }
  };

  render() {
    const { t, member, viewport } = this.props;
    const { error, loading } = member;

    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const reverseUI = viewport.width <= 600;

    const savedProfile = ls.get('setting.profile') || {};

    const profileCharacterSelect = (
      <>
        {loading ? <Spinner /> : member.data ? (
          <>
            <div className='sub-header'>
              <div>{t(member && member.membershipId === savedProfile.membershipId ? 'Saved profile' : 'Active profile')}</div>
            </div>
            {member.data && <Profile member={member} onCharacterClick={this.characterClick} from={from} />}
          </>
        ) : null}
      </>
    );

    return (
      <div className={cx('view', { loading })} id='get-profile'>
        <div className='module head'>
          <div className='page-header'>
            <div className='name'>{t('Character Select')}</div>
          </div>
        </div>
        <div className='padder'>
          {reverseUI && profileCharacterSelect && !error ? (
            <div className='module profile'>
              {profileCharacterSelect}
            </div>
          ) : null}
          <div className='module search'>
            {error && <ProfileError error={error} />}
            <ProfileSearch onProfileClick={this.profileClick} />
          </div>
          {!reverseUI && profileCharacterSelect && !error ? (
            <div className='module profile'>
              {profileCharacterSelect}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    viewport: state.viewport
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(CharacterSelect);
