import React from 'react';
import cx from 'classnames';
import { orderBy, cloneDeep } from 'lodash';

import ObservedImage from '../components/ObservedImage';
import ProgressBar from '../components/UI/ProgressBar';
import manifest from './manifest';

const interpolate = (investmentValue, displayInterpolation) => {
  const interpolation = [...displayInterpolation].sort((a, b) => a.value - b.value);

  const upperBound = interpolation.find(point => point.value >= investmentValue);
  const lowerBound = [...interpolation].reverse().find(point => point.value <= investmentValue);

  if (!upperBound && !lowerBound) {
    console.log('Invalid displayInterpolation');
  }

  if (!upperBound || !lowerBound) {
    if (upperBound) {
      return upperBound.weight;
    } else if (lowerBound) {
      return lowerBound.weight;
    } else {
      console.log('Invalid displayInterpolation');
    }
  }

  const range = upperBound.value - lowerBound.value;
  const factor = range > 0 ? (investmentValue - lowerBound.value) / 100 : 1;

  const displayValue = lowerBound.weight + (upperBound.weight - lowerBound.weight) * factor;
  return Math.round(displayValue);
};

/**
 * Get and process an item's sockets and stats
 * @param item item definition with itemComponents embedded
 * @param traitsOnly exclude plugs such as intrinsic perks
 * @param mods whether to include mod sockets
 * @param initialOnly display active plug only
 * @param randomizedPlugItems display all possible plug items available
 * @param socketExclusions sockets to exclude
 * @param uiStyleTooltips whether plugs should identify themselves as UI type tooltips
 * @param showHiddenStats whether hidden stats such as aim assistance should be displayed
 * @return an object containing arrays of sockets and stats
 */
