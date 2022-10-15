import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxFormGroup from 'components/form/CheckBoxFormGroup';
import LabelFormGroup from 'components/form/LabelFormGroup';
import ErrorAlert from '../errorAlert';

const CheckBoxSwitchFormGroup = ({ setFieldValue, label, name, value, error }) => {
  /**
   * Handle checkbox change
   */
  const handleCheckboxChange = checkboxValue => {
    setFieldValue(name, checkboxValue);
  };
  return (
    <div className="form-group col-12 col-md-6">
      <LabelFormGroup label={label} />
      <ul className="controls-list">
        <li>
          <CheckBoxFormGroup
            checked={value}
            id={`${name}-1`}
            name={name}
            label="Yes"
            checkboxValue
            handleChange={handleCheckboxChange}
          />
        </li>
        <li>
          <CheckBoxFormGroup
            checked={!value && typeof value === 'boolean'}
            id={`${name}-0`}
            name={name}
            label="No"
            checkboxValue={false}
            handleChange={handleCheckboxChange}
          />
        </li>
      </ul>
      {error && <ErrorAlert message={error} />}
    </div>
  );
};

CheckBoxSwitchFormGroup.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  error: PropTypes.string,
};

CheckBoxSwitchFormGroup.defaultProps = {
  label: '',
  error: '',
};

export default CheckBoxSwitchFormGroup;
