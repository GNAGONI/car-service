import React from 'react';
import PropTypes from 'prop-types';

const FormCheckbox = ({ checked, name, handleChange, children, id }) => (
  <div className="custom-control custom-checkbox">
    <input
      checked={checked}
      name={name}
      onChange={handleChange}
      type="checkbox"
      id={id}
      className="custom-control-input"
    />
    <label htmlFor={id} className="custom-control-label">
      {children}
    </label>
  </div>
);

FormCheckbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  id: PropTypes.string.isRequired,
};

FormCheckbox.defaultProps = {
  checked: false,
  name: '',
  handleChange: () => {},
  children: '',
};

export default FormCheckbox;
