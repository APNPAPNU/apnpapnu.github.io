import React from 'react';
import cx from 'classnames';

import { stringToIcons } from '../../../utils/destinyUtils';

import './styles.css';
import manifest from '../../../utils/manifest';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classNames, hideCheck, chunky, progress, objective } = this.props;

    if (!progress || !objective) {
      return null;
    }

    let { complete = false, progress: value, objectiveHash } = progress;
    let { progressDescription = '', completionValue, allowOvercompletion = true } = objective;

    if (progressDescription === '' && objectiveHash && manifest.DestinyObjectiveDefinition[objectiveHash] && manifest.DestinyObjectiveDefinition[objectiveHash].progressDescription) progressDescription = manifest.DestinyObjectiveDefinition[objectiveHash].progressDescription;

    progressDescription = stringToIcons(progressDescription);

    value = allowOvercompletion ? value : Math.min(value, completionValue);
    let wholeFraction = completionValue === 1 ? true : false;
    let completeText = complete ? 'Complete' : 'Incomplete';

    return (
      <div key={objectiveHash} className={cx('progress-bar', classNames, { complete: completionValue && complete, chunky: chunky })}>
        {!hideCheck ? <div className={cx('check', { ed: completionValue && complete })} /> : null}
        <div className={cx('bar', { full: hideCheck })}>
          <div className='text'>
            <div className='description'>{progressDescription !== '' ? progressDescription : completeText}</div>
            {completionValue && !wholeFraction ? (
              <div className='fraction'>
                {value}/{completionValue}
              </div>
            ) : null}
          </div>
          {completionValue ? <div className='fill' style={{ width: `${(value / completionValue) * 100}%` }} /> : null}
        </div>
      </div>
    );
  }
}

export default ProgressBar;
