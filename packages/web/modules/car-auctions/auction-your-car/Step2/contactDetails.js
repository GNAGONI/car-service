import React from 'react';
import PropTypes from 'prop-types';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupWrapper from 'components/form/FormGroupWrapper';
import StepHeader from 'components/PageHeader';

const ContactDetails = ({ handleChange, handleBlur, values, errors, touched }) => (
  <div className="form-box">
    <StepHeader
      headerTitle="Your contact details"
      headerText="We do not gibe any personal details such as your mobile or email to any potential buyers as your details are protected and secure."
      isSubHeader
    />
    <div className="form-block">
      <FormGroupWrapper
        label="Email"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="contactEmail"
      >
        <InputFormGroup
          id="contactEmail"
          value={values.contactEmail}
          name="contactEmail"
          placeholder="Email"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.contactEmail && errors.contactEmail}
        />
      </FormGroupWrapper>
    </div>
    <div className="form-block">
      <FormGroupWrapper
        label="Telephone or mobile number"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="phoneNumber"
      >
        <InputFormGroup
          id="phoneNumber"
          value={values.phoneNumber}
          name="phoneNumber"
          placeholder="07876788788"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.phoneNumber && errors.phoneNumber}
        />
      </FormGroupWrapper>
    </div>
  </div>
);

ContactDetails.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default ContactDetails;
