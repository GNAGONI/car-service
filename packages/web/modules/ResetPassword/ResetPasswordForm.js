import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Button, ButtonGroup, Col, Form } from 'react-bootstrap';

import { resetPasswordSchema, resetPasswordValues } from '@car-service/common/user';
import PasswordInputGroup from 'components/form/PasswordInputGroup';
import { resetPasswordRequest } from '@car-service/redux/actions';

function ResetPasswordForm({ resetToken }) {
  const dispatch = useDispatch();

  const resetPassword = (values, formikBag) => {
    const data = Object.assign({}, { resetToken }, values);

    dispatch(resetPasswordRequest(data, formikBag, true));
  };

  return (
    <Formik
      initialValues={resetPasswordValues}
      validationSchema={resetPasswordSchema}
      onSubmit={resetPassword}
      render={({ isValid, isSubmitting, touched, values, errors, handleChange, handleBlur, handleSubmit }) => (
        <Form className="pl-2 pr-2" noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <PasswordInputGroup
                rounded
                value={values.newPassword}
                name="newPassword"
                placeholder="New password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={touched.newPassword && errors.newPassword}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <PasswordInputGroup
                rounded
                value={values.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm new password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={touched.confirmPassword && errors.confirmPassword}
              />
            </Form.Group>
          </Form.Row>
          <ButtonGroup className="flex-column text-center btn-block mt-1">
            <Button
              disabled={!isValid || isSubmitting}
              variant="primary"
              type="submit"
              className="pl-5 pr-5 form-submit-button btn-lg"
            >
              <strong>Continue</strong>
            </Button>
          </ButtonGroup>
        </Form>
      )}
    />
  );
}

ResetPasswordForm.propTypes = {
  resetToken: PropTypes.string.isRequired,
};

export default React.memo(ResetPasswordForm);
