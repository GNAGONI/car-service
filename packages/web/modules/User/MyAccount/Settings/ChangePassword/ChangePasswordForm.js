import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form as FormikForm } from 'formik';
import { Button, ButtonGroup, Form } from 'react-bootstrap';

import { PasswordInput } from 'modules/User/MyAccount/common';
import { changePasswordSchema, initialValues } from '@car-service/common/formsData';
import { changePasswordRequest } from '@car-service/redux/actions';
import { modalOpen } from '@car-service/redux/actions/modal';
import { MODAL_TYPE } from 'containers/rootModalContainer';

function ChangePasswordForm() {
  const dispatch = useDispatch();

  const changePassword = (data, formikBag) => dispatch(changePasswordRequest(data, formikBag));
  const showForgotPasswordModal = () => dispatch(modalOpen({ modalType: MODAL_TYPE.forgotPassword }));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={changePasswordSchema}
      onSubmit={changePassword}
      render={({ isValid, isSubmitting }) => (
        <FormikForm>
          <Form.Row className="mb-5">
            <PasswordInput label="Old password" fieldName="oldPassword" placeholder="Password" />
            <div className="change-password-form__link">
              <span
                role="button"
                tabIndex="0"
                onKeyUp={() => {}}
                onClick={showForgotPasswordModal}
                className="register__link"
              >
                Forgot your password?
              </span>
            </div>
          </Form.Row>
          <div className="change-password-form__box-line">
            <Form.Row className="pt-5">
              <PasswordInput label="New password" fieldName="newPassword" placeholder="Enter new password" />
            </Form.Row>
            <Form.Row className="mt-3">
              <PasswordInput
                label="Re-enter new password"
                fieldName="confirmPassword"
                placeholder="Re-enter new password"
              />
            </Form.Row>
          </div>
          <ButtonGroup className="flex-column text-center btn-block mt-3">
            <Button disabled={!isValid || isSubmitting} variant="primary" type="submit" className="pl-6 pr-6 btn-lg">
              <strong>Change password</strong>
            </Button>
          </ButtonGroup>
        </FormikForm>
      )}
    />
  );
}

export default React.memo(ChangePasswordForm);
