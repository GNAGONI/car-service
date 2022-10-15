import React from 'react';
import PropTypes from 'prop-types';
import ErrorAlert from 'components/errorAlert';
import SelectionListItemFormGroup from './SelectionListItemFormGroup';

const SelectionListFormGroup = ({ label, name, values, setFieldValue, options, error }) => (
  <div className="form-row">
    <div className="form-group col-12">
      <strong className="label">{label}</strong>
      <ul className="selection-list">
        {options.map(item => (
          <SelectionListItemFormGroup
            key={`${name}-${item}`}
            checked={values === item}
            name={name}
            setFieldValue={setFieldValue}
            item={item}
          />
        ))}
      </ul>
      {error && <ErrorAlert message={error} />}
    </div>
  </div>
);

SelectionListFormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  values: PropTypes.any.isRequired,
  options: PropTypes.array.isRequired,
  error: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
};

SelectionListFormGroup.defaultProps = {
  error: '',
};
export default SelectionListFormGroup;
