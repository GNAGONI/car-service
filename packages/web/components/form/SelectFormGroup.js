import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Select from 'react-select';
import ErrorIndificator from 'components/errorIndificator';
import { SELECT_THEMES } from '../commonSelector/constans';

const SelectFormGroup = ({
  classNames,
  placeholder,
  currentOption,
  name,
  setFieldValue,
  setFieldTouched,
  error,
  options,
  isSearchable,
  isDisabled,
  stylesTheme,
  onChange,
  shouldDisplayErrorMessage,
}) => {
  const [isFocused, toggleFocused] = useState(false);
  const handleFocusChange = () => toggleFocused(!isFocused);

  return (
    <div className={cn('input-group select-form-group', { 'has-error': error && !isFocused }, classNames)}>
      <Select
        options={options}
        isSearchable={isSearchable}
        placeholder={placeholder}
        name={name}
        isDisabled={isDisabled}
        onChange={val => setFieldValue(name, val) || onChange(name, val)}
        onBlur={() => handleFocusChange() || setFieldTouched(name, true)}
        onFocus={handleFocusChange}
        value={(currentOption && options.find(option => option.value === currentOption.value)) || ''}
        styles={SELECT_THEMES[stylesTheme]}
      />
      {shouldDisplayErrorMessage && error && <ErrorIndificator message={error} />}
    </div>
  );
};

SelectFormGroup.propTypes = {
  classNames: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  currentOption: PropTypes.any.isRequired,
  error: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  stylesTheme: PropTypes.string,
  onChange: PropTypes.func,
  shouldDisplayErrorMessage: PropTypes.bool,
};

SelectFormGroup.defaultProps = {
  placeholder: '',
  classNames: '',
  error: '',
  options: [],
  isSearchable: false,
  isDisabled: false,
  stylesTheme: 'longAuction',
  onChange: () => {},
  shouldDisplayErrorMessage: true,
};

export default SelectFormGroup;
