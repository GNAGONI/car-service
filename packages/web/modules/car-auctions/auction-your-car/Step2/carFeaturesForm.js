import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StepHeader from 'components/PageHeader';
import ErrorAlert from 'components/errorAlert';
import CheckBoxItemFormGroup from 'components/form/CheckBoxItemFormGroup';
import { ALL, NONE } from 'constants/messages';
const selectTitles = { ALL: 'Select All', NONE: 'Deselect all' };

const CarFeaturesForm = ({ values, features, setFieldValue, touched, errors }) => {
  const [selectOption, setSelectOption] = useState(ALL);

  /**
   * Handle select button click
   */
  const handleSelect = () => {
    setFieldValue('carFeatures', selectOption === ALL ? features.map(value => value.id) : []);
    setSelectOption(selectOption === ALL ? NONE : ALL);
  };

  useEffect(() => {
    if (values?.carFeatures?.length && features?.length && values?.carFeatures?.length === features?.length) {
      setSelectOption(NONE);
    } else {
      setSelectOption(ALL);
    }
  }, [values.carFeatures]);

  return (
    <div className="form-box">
      <StepHeader
        headerTitle="Select your cars features"
        headerText="Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet dolorea am erat ipsum dolor sit amet, consectetuer adipiscing elitd iam."
        isSubHeader
      />
      <div className="btn-block text-center">
        <button className="btn-select-all btn btn-primary" type="button" onClick={handleSelect}>
          {selectTitles[selectOption]}
        </button>
      </div>
      <ul className="check-list">
        {features.map(feature => (
          <CheckBoxItemFormGroup
            key={feature.id}
            values={values.carFeatures}
            item={feature}
            setFieldValue={setFieldValue}
            name="carFeatures"
          />
        ))}
      </ul>
      {touched.carFeatures && errors.carFeatures && <ErrorAlert message={errors.carFeatures} />}
    </div>
  );
};

CarFeaturesForm.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  features: PropTypes.array.isRequired,
};

export default CarFeaturesForm;
