import React from 'react';
import { useDispatch } from 'react-redux';
import { Col, Form, ButtonGroup, Button } from 'react-bootstrap';
import { Formik } from 'formik';

import { userSignupRequest } from '@car-service/redux/actions/user';
import { signUpSchema, signUpInitialValues } from '@car-service/common/user';

import InputFormGroup from 'components/form/InputFormGroup';
import PasswordInputGroup from 'components/form/PasswordInputGroup';
import FormCheckbox from 'components/form/FormCheckbox';
import TermsAndPolicy from 'components/terms/TermsAndPolicy';

const SignInForm = () => {
  const dispatch = useDispatch();
  const signUp = (data, formikBag) => dispatch(userSignupRequest(data, formikBag, true));

  return (
    <Formik
      initialValues={signUpInitialValues}
      validationSchema={signUpSchema}
      onSubmit={signUp}
      render={({ handleSubmit, handleChange, handleBlur, values, touched, isValid, isSubmitting, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row className="mt-3">
            <Form.Group as={Col}>
              <InputFormGroup
                id="firstName"
                rounded
                validationMarks
                value={values.firstName}
                name="firstName"
                placeholder="First name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                valid={touched.firstName && !errors.firstName}
                error={touched.firstName && errors.firstName}
                autoComplete="off"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Group as={Col}>
              <InputFormGroup
                id="lastName"
                rounded
                validationMarks
                value={values.lastName}
                name="lastName"
                placeholder="Last name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                valid={touched.lastName && !errors.lastName}
                error={touched.lastName && errors.lastName}
                autoComplete="off"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Group as={Col}>
              <InputFormGroup
                id="email"
                rounded
                validationMarks
                value={values.email}
                name="email"
                placeholder="Email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                valid={touched.email && !errors.email}
                error={touched.email && errors.email}
                autoComplete="off"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Group as={Col}>
              <PasswordInputGroup
                id="password"
                rounded
                validationMarks
                value={values.password}
                name="password"
                placeholder="Password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={touched.password && errors.password}
                autoComplete="new-password"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Group as={Col}>
              <FormCheckbox checked={values.terms} name="terms" handleChange={handleChange} id="process100">
                <TermsAndPolicy />
              </FormCheckbox>
            </Form.Group>
          </Form.Row>
          <ButtonGroup className="flex-column text-center">
            <Button disabled={!isValid || isSubmitting} variant="primary" size="lg" className="mt-3" type="sumbit">
              Sign up
            </Button>
          </ButtonGroup>
        </Form>
      )}
    />
  );
};

export default SignInForm;
