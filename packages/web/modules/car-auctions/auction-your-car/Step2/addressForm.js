import React from 'react';
import PropTypes from 'prop-types';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupWrapper from 'components/form/FormGroupWrapper';
import SelectFormGroup from 'components/form/SelectFormGroup';

const AddressForm = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue,
  setFieldTouched,
  addressOptions,
}) => (
  <div>
    <div className="form-block">
      <FormGroupWrapper
        label="Full address"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                  dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
      >
        <SelectFormGroup
          options={addressOptions}
          name="fullAddress"
          placeholder="Select"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          stylesTheme="longAuction"
          currentOption={values.fullAddress}
          error={touched.fullAddress && errors.fullAddress}
        />
      </FormGroupWrapper>
    </div>
    <div className="form-block">
      <FormGroupWrapper
        label="Address line 1"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="addressLine1"
      >
        <InputFormGroup
          id="addressLine1"
          value={values.addressLine1}
          name="addressLine1"
          placeholder="327 Dunkirk lane"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.addressLine1 && errors.addressLine1}
        />
      </FormGroupWrapper>
    </div>
    <div className="form-block">
      <FormGroupWrapper
        label="Address line 2"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="addressLine2"
      >
        <InputFormGroup
          id="addressLine2"
          value={values.addressLine2}
          name="addressLine2"
          placeholder="327 Dunkirk lane"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.addressLine2 && errors.addressLine2}
        />
      </FormGroupWrapper>
    </div>
    <div className="form-block">
      <FormGroupWrapper
        label="Town / City"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="townCity"
      >
        <InputFormGroup
          id="townCity"
          value={values.townCity}
          name="townCity"
          placeholder="327 Dunkirk lane"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.townCity && errors.townCity}
        />
      </FormGroupWrapper>
    </div>
    <div className="form-block">
      <FormGroupWrapper
        label="County"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="county"
      >
        <InputFormGroup
          id="county"
          value={values.county}
          name="county"
          placeholder="327 Dunkirk lane"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.county && errors.county}
        />
      </FormGroupWrapper>
    </div>
  </div>
);

AddressForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  addressOptions: PropTypes.array.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default AddressForm;
