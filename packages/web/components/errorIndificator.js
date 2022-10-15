import React from 'react';
import PropTypes from 'prop-types';

const ErrorIndificator = ({ message }) => (
  <strong className="invalid-feedback">
    <span>{message}</span>
  </strong>
);

ErrorIndificator.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

ErrorIndificator.defaultProps = {
  message: 'Please complete this error',
};

export default ErrorIndificator;
