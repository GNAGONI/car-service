import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const ErrorAlert = ({ message }) => <Alert variant="danger">{message}</Alert>;

ErrorAlert.propTypes = {
  message: PropTypes.string,
};

ErrorAlert.defaultProps = {
  message: 'Please complete this error',
};

export default ErrorAlert;
