import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const CheckDataError = ({ errorMessage }) => <Alert variant="danger">{errorMessage || 'Ops something wrong!'}</Alert>;

CheckDataError.propTypes = {
  errorMessage: PropTypes.string,
};

CheckDataError.defaultProps = {
  errorMessage: '',
};

export default CheckDataError;
