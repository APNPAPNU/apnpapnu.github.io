import React from 'react';
import cx from 'classnames';

import manifest from '../../../utils/manifest';

const mod = item => {

  let stats = [];
  item.investmentStats.forEach((stat, i) => {
    let definition = manifest.DestinyStatDefinition[stat.statTypeHash];
    stats.push(
      <div key={i} className='stat'>
        <div className='name'>{definition.displayProperties.name}</div>
        <div className='value int'>+{stat.value}</div>
      </div>
    );
  });

  let description = item.displayProperties.description;
  if (description === '' && item.perks && item.perks.length === 1) {
    let definitionPerk = manifest.DestinySandboxPerkDefinition[item.perks[0].perkHash]
    description = definitionPerk.displayProperties.description
  }
  
  return (
    <>
      {stats.length > 0 ? <div className='stats'>{stats}</div> : null}
      <div className={cx('description', { 'has-stats': stats.length })}>
        <pre>{description}</pre>
      </div>
    </>
  );
};

export default mod;
