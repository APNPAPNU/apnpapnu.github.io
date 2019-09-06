import React from 'react';
import cx from 'classnames';

import manifest from '../../../utils/manifest';
import { getSockets } from '../../../utils/destinyItems';
import ObservedImage from '../../ObservedImage';
import ProgressBar from '../../UI/ProgressBar';

const armour = (item, member, detailedMode) => {
  let { stats, sockets, masterwork } = getSockets(item, false, detailedMode || item.itemComponents ? true : false, detailedMode ? false : true);

  let sourceString = item.collectibleHash ? (manifest.DestinyCollectibleDefinition[item.collectibleHash] ? manifest.DestinyCollectibleDefinition[item.collectibleHash].sourceString : false) : false;

  let intrinsic = sockets.find(socket => (socket.singleInitialItem ? socket.singleInitialItem.definition.itemCategoryHashes.includes(2237038328) : false));
  intrinsic = intrinsic ? manifest.DestinySandboxPerkDefinition[intrinsic.singleInitialItem.definition.perks[0].perkHash] : false;

  let powerLevel;
  if (item.itemComponents && item.itemComponents.instance) {
    powerLevel = item.itemComponents.instance.primaryStat.value;
  } else if (member && member.data) {
    let character = member.data.profile.characters.data.find(c => c.characterId === member.characterId);
    powerLevel = Math.floor((733 / 750) * character.light);
  } else {
    powerLevel = '700';
  }

  return {
    el: (
      <>
        <div className='damage armour'>
          <div className={cx('power')}>
            <div className='text'>{powerLevel}</div>
            <div className='text'>{manifest.DestinyStatDefinition[3897883278].displayProperties.name}</div>
          </div>
        </div>
        {item.itemComponents && item.itemComponents.objectives && item.itemComponents.objectives.length ? (
          <div className='objectives'>
            {item.itemComponents.objectives.map(o => {
              return (
                <ProgressBar
                  key={o.objectiveHash}
                  progress={{
                    complete: o.complete,
                    progress: o.progress,
                    objectiveHash: o.objectiveHash
                  }}
                  objective={{
                    completionValue: o.completionValue
                  }}
                />
              );
            })}
          </div>
        ) : null}
        {sourceString && !item.itemComponents ? (
          <div className='source'>
            <p>{sourceString}</p>
          </div>
        ) : null}
        {stats.length > 0 ? <div className={cx('stats', { 'detailed-mode': detailedMode })}>{stats.map(stat => stat.element)}</div> : null}
        <div className={cx('sockets', { 'has-sockets': sockets.length > 0, 'detailed-mode': detailedMode })}>
          {intrinsic ? (
            <div className='plug is-active intrinsic'>
              <ObservedImage className={cx('image', 'icon')} src={`https://www.bungie.net${intrinsic.displayProperties.icon}`} />
              <div className='text'>
                <div className='name'>{intrinsic.displayProperties.name}</div>
                <div className='description'>{intrinsic.displayProperties.description}</div>
              </div>
            </div>
          ) : null}
          {sockets.length > 0
            ? sockets.map((socket, i) => {
                let group = socket.plugs
                  .filter(plug => {
                    if (plug.definition.redacted) {
                      return false;
                    } else {
                      return true;
                    }
                  })
                  .filter(plug => {
                    if (!plug.definition.itemCategoryHashes) {
                      console.log(socket, plug);
                      return false;
                    } else {
                      return true;
                    }
                  })
                  .filter(plug => !plug.definition.itemCategoryHashes.includes(2237038328))
                  .filter(plug => {
                    if (!item.itemComponents && !detailedMode) {
                      if (plug.active) {
                        return true;
                      } else {
                        return false;
                      }
                    } else {
                      return true;
                    }
                  })
                  .filter(plug => {
                    if (item.itemComponents && socket.mod) {
                      if (plug.active) {
                        return true;
                      } else {
                        return false;
                      }
                    } else {
                      return true;
                    }
                  });

                if (group.length > 0) {
                  return (
                    <div key={i} className='group'>
                      {group.length > 4 ? (
                        <>
                          {group.slice(0, 3).map(plug => plug.element)}
                          <div className='plug ellipsis'>+ {group.length - 3} more</div>
                        </>
                      ) : (
                        group.map(plug => plug.element)
                      )}
                    </div>
                  );
                } else {
                  return null;
                }
              })
            : null}
        </div>
      </>
    ),
    masterwork
  };
};

export default armour;
