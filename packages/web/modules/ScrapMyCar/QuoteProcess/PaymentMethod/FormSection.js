import React from 'react';
import PropTypes from 'prop-types';

import SelectFormGroup from 'components/form/SelectFormGroup';
import InputFormGroup from 'components/form/InputFormGroup';

const paymentMethodOptions = [{ value: 'bank', label: 'Bank Transfer' }];

const FormSection = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue,
  setFieldTouched,
  disabled,
}) => (
  <div className="form-block">
    <div className="form-row">
      <div className="col-12 form-group">
        <SelectFormGroup
          options={paymentMethodOptions}
          name="payment"
          placeholder="Select payment method"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          currentOption={values.payment}
          error={touched?.payment && errors?.payment}
          isDisabled={disabled}
        />
      </div>
      <div className="col-12 form-group">
        <InputFormGroup
          id="fullName"
          value={values?.fullName}
          name="fullName"
          placeholder="Full name"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched?.fullName && errors?.fullName}
          disabled={disabled}
        />
      </div>
      <div className="col-12 form-group">
        <InputFormGroup
          id="bankSortCode"
          value={values?.bankSortCode}
          name="bankSortCode"
          placeholder="Bank sort code (e.g. 11-22-33)"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched?.bankSortCode && errors?.bankSortCode}
          disabled={disabled}
          mask="99-99-99"
          maskChar="_"
        />
      </div>
      <div className="col-12 form-group">
        <InputFormGroup
          id="bankAccountNumber"
          value={values?.bankAccountNumber}
          name="bankAccountNumber"
          placeholder="Bank account number (e.g. 12345678)"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched?.bankAccountNumber && errors?.bankAccountNumber}
          disabled={disabled}
        />
      </div>
    </div>
  </div>
);

FormSection.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

FormSection.propTypes = {
  disabled: false,
};

export default FormSection;
