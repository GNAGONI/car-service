import React from 'react';
import PropTypes from 'prop-types';
import FormGroupHead from 'components/form/FormGroupHead';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupWrapper from 'components/form/FormGroupWrapper';
import SelectionListFormGroup from 'components/form/SelectionListFormGroup';
import LabelFormGroup from 'components/form/LabelFormGroup';
import CheckBoxSwitchFormGroup from 'components/form/CheckBoxSwitchFormFroup';
import TextAreaFormGroup from 'components/form/TextAreaFormGroup';

const selectionListOptions = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

const checkBoxData = [
  { name: 'hasKeys', label: 'Does the vehicle have keys?' },
  { name: 'isValidV5CLogbook', label: 'Do you have a valid V5C Logbook?' },
  { name: 'isVehicleStart', label: 'Does the vehicle start?' },
  { name: 'hasValidMOT', label: 'Do you have a valid MOT?' },
];

const DetailsInfoForm = ({ handleChange, handleBlur, values, errors, touched, setFieldValue }) => (
  <>
    <FormGroupHead title="Tell us more about your vehicle" />
    <div className="form-row">
      {checkBoxData.map(({ name, label }) => (
        <CheckBoxSwitchFormGroup
          name={name}
          value={values[name]}
          label={label}
          setFieldValue={setFieldValue}
          error={touched[name] && errors[name]}
        />
      ))}
    </div>
    <div className="form-block">
      <FormGroupWrapper
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="mileage"
      >
        <InputFormGroup
          id="mileage"
          value={values.mileage}
          name="mileage"
          placeholder="Mileage"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.mileage && errors.mileage}
        />
      </FormGroupWrapper>
    </div>
    <div className="form-row">
      <CheckBoxSwitchFormGroup
        name="hasMechanicalIssues"
        value={values.hasMechanicalIssues}
        label="Any mechanical issues?"
        setFieldValue={setFieldValue}
        error={touched.hasMechanicalIssues && errors.hasMechanicalIssues}
      />
      <div className="form-group col-12 col-md-6">
        <LabelFormGroup label="If yes, please describe in detail of all mechanical issues on your car" />
        <TextAreaFormGroup
          id="mechanicalIssuesDescription"
          value={values.mechanicalIssuesDescription}
          name="mechanicalIssuesDescription"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.mechanicalIssuesDescription && errors.mechanicalIssuesDescription}
        />
      </div>
    </div>
    <SelectionListFormGroup
      label="Bodywork condition"
      name="bodyCondition"
      setFieldValue={setFieldValue}
      values={values.bodyCondition}
      options={selectionListOptions}
      error={touched.bodyCondition && errors.bodyCondition}
    />
    <SelectionListFormGroup
      label="Interior condition"
      name="interiorCondition"
      setFieldValue={setFieldValue}
      values={values.interiorCondition}
      options={selectionListOptions}
      error={touched.interiorCondition && errors.interiorCondition}
    />
    <div className="form-row">
      <CheckBoxSwitchFormGroup
        name="hasFinanceRemaining"
        value={values.hasFinanceRemaining}
        label="Any finance remaining on your car?"
        setFieldValue={setFieldValue}
        error={touched.hasFinanceRemaining && errors.hasFinanceRemaining}
      />
    </div>
  </>
);

DetailsInfoForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default DetailsInfoForm;
