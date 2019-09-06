import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import manifest from '../../../utils/manifest';
import { classHashToString } from '../../../utils/destinyUtils';
import Items from '../../../components/Items';
import { EmblemAnimatedIcon, EmblemAnimatedBackground } from '../../../components/UI/EmblemAnimated/';

import './styles.css';

class AnimatedEmblemIcons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.rebindTooltips();
  }

  render() {
    const { t, member } = this.props;

    const characterId = member.characterId;
    const profile = member.data && member.data.profile.profile.data;
    const characters = member.data && member.data.profile.characters.data;
    const character = characters && characters.find(character => character.characterId === characterId);

    const custom = [
      {
        emblemHash: 1661191199,
        animator: 'InexorableAce',
        animator_url: 'https://twitter.com/InexorableAce'
      },
      {
        emblemHash: 2133500855,
        animator: 'InexorableAce',
        animator_url: 'https://twitter.com/InexorableAce'
      },
      {
        emblemHash: 4159550313,
        animator: 'Tom Chapman'
      },
      {
        emblemHash: 4182480233,
        animator: 'Tom Chapman'
      },
      {
        emblemHash: 1409726988,
        animator: 'Tom Chapman'
      },
      {
        emblemHash: 1291068173,
        animator: 'Tom Chapman'
      }
    ];

    return (
      <div className='view' id='animated-emblems'>
        <div className='module head'>
          <div className='page-header'>
            <div className='name'>{t('Animated Emblems')}</div>
          </div>
        </div>
        <div className='padder'>
          {custom.map((custom, i) => {
            const definitionEmblem = manifest.DestinyInventoryItemDefinition[custom.emblemHash];

            return (
              <div key={i} className='row'>
                <div className='description'>
                  <div className='item'>
                    <ul className='list inventory-items'>
                      <Items items={[{ itemHash: custom.emblemHash }]} />
                    </ul>
                  </div>
                  <div className='text'>
                    <div className='name'>{definitionEmblem.displayProperties.name}</div>
                    <div className='animator'>
                      {custom.animator_url ? (
                        <>
                          {t('Animator')}: <a href={custom.animator_url} target='_blank' rel='noopener noreferrer'>
                            {custom.animator} <i className='segoe-uniE143' />
                          </a>
                        </>
                      ) : (
                        <>
                          {t('Animator')}: {custom.animator}
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className='emblem'>
                  <div className='background'>
                    <EmblemAnimatedBackground hash={custom.emblemHash} hideCredit />
                  </div>
                  <div className='icon'>
                    <EmblemAnimatedIcon hash={custom.emblemHash} />
                  </div>
                  <div className='text'>
                    <div className='displayName'>{profile ? profile.userInfo.displayName : 'Deej'}</div>
                    <div className='basics'>
                      {character ? (
                        <>
                          {character.baseCharacterLevel} / {classHashToString(character.classHash, character.genderType)} / <span className='light'>{character.light}</span>
                        </>
                      ) : (
                        <>
                          38 / {classHashToString(2271682572, 0)} / <span className='light'>777</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
)(AnimatedEmblemIcons);
