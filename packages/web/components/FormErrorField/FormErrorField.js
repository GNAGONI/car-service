import React from 'react';
import PropTypes from 'prop-types';

const FormErrorField = ({ children }) => (
  <strong className="invalid-feedback d-block">
    <span>{children}</span>
  </strong>
);

FormErrorField.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormErrorField;
