import React from 'react';
import PropTypes from 'prop-types';
import BaseForm from './BaseForm';

const TableForm = ({ buttonText }) => <BaseForm formType="table" buttonText={buttonText} />;

TableForm.propTypes = {
  buttonText: PropTypes.string,
};

TableForm.defaultProps = {
  buttonText: 'Get price',
};

export default TableForm;
