import React from 'react';
import PropTypes from 'prop-types';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupHead from 'components/form/FormGroupHead';

const PersonalData = ({ handleChange, handleBlur, values, errors, touched, disabled }) => (
  <div className="form-box">
    <FormGroupHead title="Personal Contact" />
    <div className="form-block">
      <InputFormGroup
        id="firstName"
        value={values.firstName}
        name="firstName"
        placeholder="First name"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={touched.firstName && errors.firstName}
        disabled={disabled}
      />
    </div>
    <div className="form-block">
      <InputFormGroup
        id="lastName"
        value={values.lastName}
        name="lastName"
        placeholder="Last name"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={touched.lastName && errors.lastName}
        disabled={disabled}
      />
    </div>
  </div>
);

PersonalData.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};

PersonalData.defaultProps = {
  disabled: '',
};

export default PersonalData;
