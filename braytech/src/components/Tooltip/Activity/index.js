import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { cloneDeep } from 'lodash';
import cx from 'classnames';

import manifest from '../../../utils/manifest';
import ObservedImage from '../../ObservedImage';

import './styles.css';

class Activity extends React.Component {
  render() {
    let { t, member, tooltips, hash, table } = this.props;

    let definitionActivity = cloneDeep(manifest[table][hash]);

    if (!definitionActivity) {
      console.warn('Hash not found');
      return null;
    }

    if (definitionActivity.redacted) {
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
      let name = definitionActivity.selectionScreenDisplayProperties && definitionActivity.selectionScreenDisplayProperties.name ? definitionActivity.selectionScreenDisplayProperties.name : definitionActivity.displayProperties && definitionActivity.displayProperties.name ? definitionActivity.displayProperties.name : t('Unknown');

      let activityType = {
        name: t('Adventure'),
        className: 'adventure',
        description: definitionActivity.selectionScreenDisplayProperties && definitionActivity.selectionScreenDisplayProperties.description ? definitionActivity.selectionScreenDisplayProperties.description : definitionActivity.displayProperties && definitionActivity.displayProperties.description ? definitionActivity.displayProperties.description : t('Unknown'),
        destination:
          definitionActivity.destinationHash && manifest.DestinyDestinationDefinition[definitionActivity.destinationHash].displayProperties
            ? {
                ...manifest.DestinyDestinationDefinition[definitionActivity.destinationHash].displayProperties,
                place: manifest.DestinyDestinationDefinition[definitionActivity.destinationHash].placeHash && manifest.DestinyPlaceDefinition[manifest.DestinyDestinationDefinition[definitionActivity.destinationHash].placeHash].displayProperties && manifest.DestinyPlaceDefinition[manifest.DestinyDestinationDefinition[definitionActivity.destinationHash].placeHash].displayProperties.name
              }
            : false,
        icon: (
          <span className='destiny-adventure2'>
            <span className='path1' />
            <span className='path2' />
            <span className='path3' />
            <span className='path4' />
            <span className='path5' />
            <span className='path6' />
          </span>
        )
      };

      if (definitionActivity.activityModeHashes && definitionActivity.activityModeHashes.includes(2394616003))
        activityType = {
          ...activityType,
          name: manifest.DestinyActivityTypeDefinition[2884569138].displayProperties.name,
          className: 'strike',
          icon: <span className='destiny-strike' />
        };

      if (definitionActivity.activityTypeHash === 1686739444)
        activityType = {
          ...activityType,
          name: manifest.DestinyActivityTypeDefinition[1686739444].displayProperties.name,
          className: 'story',
          icon: (
            <span className='destiny-quest2'>
              <span className='path1' />
              <span className='path2' />
              <span className='path3' />
              <span className='path4' />
              <span className='path5' />
              <span className='path6' />
            </span>
          )
        };

      return (
        <>
          <div className='acrylic' />
          <div className={cx('frame', 'activity', activityType.className)}>
            <div className='header'>
              <div className='icon'>{activityType.icon}</div>
              <div className='text'>
                <div className='name'>{name}</div>
                <div>
                  <div className='kind'>{activityType.name}</div>
                </div>
              </div>
            </div>
            <div className='black'>
              {definitionActivity.pgcrImage && definitionActivity.pgcrImage !== '/img/theme/destiny/bgs/pgcrs/placeholder.jpg' ? (
                <div className='screenshot'>
                  <ObservedImage className='image' src={`https://www.bungie.net${definitionActivity.pgcrImage}`} />
                </div>
              ) : null}
              <div className='description'>
                {activityType.destination ? (
                  <div className='destination'>
                    {activityType.destination.name !== activityType.destination.place && !activityType.destination.name.includes(activityType.destination.place) ? (
                      <>
                        {activityType.destination.name}, {activityType.destination.place}
                      </>
                    ) : (
                      activityType.destination.name
                    )}
                  </div>
                ) : null}
                <pre>{activityType.description}</pre>
              </div>
              {definitionActivity.timeToComplete ? (
                <div className='time-to-complete'>
                  {t('Time to complete')}: {t('{{number}} minutes', { number: definitionActivity.timeToComplete || 0 })}
                </div>
              ) : null}
              {definitionActivity.activityLightLevel ? (
                <div className='recommended-light'>
                  {t('Recommended Power')}: <span>{definitionActivity.activityLightLevel}</span>
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
)(Activity);
