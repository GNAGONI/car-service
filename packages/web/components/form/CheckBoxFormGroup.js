import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxFormGroup = ({ id, checked, name, label, handleChange, checkboxValue }) => (
  <div className="custom-control custom-checkbox">
    <input
      type="checkbox"
      className="custom-control-input time-checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={() => handleChange(checkboxValue)}
    />
    <label className="custom-control-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

CheckBoxFormGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.any.isRequired,
  checkboxValue: PropTypes.bool.isRequired,
};

CheckBoxFormGroup.defaultProps = {
  id: '',
};

export default CheckBoxFormGroup;
