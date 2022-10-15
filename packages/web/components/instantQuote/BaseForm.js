import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import { iconGB } from 'static/images/icons';
import ErrorIndificator from 'components/errorIndificator';
import {
  instantQuoteValidationSchema,
  instantQuoteInitialValues,
} from '@car-service/common/formsData/scarMyCarQuoteProcess';

import { createQuoteRequest } from '@car-service/redux/actions/quote';
import { isPostCodeValid } from 'lib/forms';
import PostcodeAutocomplete from '../PostcodeAutocomplete';
import CustomBaseInputField from '../form/CustomBaseInputField';

const BaseForm = ({ formType, hasCarRegistrationInputImage, buttonText }) => {
  const dispatch = useDispatch();

  const handleSubmitButton = async (values, { setErrors, setSubmitting }) => {
    const { registrationNumber, postcode } = values;
    dispatch(createQuoteRequest({ registrationNumber, postcode, actions: { setErrors, setSubmitting } }));
  };

  const validate = async values => {
    if (values.postcode.length > 4) {
      const errors = {};
      try {
        const isValid = await isPostCodeValid(values.postcode);
        if (!isValid) {
          errors.postcode = 'The postcode entered is incorrect';
        }
      } catch (e) {
        console.log(e);
      } finally {
        if (Object.keys(errors).length) {
          throw errors;
        }
      }
    }
  };

  return (
    <Formik
      enableReinitialize={false}
      initialValues={instantQuoteInitialValues}
      validationSchema={instantQuoteValidationSchema}
      validate={validate}
      onSubmit={handleSubmitButton}
      render={({ values, errors, touched, setFieldValue, setFieldTouched, isSubmitting }) => (
        <Form
          className={cn({
            'form-line-wrapper': formType === 'line',
            'form-area': formType === 'inline',
            'form-calculator': formType === 'calculator',
          })}
        >
          <div
            className={cn({
              'form-line': formType === 'line',
              'form-inline': formType === 'inline',
              'form-table': formType === 'table',
            })}
          >
            <div
              className={cn({
                'form-input--line': formType === 'line',
                'form-input--inline': formType === 'inline',
                'form-input--table': formType === 'table',
                'text-left': formType === 'inline' || formType === 'line',
              })}
            >
              <div className="form-group">
                <div
                  className={cn('input-group long-input', {
                    'has-error': touched?.registrationNumber && errors?.registrationNumber,
                  })}
                >
                  {hasCarRegistrationInputImage && (
                    <div className="ico">
                      <img src={iconGB} alt="GB" width="28" height="45" />
                    </div>
                  )}
                  <Field
                    type="text"
                    name="registrationNumber"
                    placeholder="Car reg"
                    customChangeType={{ type: 'uppercase' }}
                    component={CustomBaseInputField}
                  />
                  {touched?.registrationNumber && errors?.registrationNumber && (
                    <ErrorIndificator message={errors?.registrationNumber} />
                  )}
                </div>
              </div>
              <div className="form-group">
                <PostcodeAutocomplete
                  id="postcode"
                  isUppercaseValue
                  isUppercaseText
                  value={values?.postcode}
                  name="postcode"
                  placeholder="Postcode"
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  error={touched?.postcode && errors?.postcode}
                  classNames="long-input"
                />
              </div>
            </div>
            <div className="btn-block">
              <Button disabled={isSubmitting} type="submit" className="btn btn-primary">
                {buttonText}
              </Button>
            </div>
          </div>
        </Form>
      )}
    />
  );
};

BaseForm.propTypes = {
  hasCarRegistrationInputImage: PropTypes.bool,
  formType: PropTypes.string,
  buttonText: PropTypes.string,
};

BaseForm.defaultProps = {
  hasCarRegistrationInputImage: false,
  formType: '',
  buttonText: '',
};

export default BaseForm;
