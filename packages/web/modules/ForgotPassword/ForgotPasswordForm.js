import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Button, ButtonGroup, Col, Form } from 'react-bootstrap';

import { forgotYourPasswordSchema, forgotYourPasswordValues } from '@car-service/common/user';
import InputFormGroup from 'components/form/InputFormGroup';
import { forgotPasswordRequest } from '@car-service/redux/actions';

function ForgotPasswordForm() {
  const dispatch = useDispatch();
  const forgotPassword = (data, formikBag) => dispatch(forgotPasswordRequest(data, formikBag));

  return (
    <Formik
      initialValues={forgotYourPasswordValues}
      validationSchema={forgotYourPasswordSchema}
      onSubmit={forgotPassword}
      render={({ isValid, isSubmitting, touched, values, errors, handleChange, handleBlur, handleSubmit }) => (
        <Form className="pl-2 pr-2" noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <InputFormGroup
                rounded
                validationMarks
                value={values.email}
                name="email"
                placeholder="Email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                valid={touched.email && !errors.email}
                error={touched.email && errors.email}
              />
            </Form.Group>
          </Form.Row>
          <ButtonGroup className="flex-column text-center btn-block mt-1">
            <Button disabled={!isValid || isSubmitting} variant="primary" type="submit" className="pl-5 pr-5 btn-lg">
              <strong>Send password reset link</strong>
            </Button>
          </ButtonGroup>
        </Form>
      )}
    />
  );
}

export default React.memo(ForgotPasswordForm);
