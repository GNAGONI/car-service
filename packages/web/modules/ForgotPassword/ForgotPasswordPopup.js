import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserEmailSelector } from '@car-service/redux/selectors/user';
import { forgotPasswordRequest } from '@car-service/redux/actions';
import BaseConfirmationPopup from '../../components/BaseConfirmationPopup';

const ForgotPasswordPopup = () => {
  const dispatch = useDispatch();

  const userEmail = useSelector(getUserEmailSelector);

  const forgotPassword = () => dispatch(forgotPasswordRequest(userEmail));

  return (
    <BaseConfirmationPopup
      title="Are you sure you want to reset your password?"
      description="Password reset link will be sent to your email. Click the link in the email and follow the instructions to enter a new password."
      confirmAction={forgotPassword}
    />
  );
};

export default ForgotPasswordPopup;
