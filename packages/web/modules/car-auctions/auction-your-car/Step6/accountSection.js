import React from 'react';
import PropTypes from 'prop-types';

import FormGroupWrapper from 'components/form/FormGroupWrapper';
import InputFormGroup from 'components/form/InputFormGroup';
import StepHeader from 'components/PageHeader';

const headerText =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euis mod tincidunt ut laoreet dolorea am erat volutpat. Ut wisi enim ad minim veniam,';
const headerTitle = 'Create an account';

const AccountSection = ({ setFieldValue, setFieldTouched, values, errors, touched, handleBlur, handleChange }) => (
  <>
    <StepHeader headerText={headerText} headerTitle={headerTitle} />
    <FormGroupWrapper
      toolTipTitle="Password for account creation"
      toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
      id="password"
    >
      <InputFormGroup
        placeholder="Password"
        type="password"
        name="password"
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
        currentOption={values.password}
        error={touched.password && errors.password}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
    </FormGroupWrapper>
  </>
);

AccountSection.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AccountSection;
