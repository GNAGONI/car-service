import React from 'react';
import InputFormGroup from 'components/form/InputFormGroup';
import PropTypes from 'prop-types';

const ManuallyEnteredAddress = ({ handleChange, handleBlur, values, errors, touched, disabled }) => (
  <>
    <div className="form-block">
      <InputFormGroup
        id="address1"
        value={values.address1}
        name="address1"
        placeholder="Address 1"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={touched.address1 && errors.address1}
        disabled={disabled}
      />
    </div>
    <div className="form-block">
      <InputFormGroup
        id="address2"
        value={values.address2}
        name="address2"
        placeholder="Address 2"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={touched.address2 && errors.address2}
        disabled={disabled}
      />
    </div>
    <div className="form-block">
      <InputFormGroup
        id="town"
        value={values.town}
        name="town"
        placeholder="City/Town"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={touched.town && errors.town}
        disabled={disabled}
      />
    </div>

    <div className="form-block">
      <InputFormGroup
        id="county"
        value={values.county}
        name="county"
        placeholder="County"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={touched.county && errors.county}
        disabled={disabled}
      />
    </div>
  </>
);

ManuallyEnteredAddress.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};

ManuallyEnteredAddress.defaultProps = {
  disabled: false,
};

export default ManuallyEnteredAddress;
