import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import ErrorIndificator from 'components/errorIndificator';
import CustomInput from './DatePickerCustomInput';

const DatePickerFormGroup = ({
  classNames,
  placeholder,
  value,
  name,
  setFieldValue,
  setFieldTouched,
  error,
  dateFormat,
  minDate,
  filterDate,
  onChangeDate,
  disabled,
}) => {
  const [isFocused, toggleFocused] = useState(false);
  const handleFocusChange = () => toggleFocused(!isFocused);

  return (
    <div className={cn('input-group has-datetime', { 'has-error': error }, classNames)}>
      <div className="react-datepicker--wrapper input-group">
        <DatePicker
          autoComplete="off"
          customInput={<CustomInput placeholder={placeholder} />}
          placeholderText={placeholder}
          name={name}
          selected={value && moment(value).toDate()}
          onChange={val => setFieldValue(name, val) || onChangeDate(val)}
          onBlur={() => handleFocusChange() || setFieldTouched(name, true)}
          onFocus={handleFocusChange}
          dropdownMode="select"
          locale="en"
          minDate={moment(minDate).toDate()}
          dateFormat={dateFormat}
          filterDate={filterDate}
          disabled={disabled}
        />
      </div>
      {error && <ErrorIndificator message={error} />}
    </div>
  );
};

DatePickerFormGroup.propTypes = {
  classNames: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  onChangeDate: PropTypes.func,
  filterDate: PropTypes.func,
  value: PropTypes.any.isRequired,
  error: PropTypes.string,
  dateFormat: PropTypes.string,
  minDate: PropTypes.any,
  disabled: PropTypes.bool,
};

DatePickerFormGroup.defaultProps = {
  placeholder: '',
  classNames: '',
  error: '',
  dateFormat: 'yyyy-MM-dd',
  minDate: '',
  onChangeDate: () => {},
  filterDate: () => true,
  disabled: false,
};

export default DatePickerFormGroup;
