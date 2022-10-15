import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';

import { deleteAccountRequest } from '@car-service/redux/actions';
import { modalClose } from '@car-service/redux/actions/modal';
import { EditProfilePopup } from './components';

const DeleteAccountPopup = () => {
  const dispatch = useDispatch();

  const deleteAccount = () => dispatch(deleteAccountRequest({ redirect: true }));

  const closeModal = () => dispatch(modalClose());

  return (
    <EditProfilePopup
      title="Are you sure you want to delete your account?"
      description="If you choose to delete your account it will be permanent and can not be recovered"
    >
      <div className="delete-account-form">
        <h2 className="delete-form__title">
          <strong>Please note: </strong>
          {`If you delete your account, you won't be able to reactivate it later.`}
        </h2>
        <ButtonGroup className="edit-confirmation-popup__buttons">
          <Button onClick={closeModal} className="edit-confirmation-popup__button__primary" type="submit">
            Cancel
          </Button>
          <Button onClick={deleteAccount} className="edit-confirmation-popup__button__secondary">
            Delete account
          </Button>
        </ButtonGroup>
      </div>
    </EditProfilePopup>
  );
};

export default DeleteAccountPopup;