export const getSockets = (item, traitsOnly = false, mods = true, initialOnly = false, randomizedPlugItems = false, socketExclusions = [], uiStyleTooltips = false, showHiddenStats = false) => {

  let statGroup = item.stats ? manifest.DestinyStatGroupDefinition[item.stats.statGroupHash] : false;

  let statModifiers = [];

  let socketsOutput = [];
  let masterwork = false;

  if (item.sockets) {
    let socketEntries = item.sockets.socketEntries;

    let socketMasterworkCatalyst;
    let plugMasterworkCatalyst;

    if (item.itemComponents && item.itemComponents.sockets) {
      Object.keys(socketEntries).forEach(key => {

        socketEntries[key].singleInitialItemHash = item.itemComponents.sockets[key].plugHash || 0;
        socketEntries[key].reusablePlugItems = item.itemComponents.sockets[key].reusablePlugs || [];
        socketEntries[key].plugObjectives = item.itemComponents.sockets[key].plugObjectives;

        // check for a masterwork catalyst with progress
        if (socketEntries[key].reusablePlugItems.find(p => {
          let definitionPlug = manifest.DestinyInventoryItemDefinition[p.plugItemHash];

          if (definitionPlug && definitionPlug.plug.uiPlugLabel === 'masterwork_interactable' && p.plugObjectives && p.plugObjectives.length > 0) {
            plugMasterworkCatalyst = p;
            return true;
          } else {
            return false
          }
        })) {
          socketMasterworkCatalyst = socketEntries[key];
        }

        // if plugItems is empty add initial plug
        if (socketEntries[key].reusablePlugItems.length === 0 && socketEntries[key].singleInitialItemHash !== 0) {
          socketEntries[key].reusablePlugItems.push({
            active: true,
            plugItemHash: socketEntries[key].singleInitialItemHash,
            plugObjectives: item.itemComponents.sockets[key].plugObjectives || []
          });
        }

        // add initial plug to plugItems if it isn't there
        if (socketEntries[key].singleInitialItemHash && !socketEntries[key].reusablePlugItems.find(plug => socketEntries[key].singleInitialItemHash === plug.plugItemHash)) {
          socketEntries[key].reusablePlugItems.push({
            active: true,
            plugItemHash: socketEntries[key].singleInitialItemHash,
            plugObjectives: item.itemComponents.sockets[key].plugObjectives || []
          });
        }

      });
    } else if (item.itemComponents && item.itemComponents.custom) {
      if (item.itemComponents.plugs) {
        item.itemComponents.plugs.forEach(customPlug => {
          Object.keys(socketEntries).forEach(key => {
            let socket = socketEntries[key];
    
            //console.log(socket);
            
            let emptyHim = false;

            socket.reusablePlugItems.concat(socket.randomizedPlugItems).forEach(p => {
              let definitionPlug = manifest.DestinyInventoryItemDefinition[p.plugItemHash];
              
              if (definitionPlug && definitionPlug.plug.plugCategoryIdentifier === customPlug.plugCategoryIdentifier && definitionPlug.plug.uiPlugLabel === customPlug.uiPlugLabel) {
                if (customPlug.disable) {
                  socket.singleInitialItemHash = 0;
                } else {
                  socket.singleInitialItemHash = definitionPlug.hash;
                }
                emptyHim = true;
              } else if (definitionPlug && definitionPlug.plug.plugCategoryIdentifier === customPlug.plugCategoryIdentifier && definitionPlug.hash === customPlug.hash) {
                socket.singleInitialItemHash = definitionPlug.hash;
                emptyHim = true;
              } else if (definitionPlug.plug.plugCategoryHash === 3313201758 && customPlug.hash) {
                socket.singleInitialItemHash = customPlug.hash;
                emptyHim = true;
              }
    
            });

            if (emptyHim) {
              socket.randomizedPlugItems = [];
              socket.reusablePlugItems = [];
            }
    
          });
        });
      }
    }

    

    // console.log(socketMasterworkCatalyst, plugMasterworkCatalyst)

    Object.keys(socketEntries).forEach(key => {
      let socket = socketEntries[key];

      let socketCategory = item.sockets.socketCategories.find(category => category.socketIndexes.includes(parseInt(key, 10)));
      let socketCategoryHash =  socketCategory && socketCategory.socketCategoryHash;

      let modCategoryHash = [3379164649, 590099826, 2685412949, 4243480345, 590099826, 2218810001, 4265082475, 3379164649];

      let plugItems = randomizedPlugItems ? socket.reusablePlugItems.concat(socket.randomizedPlugItems).filter((p, i, self) =>
        i === self.findIndex((t) => (
          t.plugItemHash === p.plugItemHash
        ))
      ) : socket.reusablePlugItems;

      if (socket.singleInitialItemHash !== 0 && !plugItems.find(p => p.plugItemHash === socket.singleInitialItemHash)) {
        plugItems.unshift({plugItemHash: socket.singleInitialItemHash});
      }

      plugItems.forEach(p => {
        if (plugMasterworkCatalyst && plugMasterworkCatalyst.plugItemHash === p.plugItemHash) {
          plugMasterworkCatalyst.plugObjectives.forEach(o => {
            if (!o.complete) {
              socketMasterworkCatalyst.reusablePlugItems.forEach(r => {
                r.disabled = true;
              });
            }
          })
        }
      });

      let initialPlug = plugItems.find(p => p.plugItemHash === socket.singleInitialItemHash);
      let definitionInitialPlug = initialPlug && initialPlug.plugItemHash ? manifest.DestinyInventoryItemDefinition[initialPlug.plugItemHash] : false;

      if (!initialPlug) {
        // console.log(socket)
      }

      if (definitionInitialPlug && definitionInitialPlug.investmentStats) {

        if (!initialPlug.disabled) {

          if (definitionInitialPlug.plug.uiPlugLabel === 'masterwork') {
            masterwork = true;
          }

          definitionInitialPlug.investmentStats.forEach(modifier => {
            let index = statModifiers.findIndex(stat => stat.statHash === modifier.statTypeHash);
            if (index > -1) {
              if (modCategoryHash.includes(socketCategoryHash)) {
                if (definitionInitialPlug.plug.uiPlugLabel === 'masterwork') {
                  statModifiers[index].masterwork = statModifiers[index].masterwork + modifier.value
                } else {
                  statModifiers[index].mod = statModifiers[index].mod + modifier.value;
                }
              } else {
                statModifiers[index].value = statModifiers[index].value + modifier.value;
              }
            } else {
              statModifiers.push({
                statHash: modifier.statTypeHash,
                value: !modCategoryHash.includes(socketCategoryHash) ? modifier.value : 0,
                mod: modCategoryHash.includes(socketCategoryHash) && definitionInitialPlug.plug.uiPlugLabel !== 'masterwork' ? modifier.value : 0,
                masterwork: modCategoryHash.includes(socketCategoryHash) && definitionInitialPlug.plug.uiPlugLabel === 'masterwork' ? modifier.value : 0
              });
            }
          });

        } else {
          console.log('skipping disabled plug');
        }

      }

      if (socketExclusions.includes(socket.singleInitialItemHash) || (!mods && modCategoryHash.includes(socketCategoryHash))) {
        return;
      }

      let socketPlugs = [];

      plugItems.forEach(p => {
        let definitionPlug = manifest.DestinyInventoryItemDefinition[p.plugItemHash];

        if (traitsOnly && !definitionPlug.itemCategoryHashes.includes(3708671066)) {
          return;
        }

        socketPlugs.push({
          active: p.plugItemHash === socket.singleInitialItemHash,
          enabled: !p.disabled,
          objectives: p.plugObjectives || [],
          definition: definitionPlug,
          element: (
            <div key={definitionPlug.hash} className={cx('plug', 'tooltip', { 'is-intrinsic': definitionPlug.itemCategoryHashes && definitionPlug.itemCategoryHashes.includes(2237038328), 'is-active': definitionPlug.hash === socket.singleInitialItemHash })} data-hash={definitionPlug.hash} data-tooltiptype={ uiStyleTooltips ? 'ui' : '' }>
              <ObservedImage className={cx('image', 'icon')} src={`https://www.bungie.net${definitionPlug.displayProperties.icon ? definitionPlug.displayProperties.icon : `/img/misc/missing_icon_d2.png`}`} />
              <div className='text'>
                <div className='name'>{definitionPlug.displayProperties.name ? definitionPlug.displayProperties.name : `Unknown`}</div>
                <div className='description'>{definitionPlug.itemTypeDisplayName}</div>
                {plugMasterworkCatalyst && plugItems.find(p => p.plugItemHash === plugMasterworkCatalyst.plugItemHash) && !p.enabled ? (
                  <div className='objectives'>
                    {plugMasterworkCatalyst.plugObjectives.map((o, i) => {
                      let definitionObjective = manifest.DestinyObjectiveDefinition[o.objectiveHash];
                      return <ProgressBar
                        key={i}
                        objective={definitionObjective}
                        progress={o}
                      />
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          )
        });
      });

      let singleInitialItem = false;
      if (socket.singleInitialItemHash !== 0) {
        let plug = manifest.DestinyInventoryItemDefinition[socket.singleInitialItemHash];
        singleInitialItem = {
          active: true,
          enabled: true,
          objectives: socket.plugObjectives || [],
          definition: plug,
          element: plug.redacted ? (
            <div key={plug.hash} className={cx('plug', 'tooltip', { 'is-active': plug.hash === socket.singleInitialItemHash })} data-hash={plug.hash} data-tooltiptype={ uiStyleTooltips ? 'ui' : '' }>
              <ObservedImage className={cx('image', 'icon')} src={`https://www.bungie.net${manifest.settings.destiny2CoreSettings.undiscoveredCollectibleImage}`} />
              <div className='text'>
                <div className='name'>Classified</div>
              </div>
            </div>
          ) : (
            <div key={plug.hash} className={cx('plug', 'tooltip', { 'is-intrinsic': plug.itemCategoryHashes.includes(2237038328), 'is-active': plug.hash === socket.singleInitialItemHash })} data-hash={plug.hash} data-tooltiptype={ uiStyleTooltips ? 'ui' : '' }>
              <ObservedImage className={cx('image', 'icon')} src={`https://www.bungie.net${plug.displayProperties.icon}`} />
              <div className='text'>
                <div className='name'>{plug.displayProperties.name}</div>
                <div className='description'>{plug.itemTypeDisplayName}</div>
              </div>
            </div>
          )
        };
      }

      if (socket.singleInitialItemHash !== 0 && !socketPlugs.find(plug => plug.definition.hash === socket.singleInitialItemHash)) {
        socketPlugs.unshift(singleInitialItem);
      }

      if (!singleInitialItem && socketPlugs.length === 0) {
        return;
      }

      // socketPlugs = orderBy(socketPlugs, [plug => plug.active], ['desc']);

      // console.log(modCategoryHash.includes(socketCategoryHash), singleInitialItem.definition.displayProperties.name)

      socketsOutput.push({
        socketCategoryHash: socketCategoryHash,
        socketTypeHash: socket.socketTypeHash,
        mod: modCategoryHash.includes(socketCategoryHash),
        singleInitialItem,
        plugs: socketPlugs,
        plugObjectives: socket.plugObjectives || []
      });
    });
  }

  // console.log(socketsOutput)

  // console.log(item)

  let statsOutput = [];

  if (item.itemType === 3) {
    statGroup.scaledStats.forEach(stat => {
      let statModifier = statModifiers.find(modifier => modifier.statHash === stat.statHash);
      let statDef = manifest.DestinyStatDefinition[stat.statHash];

      if (Object.keys(item.stats.stats).includes(stat.statHash.toString())) {
        let modifier = statModifier ? statModifier.value + statModifier.mod + statModifier.masterwork : 0;

        let instanceStat = item.itemComponents && item.itemComponents.stats ? Object.values(item.itemComponents.stats).find(s => s.statHash === stat.statHash) : false;

        let investmentStat = item.investmentStats.find(investment => investment.statTypeHash === stat.statHash);
        let scaledStats = statGroup.scaledStats.find(scale => scale.statHash === stat.statHash);

        let interpolatatedModifier = scaledStats && investmentStat ? interpolate(investmentStat.value + modifier, scaledStats.displayInterpolation) : modifier;

        let value = interpolatatedModifier;
        if (stat.hash === 3871231066) {
          value = value < 1 ? 1 : value;
        }

        let modValue = statModifier ? statModifier.mod : 0;
        let masterworkValue = statModifier ? statModifier.masterwork : 0;
        
        value = instanceStat ? instanceStat.value : value;
        let total = value;
        value = modValue > 0 ? value - modValue : value;
        value = masterworkValue > 0 ? value - masterworkValue : value;

        statsOutput.push({
          displayAsNumeric: stat.displayAsNumeric,
          statHash: stat.statHash,
          element: (
            <div key={stat.statHash} className='stat'>
              <div className='name'>{statDef.displayProperties.name}</div>
              <div className={cx('value', { bar: !stat.displayAsNumeric, int: stat.displayAsNumeric, mod: modValue > 0, masterwork: masterworkValue > 0 })}>
                {!stat.displayAsNumeric ? (
                  <>
                    <div className='bar' data-value={value} style={{ width: `${value}%` }} />
                    {modValue > 0 ? <div className='tip' style={{ width: `${modValue}%` }} /> : null}
                    {masterworkValue > 0 ? <div className='tip masterwork' style={{ width: `${masterworkValue}%` }} /> : null}
                    <div className='int'>{total}</div>
                  </>
                ) : (
                  value
                )}
              </div>
            </div>
          )
        });
      }
    });

    if (showHiddenStats) {
      Object.values(item.stats.stats).forEach(stat => {

        if ([1931675084, 3291498656].includes(stat.statHash)) {
          return;
        }

        if (!statsOutput.find(s => s.statHash === stat.statHash)) {
          let statModifier = statModifiers.find(modifier => modifier.statHash === stat.statHash);
          let statDef = manifest.DestinyStatDefinition[stat.statHash];
  
          let investmentStat = item.investmentStats.find(investment => investment.statTypeHash === stat.statHash);
  
          let instanceStat = item.itemComponents && item.itemComponents.stats ? Object.values(item.itemComponents.stats).find(s => s.statHash === stat.statHash) : false;
  
          let value = investmentStat ? investmentStat.value : 0;
  
          let modValue = statModifier ? statModifier.mod : 0;
          let masterworkValue = statModifier ? statModifier.masterwork : 0;
          
          value = instanceStat ? instanceStat.value : value;
          let total = value;
          value = modValue > 0 ? value - modValue : value;
          value = masterworkValue > 0 ? value - masterworkValue : value;
  
          if (value < 1) {
            return;
          }

          // if (statDef.displayProperties.name === '') {
          //   console.log(statDef);
          // }

          statsOutput.push({
            displayAsNumeric: false,
            statHash: stat.statHash,
            element: (
              <div key={stat.statHash} className='stat'>
                <div className='name'>{statDef.displayProperties.name}</div>
                <div className={cx('value', { bar: !stat.displayAsNumeric, int: stat.displayAsNumeric, mod: modValue > 0, masterwork: masterworkValue > 0 })}>
                  {!stat.displayAsNumeric ? (
                    <>
                      <div className='bar' data-value={value} style={{ width: `${value}%` }} />
                      {modValue > 0 ? <div className='tip' style={{ width: `${modValue}%` }} /> : null}
                      {masterworkValue > 0 ? <div className='tip masterwork' style={{ width: `${masterworkValue}%` }} /> : null}
                      <div className='int'>{total}</div>
                    </>
                  ) : (
                    value
                  )}
                </div>
              </div>
            )
          });
        }
      });
    }
  }

  if (item.itemType === 2) {
    statGroup.scaledStats.forEach(stat => {
      let statModifier = statModifiers.find(modifier => modifier.statHash === stat.statHash);
      let statDef = manifest.DestinyStatDefinition[stat.statHash];

      let modifier = statModifier ? statModifier.value : 0;

      let investmentStat = item.investmentStats.find(investment => investment.statTypeHash === stat.statHash);
      let scaledStats = statGroup.scaledStats.find(scale => scale.statHash === stat.statHash);

      let value = Math.min((investmentStat ? investmentStat.value : 0) + modifier, scaledStats.maximumValue);
      let total = value;

      statsOutput.push({
        element: (
          <div key={stat.statHash} className='stat'>
            <div className='name'>{statDef.displayProperties.name}</div>
            <div className={cx('value', { bar: !stat.displayAsNumeric, int: stat.displayAsNumeric })}>
              {!stat.displayAsNumeric ? <div className='bar' data-value={value} style={{ width: `${(value / 3) * 100}%` }} /> : value}
              <div className='int'>{total}</div>
            </div>
          </div>
        )
      });
    });
  }

  // push numeric stats to the bottom
  statsOutput = orderBy(statsOutput, [stat => stat.displayAsNumeric], ['asc']);

  // push mods to the bottom
  socketsOutput = orderBy(socketsOutput, [socket => socket.mod], ['asc']);

  return {
    stats: statsOutput,
    sockets: socketsOutput,
    masterwork
  };
};

export const getOrnaments = hash => {
  let item = manifest.DestinyInventoryItemDefinition[hash];

  let ornaments = [];

  let defaultOrnamentHash = [1959648454, 2931483505];
  if (item.sockets) {
    Object.keys(item.sockets.socketEntries).forEach(key => {
      if (defaultOrnamentHash.includes(item.sockets.socketEntries[key].singleInitialItemHash)) {
        item.sockets.socketEntries[key].reusablePlugItems
          .filter(plug => !defaultOrnamentHash.includes(plug.plugItemHash))
          .forEach(plug => {
            let def = manifest.DestinyInventoryItemDefinition[plug.plugItemHash];
            ornaments.push({
              element: (
                <div key={def.hash} className={cx('plug', 'tooltip')} data-hash={def.hash}>
                  <ObservedImage className={cx('image', 'icon')} src={`https://www.bungie.net${def.displayProperties.icon}`} />
                  <div className='text'>
                    <div className='name'>{def.displayProperties.name}</div>
                    <div className='description'>Ornament</div>
                  </div>
                </div>
              )
            });
          });
      }
    });
  }

  return ornaments;
};
