import React from 'react';
import PropTypes from 'prop-types';

const CustomBaseInputField = ({
  field: { name, value, onBlur, onChange },
  form: { setFieldValue },
  customChangeType,
  ...props
}) => {
  const onChangeHandler = e => {
    const fieldValue = e.target.value || '';

    if (customChangeType.type === 'uppercase') {
      setFieldValue(name, fieldValue.toUpperCase());
    } else {
      setFieldValue(name, fieldValue);
    }
  };

  return (
    <input
      className="form-control"
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={customChangeType ? onChangeHandler : onChange}
      {...props}
    />
  );
};

CustomBaseInputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  customChangeType: PropTypes.object,
};

export default CustomBaseInputField;
