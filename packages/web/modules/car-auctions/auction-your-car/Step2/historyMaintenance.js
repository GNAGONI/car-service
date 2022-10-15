import React from 'react';
import PropTypes from 'prop-types';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupWrapper from 'components/form/FormGroupWrapper';
import SelectFormGroup from 'components/form/SelectFormGroup';
import StepHeader from 'components/PageHeader';
import DatePickerFormGroup from 'components/form/DatePickerFormGroup';

export const serviceHistoryOptions = [{ value: '1', label: 'Yes' }, { value: '0', label: 'No' }];

const HistoryMaintenance = ({ handleChange, handleBlur, values, errors, touched, setFieldValue, setFieldTouched }) => (
  <>
    <StepHeader
      headerTitle="History & maintenance"
      headerText="Tell buyers about your car’s history and MOT"
      isSubHeader
    />
    <div className="form-block">
      <FormGroupWrapper
        label="Owners (include yourself)"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="owners"
      >
        <InputFormGroup
          id="owners"
          value={values.owners}
          name="owners"
          placeholder="3"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.owners && errors.owners}
        />
      </FormGroupWrapper>
    </div>
    <div className="form-block">
      <FormGroupWrapper
        label="Service History"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                  dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
      >
        <SelectFormGroup
          options={serviceHistoryOptions}
          name="serviceHistory"
          placeholder="Select"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          stylesTheme="longAuction"
          currentOption={values.serviceHistory}
          error={touched.serviceHistory && errors.serviceHistory}
        />
      </FormGroupWrapper>
    </div>
    <div className="form-block">
      <FormGroupWrapper
        label="MOT due"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                  dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
      >
        <DatePickerFormGroup
          placeholder="Select a Date"
          name="motDue"
          value={values.motDue || ''}
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          error={touched.motDue && errors.motDue}
        />
      </FormGroupWrapper>
    </div>
  </>
);

HistoryMaintenance.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default HistoryMaintenance;
