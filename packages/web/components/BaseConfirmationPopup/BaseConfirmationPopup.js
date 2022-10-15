import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';

import { modalClose } from '@car-service/redux/actions/modal';

const BaseConfirmationPopup = ({ title, description, confirmTitle, rejectTitle, confirmAction }) => {
  const dispatch = useDispatch();

  const closeModal = () => dispatch(modalClose());

  return (
    <>
      <header className="base-confirmation-popup__header-block">
        {title && <h2 className="base-confirmation-popup__title" dangerouslySetInnerHTML={{ __html: title }} />}
        {description && (
          <div className="base-confirmation-popup__description" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </header>
      <div className="base-confirmation-popup__diving-line" />
      <ButtonGroup className="base-confirmation-popup__buttons">
        <Button onClick={confirmAction} className="base-confirmation-popup__button__primary" type="submit">
          {confirmTitle}
        </Button>
        <Button onClick={closeModal} className="base-confirmation-popup__button__secondary">
          {rejectTitle}
        </Button>
      </ButtonGroup>
    </>
  );
};

BaseConfirmationPopup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  confirmTitle: PropTypes.string,
  rejectTitle: PropTypes.string,
  confirmAction: PropTypes.func.isRequired,
};

BaseConfirmationPopup.defaultProps = {
  title: '',
  description: '',
  confirmTitle: 'Yes',
  rejectTitle: 'No',
};

export default BaseConfirmationPopup;
