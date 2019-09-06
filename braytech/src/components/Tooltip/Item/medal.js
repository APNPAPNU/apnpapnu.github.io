import React from 'react';
import cx from 'classnames';

import manifest from '../../../utils/manifest';

const mod = item => {

  let description = item.statDescription;
  
  return (
    <>
      <div className={cx('description')}>
        <pre>{description}</pre>
      </div>
    </>
  );
};

export default mod;
