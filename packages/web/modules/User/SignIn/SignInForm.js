import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, ButtonGroup, Button } from 'react-bootstrap';
import { Formik } from 'formik';

import { userLoginRequest } from '@car-service/redux/actions/user';
import { signInSchema, signInInitialValues } from '@car-service/common/user';

import InputFormGroup from 'components/form/InputFormGroup';
import PasswordInputGroup from 'components/form/PasswordInputGroup';
import { getUserEmailSelector } from '@car-service/redux/selectors/user';

const SignInForm = ({ isForgotPasswordShown, redirect }) => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmailSelector);
  const login = (data, formikBag) => dispatch(userLoginRequest(data, formikBag, redirect));

  return (
    <Formik
      initialValues={{ ...signInInitialValues, email }}
      validationSchema={signInSchema}
      onSubmit={login}
      render={({ handleSubmit, handleChange, handleBlur, values, touched, isValid, isSubmitting, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <InputFormGroup
                rounded
                id="email"
                validationMarks
                value={values.email}
                name="email"
                placeholder="Email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                valid={touched.email && !errors.email}
                error={touched.email && errors.email}
                autoComplete="email"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <PasswordInputGroup
                rounded
                id="password"
                value={values.password}
                name="password"
                placeholder="Password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={touched.password && errors.password}
                autoComplete="current-password"
              />
            </Form.Group>
          </Form.Row>
          <ButtonGroup className="flex-column text-center">
            {isForgotPasswordShown && (
              <div>
                <Link route="/forgot-password">
                  <a className="register__link">Forgot your password?</a>
                </Link>
              </div>
            )}
            <Button disabled={!isValid || isSubmitting} variant="primary" size="lg" className="mt-3" type="sumbit">
              Login
            </Button>
          </ButtonGroup>
        </Form>
      )}
    />
  );
};

SignInForm.propTypes = {
  isForgotPasswordShown: PropTypes.bool,
  redirect: PropTypes.bool,
};

SignInForm.defaultProps = {
  isForgotPasswordShown: true,
  redirect: true,
};

export default SignInForm;
