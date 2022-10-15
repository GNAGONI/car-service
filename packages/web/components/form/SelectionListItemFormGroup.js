import React from 'react';
import PropTypes from 'prop-types';
import RadioFormGroup from 'components/form/RadioFormGroup';

const SelectionListItemFormGroup = ({ item, checked, name, setFieldValue }) => {
  const handleCheckboxChange = () => {
    setFieldValue(name, item);
  };

  return (
    <li>
      <RadioFormGroup
        checked={checked}
        id={`${name}-${item}`}
        name={name}
        label={item}
        handleChange={handleCheckboxChange}
      />
    </li>
  );
};

SelectionListItemFormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default SelectionListItemFormGroup;
