import React from 'react';
import PropTypes from 'prop-types';

const RadioFormGroup = ({ id, checked, name, label, handleChange }) => (
  <div className="custom-control custom-radio">
    <input
      type="checkbox"
      className="custom-control-input"
      id={id}
      name={name}
      checked={checked}
      onChange={handleChange}
    />
    <label className="custom-control-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

RadioFormGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.any.isRequired,
};

RadioFormGroup.defaultProps = {
  id: '',
};

export default RadioFormGroup;
