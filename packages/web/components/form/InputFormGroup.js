import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from 'react-icons-kit';
import InputMask from 'react-input-mask';

import { iosClose } from 'react-icons-kit/ionicons/iosClose';
import { iosCheckmark } from 'react-icons-kit/ionicons/iosCheckmark';

import ErrorIndificator from 'components/errorIndificator';

const InputFormGroup = ({
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
  type,
  validationMarks,
  valid,
  textDisable,
  rounded,
  mask,
  maskChar,
  ...props
}) => (
  <div className={cn('input-group', { 'has-error': error, 'rounded-border': rounded })}>
    {validationMarks && error && (
      <Icon className="link-without-border" icon={iosClose} size={32} style={{ color: '#ea444e' }} />
    )}
    {validationMarks && valid && (
      <Icon className="link-without-border" icon={iosCheckmark} size={32} style={{ color: '#9fd34a' }} />
    )}
    <InputMask
      type={type}
      className="form-control"
      placeholder={placeholder}
      id={id}
      onChange={handleChange}
      onBlur={handleBlur}
      name={name}
      value={value}
      disabled={disabled}
      {...props}
      mask={mask}
      maskChar={maskChar}
    />
    {iconText && <i className={cn('ico ico-text', { 'ico-placeholder': !value })}>{iconText}</i>}
    {iconImage && (
      <div className="ico">
        <img width="28" height="45" alt="icon" src={iconImage} />
      </div>
    )}
    {textDisable && <span className="text-disable">{textDisable}</span>}
    {error && <ErrorIndificator message={error} />}
  </div>
);

InputFormGroup.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  iconText: PropTypes.string,
  iconImage: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.any,
  validationMarks: PropTypes.bool,
  valid: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  textDisable: PropTypes.string,
  rounded: PropTypes.bool,
  mask: PropTypes.string,
  maskChar: PropTypes.string,
};

InputFormGroup.defaultProps = {
  id: '',
  placeholder: '',
  iconText: '',
  iconImage: '',
  disabled: false,
  type: 'text',
  error: '',
  validationMarks: false,
  valid: false,
  rounded: false,
  mask: '',
  maskChar: '',
  handleChange: () => {},
  handleBlur: () => {},
};

export default InputFormGroup;
