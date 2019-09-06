import React from 'react';
import cx from 'classnames';
import { withTranslation } from 'react-i18next';
import manifest from '../../../utils/manifest';

import * as paths from '../../../utils/paths';
import * as enums from '../../../utils/destinyEnums';
import { ProfileNavLink } from '../../../components/ProfileLink';
import ObservedImage from '../../../components/ObservedImage';
import Collectibles from '../../../components/Collectibles';

class BadgeNode extends React.Component {
  render() {
    const { t, member } = this.props;
    const characterCollectibles = member.data.profile.characterCollectibles.data;
    const profileCollectibles = member.data.profile.profileCollectibles.data;
    const characters = member.data.profile.characters.data;
    const character = characters.find(c => c.characterId === member.characterId);

    const classNodes = {
      '7761993': 2,
      '24162924': 2,
      '51250598': 2,
      '272447096': 0,
      '282080253': 2,
      '308119616': 1,
      '397176300': 1,
      '437406379': 2,
      '454888209': 0,
      '543101070': 1,
      '555927954': 2,
      '558738844': 0,
      '604768449': 0,
      '811225638': 0,
      '964388375': 1,
      '1003644562': 0,
      '1040898483': 2,
      '1080375723': 1,
      '1115203081': 0,
      '1172293868': 2,
      '1187972104': 2,
      '1234074769': 1,
      '1269917845': 2,
      '1367826044': 2,
      '1481732726': 1,
      '1521772351': 1,
      '1573256543': 2,
      '1802049362': 0,
      '1860141931': 2,
      '1875194813': 0,
      '1893032045': 0,
      '2084683608': 2,
      '2180056767': 1,
      '2283697615': 1,
      '2516153921': 0,
      '2591952283': 2,
      '2598675734': 0,
      '2607543675': 1,
      '2623445341': 1,
      '2652561747': 0,
      '2761465119': 0,
      '2765771634': 1,
      '3149147086': 1,
      '3233768126': 1,
      '3252380766': 0,
      '3711698756': 2,
      '3745240322': 1,
      '3784478466': 0,
      '4108787242': 0
    };

    let definitionBadge = manifest.DestinyPresentationNodeDefinition[this.props.match.params.secondary];

    let classNode = this.props.match.params.tertiary ? parseInt(this.props.match.params.tertiary, 10) : false;

    let children;

    let classStates = [];
    definitionBadge.children.presentationNodes.forEach(node => {
      let definitionNode = manifest.DestinyPresentationNodeDefinition[node.presentationNodeHash];

      let classState = [];
      definitionNode.children.collectibles.forEach(child => {
        let scope = profileCollectibles.collectibles[child.collectibleHash] ? profileCollectibles.collectibles[child.collectibleHash] : characterCollectibles[member.characterId].collectibles[child.collectibleHash];
        if (scope) {
          classState.push(scope.state);
        } else {
          console.log(`34 Undefined state for ${child.collectibleHash}`);
        }
      });

      if (!classNode && classNodes[definitionNode.hash] === character.classType) {
        classNode = definitionNode.hash;
      }

      if (classNode === definitionNode.hash) {
        
        children = (
          <ul className='list tertiary collection-items'>
            <Collectibles {...this.props} {...this.state} node={node.presentationNodeHash} inspect selfLinkFrom={paths.removeMemberIds(this.props.location.pathname)} />
          </ul>
        );
      }

      classStates.push({
        class: enums.CLASSES[classNodes[definitionNode.hash]].toLowerCase(),
        name: definitionNode.displayProperties.name,
        states: classState
      });
    });

    let completed = false;
    let progress = [];

    classStates.forEach(obj => {
      if (obj.states.filter(collectible => !enums.enumerateCollectibleState(collectible).notAcquired).length === obj.states.filter(collectible => !enums.enumerateCollectibleState(collectible).invisible).length) {
        completed = true;
      }

      progress.push(
        <div key={obj.class} className='progress'>
          <div className='class-icon'>
            <span className={`destiny-class_${obj.class}`} />
          </div>
          <div className='text'>
            <div className='title'>{obj.name}</div>
            <div className='fraction'>
              {obj.states.filter(collectible => !enums.enumerateCollectibleState(collectible).notAcquired).length}/{obj.states.filter(collectible => !enums.enumerateCollectibleState(collectible).invisible).length}
            </div>
          </div>
          <div
            className={cx('bar', {
              completed: obj.states.filter(collectible => !enums.enumerateCollectibleState(collectible).notAcquired).length === obj.states.filter(collectible => !enums.enumerateCollectibleState(collectible).invisible).length
            })}
          >
            <div
              className='fill'
              style={{
                width: `${(obj.states.filter(collectible => !enums.enumerateCollectibleState(collectible).notAcquired).length / obj.states.filter(collectible => !enums.enumerateCollectibleState(collectible).invisible).length) * 100}%`
              }}
            />
          </div>
        </div>
      );
    });

    let hires = {
      3241617029: '01E3-00000278.png',
      1419883649: '01E3-00000280.png',
      3333531796: '01E3-0000027C.png',
      2904806741: '01E3-00000244.png',
      1331476689: '01E3-0000024C.png',
      2881240068: '01E3-00000248.png',
      3642989833: '01E3-00000266.png',
      2399267278: '037E-00001D4C.png',
      701100740: '01A3-0000189C.png',
      1420354007: '01E3-0000032C.png',
      1086048586: '01E3-00000377.png',
      2503214417: '0560-00000D7D.png',
      2759158924: '0560-00006562.png'
    };

    // let obj = {}
    // for (const n of Object.values(manifest.DestinyPresentationNodeDefinition)) {
    //   n.children && n.children.presentationNodes && n.children.presentationNodes.length && n.children.presentationNodes.forEach(p => {
    //     let def = manifest.DestinyPresentationNodeDefinition[p.presentationNodeHash];
    //     if (def && def.displayProperties && def.displayProperties.name && def.displayProperties.name.toLowerCase() === 'titan') {
    //       obj[def.hash] = 0
    //     } else if (def && def.displayProperties && def.displayProperties.name && def.displayProperties.name.toLowerCase() === 'hunter') {
    //       obj[def.hash] = 1
    //     } else if (def && def.displayProperties && def.displayProperties.name && def.displayProperties.name.toLowerCase() === 'warlock') {
    //       obj[def.hash] = 2
    //     }
    //   })
    // }
    // console.log(JSON.stringify(obj))

    return (
      <div className='node badge'>
        <div className='children'>
          <div className='icon'>
            <ObservedImage className='image badge' src={hires[definitionBadge.hash] ? `/static/images/extracts/badges/${hires[definitionBadge.hash]}` : `https://www.bungie.net${definitionBadge.displayProperties.icon}`} />
            {completed ? <ObservedImage className='image badge-completed' src={`/static/images/extracts/ui/0560-00001498.png`} /> : null}
          </div>
          <div className='text'>
            <div className='name'>{definitionBadge.displayProperties.name}</div>
            <div className='description'>{definitionBadge.displayProperties.description}</div>
          </div>
          <div className='until'>
            {completed ? <h4 className='completed'>{t('Badge completed')}</h4> : <h4>{t('Badge progress')}</h4>}
            {progress}
          </div>
        </div>
        <div className='entries'>
          <div className='class-nodes'>
            <ul className='list'>
              {definitionBadge.children.presentationNodes.map(p => {
                let isActive = (match, location) => {
                  if (p.presentationNodeHash === classNode) {
                    return true;
                  } else {
                    return false;
                  }
                };

                return (
                  <li key={p.presentationNodeHash} className='linked'>
                    <span className={`destiny-class_${enums.CLASSES[classNodes[p.presentationNodeHash]].toLowerCase()}`} />
                    <ProfileNavLink isActive={isActive} to={`/collections/badge/${definitionBadge.hash}/${p.presentationNodeHash}`} />
                  </li>
                )
              })}
            </ul>
          </div>
          {children}
        </div>
      </div>
    );
  }
}

export default withTranslation()(BadgeNode);
