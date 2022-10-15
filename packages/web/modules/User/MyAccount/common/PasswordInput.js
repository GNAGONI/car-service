import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import { Col, Form, InputGroup } from 'react-bootstrap';

import { FormErrorField } from 'components';

const PasswordInput = ({ label, fieldName, placeholder }) => {
  const [isPasswordHidden, togglePasswordDisplay] = useState('password');

  const changePasswordDisplay = () => {
    togglePasswordDisplay(!isPasswordHidden);
  };

  return (
    <Form.Group className="pb-2" as={Col}>
      <label className="change-password-form label">{label}</label>
      <Field
        name={fieldName}
        render={({ field, form: { touched, errors } }) => (
          <>
            <InputGroup
              className={
                touched[field.name] && errors[field.name]
                  ? 'change-password-form__input__group js-password error'
                  : 'change-password-form__input__group js-password'
              }
            >
              <div
                role="presentation"
                onClick={changePasswordDisplay}
                className="change-password-form__input-field__right-component"
              >
                <p className="change-password-form__input-field__right-component__text">
                  {isPasswordHidden ? 'Show' : 'Hide'} password?
                </p>
              </div>
              <Form.Control
                className="change-password-form__input"
                type={isPasswordHidden ? 'password' : 'text'}
                placeholder={placeholder}
                {...field}
              />
              <ErrorMessage component={FormErrorField} name={fieldName} />
            </InputGroup>
          </>
        )}
      />
    </Form.Group>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default PasswordInput;
