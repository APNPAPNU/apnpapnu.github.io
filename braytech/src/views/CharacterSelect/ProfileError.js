import React from 'react';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import Button from '../../components/UI/Button';

class ProfileError extends React.Component {
  render() {
    const { t, error } = this.props;

    if (error.errorCode && error.errorStatus && error.message) {
      return (
        <div className='error'>
          <div className='sub-header'>
            <div>{t('Bungie error')}</div>
          </div>
          <p>
            {t('Error')} {error.errorCode}: {error.errorStatus}
          </p>
          <p>{error.message}</p>
        </div>
      );
    }

    if (error.message === 'private') {
      return (
        <div className='error'>
          <div className='sub-header'>
            <div>{t('Private profile')}</div>
          </div>
          <p>{t('Your profile data may be set to private on Bungie.net. This error is generated when character progression data is unavailable, and is the most likely cause.')}</p>
          <Button
            text={t('Go to Bungie.net')}
            action={() => {
              window.open('https://www.bungie.net/en/Profile/Settings?category=Privacy', '_blank');
            }}
          />
        </div>
      );
    }

    return (
      <div className='error'>
        <div className='sub-header'>
          <div>{t('Generic error')}</div>
        </div>
        <p>{t('If it happens more than 10 times, hop on the Discords.')}</p>
      </div>
    );
  }
}

ProfileError = compose(withTranslation())(ProfileError);

export default ProfileError;
