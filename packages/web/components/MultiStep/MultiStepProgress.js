import React from 'react';
import PropTypes from 'prop-types';

import MultiStepProgressItem from './MultiStepProgressItem';

const MultiStepProgress = ({ page, stepNames }) => (
  <ul className="process-nav bg-before-info">
    {stepNames.map((stepName, i) => (
      <MultiStepProgressItem text={stepName} key={stepName} isActive={page >= i} />
    ))}
  </ul>
);

MultiStepProgress.propTypes = {
  page: PropTypes.number,
  stepNames: PropTypes.array,
};

MultiStepProgress.defaultProps = {
  page: 0,
  stepNames: [],
};

export default MultiStepProgress;
