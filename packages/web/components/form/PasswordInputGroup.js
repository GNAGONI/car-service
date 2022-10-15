import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ErrorIndificator from 'components/errorIndificator';

const PasswordInputGroup = ({
  placeholder,
  id,
  iconText,
  iconImage,
  value,
  name,
  handleChange,
  handleBlur,
  error,
  disabled,
  rounded,
  autoComplete,
}) => {
  const [passwordFieldType, setPasswordFieldType] = useState('password');
  const isPasswordHidden = passwordFieldType === 'input';

  const showHidePassword = e => {
    e.preventDefault();
    e.stopPropagation();

    setPasswordFieldType(isPasswordHidden ? 'password' : 'input');
  };

  return (
    <div className={cn('input-group', { 'has-error': error, 'rounded-border': rounded })}>
      <span aria-checked="false" onClick={showHidePassword} className="link">
        {isPasswordHidden ? 'Hide' : 'Show'} password?
      </span>
      <input
        type={passwordFieldType}
        className="form-control"
        placeholder={placeholder}
        id={id}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        value={value}
        disabled={disabled}
        autoComplete={autoComplete}
      />
      {iconText && <i className={cn('ico ico-text', { 'ico-placeholder': !value })}>{iconText}</i>}
      {iconImage && (
        <div className="ico">
          <img width="28" height="45" alt="icon" src={iconImage} />
        </div>
      )}
      {error && <ErrorIndificator message={error} />}
    </div>
    // <InputGroup>
    //   <Form.Control name="password" type={passwordFieldType} placeholder="Password" />
    // </InputGroup>
  );
};

PasswordInputGroup.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  iconText: PropTypes.string,
  iconImage: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  error: PropTypes.string,
  rounded: PropTypes.bool,
  autoComplete: PropTypes.string,
};

PasswordInputGroup.defaultProps = {
  id: '',
  placeholder: '',
  iconText: '',
  iconImage: '',
  disabled: false,
  error: '',
  rounded: false,
  autoComplete: '',
};

export default PasswordInputGroup;
