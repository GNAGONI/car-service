import React from 'react';
import PropTypes from 'prop-types';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupWrapper from 'components/form/FormGroupWrapper';

const enterEmailMessage = `Please enter your email address to continue with your existing quote <strong class="text">We need you to enter your email for data protection purposes so we can access your quote and personal details.</strong>`;

const DetailsForm = ({ handleChange, handleBlur, values, errors, touched, emailDisabled, phoneNumberDisabled }) => (
  <div className="form-box">
    <div className="form-block">
      <FormGroupWrapper id="email">
        <InputFormGroup
          id="email"
          value={values.email}
          name="email"
          placeholder="Email me (required)"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.email && errors.email}
          disabled={values.email && emailDisabled}
        />
      </FormGroupWrapper>
    </div>
    <div className="form-block">
      <InputFormGroup
        id="phoneNumber"
        value={values.phoneNumber}
        name="phoneNumber"
        placeholder="SMS me (required)"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={touched.phoneNumber && errors.phoneNumber}
        disabled={values.phoneNumber && phoneNumberDisabled}
      />
    </div>
  </div>
);

DetailsForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  emailDisabled: PropTypes.bool.isRequired,
  phoneNumberDisabled: PropTypes.bool.isRequired,
};

export default DetailsForm;
