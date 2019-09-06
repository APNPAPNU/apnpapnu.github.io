import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { cloneDeep } from 'lodash';
import cx from 'classnames';

import manifest from '../../../utils/manifest';
import ObservedImage from '../../ObservedImage';

import './styles.css';

class Vendor extends React.Component {
  render() {
    let { t, member, tooltips, hash, table } = this.props;

    let definitionVendor = cloneDeep(manifest[table][hash]);

    if (!definitionVendor) {
      console.warn('Hash not found');
      return null;
    }

    if (definitionVendor.redacted) {
      return (
        <>
          <div className='acrylic' />
          <div className={cx('frame', 'common')}>
            <div className='header'>
              <div className='name'>Classified</div>
              <div>
                <div className='kind'>Insufficient clearance</div>
              </div>
            </div>
            <div className='black'>
              <div className='description'>
                <pre>Keep it clean.</pre>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      const name = definitionVendor.displayProperties && definitionVendor.displayProperties.name ? definitionVendor.displayProperties.name : t('Unknown');

      const subTitle = definitionVendor.displayProperties && definitionVendor.displayProperties.subtitle;
      const description = definitionVendor.displayProperties && definitionVendor.displayProperties.description;

      const largeIcon = definitionVendor.displayProperties && definitionVendor.displayProperties.largeIcon;

      const locations = definitionVendor.locations && definitionVendor.locations.length && definitionVendor.locations;
      const location = locations.length > 1 ? manifest.DestinyDestinationDefinition[definitionVendor.locations[1].destinationHash] : manifest.DestinyDestinationDefinition[definitionVendor.locations[0].destinationHash];
      const place = location.placeHash && manifest.DestinyPlaceDefinition[location.placeHash];

      return (
        <>
          <div className='acrylic' />
          <div className={cx('frame', 'vendor')}>
            <div className='header'>
              <div className='icon'>
                <span className='destiny-faction_fella'>
                  <span className='path1' />
                  <span className='path2' />
                  <span className='path3' />
                  <span className='path4' />
                  <span className='path5' />
                </span>
              </div>
              <div className='text'>
                <div className='name'>{name}</div>
                {subTitle ? (
                  <div>
                    <div className='kind'>{subTitle}</div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className='black'>
              {largeIcon ? (
                <div className='screenshot'>
                  <ObservedImage className='image' src={`https://www.bungie.net${largeIcon}`} />
                </div>
              ) : null}
              {description || location ? (
                <div className='description'>
                  {location ? (
                    <div className='destination'>
                      {place && place.displayProperties.name !== location.displayProperties.name ? (
                        <>
                          {location.displayProperties.name}, {place.displayProperties.name}
                        </>
                      ) : (
                        location.displayProperties.name
                      )}
                    </div>
                  ) : null}
                  {description ? <pre>{description}</pre> : null}
                </div>
              ) : null}
            </div>
          </div>
        </>
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    member: state.member,
    viewport: state.viewport,
    tooltips: state.tooltips
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(Vendor);
