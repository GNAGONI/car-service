import React from 'react';
import PropTypes from 'prop-types';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupWrapper from 'components/form/FormGroupWrapper';

const TitleForms = ({ handleChange, handleBlur, values, errors, touched }) => (
  <div className="form-box">
    <div className="form-block">
      <FormGroupWrapper
        label="Title"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="title"
      >
        <InputFormGroup
          id="title"
          value={values.title}
          name="title"
          placeholder="Porsche 911 3.8 997 Carrera 4S PDK AWD 2dr"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.title && errors.title}
        />
      </FormGroupWrapper>
    </div>
    <div className="form-block">
      <FormGroupWrapper
        label={`Subtitle <strong class="text">Use this to grab the buyers attention</strong>`}
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="subtitle"
        formNoteTitle="Limited to 30 characters"
        formNoteValue={`${values.subtitle.length}/30`}
      >
        <InputFormGroup
          id="subtitle"
          value={values.subtitle}
          name="subtitle"
          placeholder="e.g. Full service history"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.subtitle && errors.subtitle}
        />
      </FormGroupWrapper>
    </div>
  </div>
);

TitleForms.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default TitleForms;
