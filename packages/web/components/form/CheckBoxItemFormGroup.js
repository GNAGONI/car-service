import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxFormGroup from 'components/form/CheckBoxFormGroup';

const CheckBoxItemFormGroup = ({ item: { id, name: label }, values, name, setFieldValue }) => {
  /**
   * Handle checkbox change
   */
  const handleCheckboxChange = () => {
    if (values.includes(id)) {
      setFieldValue(name, values.filter(value => value !== id));
    } else {
      setFieldValue(name, values.concat(id));
    }
  };

  return (
    <li>
      <CheckBoxFormGroup
        checked={values.includes(id)}
        id={label}
        name={name}
        label={label}
        handleChange={handleCheckboxChange}
      />
    </li>
  );
};

CheckBoxItemFormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default CheckBoxItemFormGroup;
