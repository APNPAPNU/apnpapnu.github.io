import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import { removeMemberIds } from '../../utils/paths';
import { ProfileNavLink } from '../../components/ProfileLink';
import ObservedImage from '../../components/ObservedImage';

class ParentModeLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidMount() {
    
  }

  render() {
    const { t } = this.props;

    return (
      <div className='content views'>
        <ul className='list'>
          <li className='linked'>
            <div className='icon'>
              <ObservedImage className='image' src='/static/images/extracts/ui/modes/01e3-00000400.png' />
            </div>
            <ProfileNavLink to='/reports' isActive={(match, location) => {
                if (['/reports', '/reports/all'].includes(removeMemberIds(location.pathname)) || removeMemberIds(location.pathname).includes('/reports/all')) {
                  return true;
                } else {
                  return false;
                }
              }} />
          </li>
          <li className='linked'>
            <div className='icon'>
              <ObservedImage className='image' src='/static/images/extracts/ui/modes/01e3-00000403.png' />
            </div>
            <ProfileNavLink to='/reports/crucible' />
          </li>
          <li className='linked'>
            <div className='icon'>
              <ObservedImage className='image' src='/static/images/extracts/ui/modes/01e3-00000404.png' />
            </div>
            <ProfileNavLink to='/reports/gambit' />
          </li>
          <li className='linked'>
            <div className='icon'>
              <ObservedImage className='image' src='/static/images/extracts/ui/modes/01e3-00000402.png' />
            </div>
            <ProfileNavLink to='/reports/raids' />
          </li>
          <li className='linked'>
            <div className='icon'>
              <ObservedImage className='image' src='/static/images/extracts/ui/modes/01e3-00000401.png' />
            </div>
            <ProfileNavLink to='/reports/strikes' />
          </li>
        </ul>
      </div>
    )
  }
}

export default compose(
  connect(),
  withTranslation()
)(ParentModeLinks);
