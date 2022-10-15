import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const MultiStepProgressItem = ({ text, isActive }) => (
  <li className={cn({ active: isActive })}>
    <span>{text}</span>
  </li>
);

MultiStepProgressItem.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
};

MultiStepProgressItem.defaultProps = {
  text: '',
  isActive: false,
};

export default MultiStepProgressItem;
