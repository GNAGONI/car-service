import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ErrorIndificator from 'components/errorIndificator';

const TextAreaFormGroup = ({ id, placeholder, name, value, handleChange, handleBlur, error }) => (
  <div className={cn('input-group', { 'has-error': error })}>
    <textarea
      className="form-control"
      placeholder={placeholder}
      id={id}
      onChange={handleChange}
      onBlur={handleBlur}
      name={name}
      value={value}
    />
    {error && <ErrorIndificator message={error} />}
  </div>
);

TextAreaFormGroup.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextAreaFormGroup.defaultProps = {
  id: '',
  placeholder: '',
  error: '',
};

export default TextAreaFormGroup;
