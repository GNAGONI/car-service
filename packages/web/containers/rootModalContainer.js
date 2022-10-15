import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getRootModalState } from '@car-service/redux/selectors/modal';
import { modalClose } from '@car-service/redux/actions/modal';
import CarAuctionPlaceBidForm from 'containers/auction/carAuctionPlaceBidFormContainer';
import { DeleteAccountPopup, RequestPersonalDataPopup } from 'modules/User/MyAccount/Settings/EditProfile';
import ApprovedAccountWarning from '../components/approvedAccountWarning';
import ForgotPasswordPopup from '../modules/ForgotPassword/ForgotPasswordPopup';
import DeleteQuotePopup from '../modules/MyAccount/ScrapMyCar/deleteQuotePopup';

export const MODAL_TYPE = {
  placeBids: 'placeBids',
  login: 'login',
  forgotPassword: 'forgotPassword',
  deleteAccountPopup: 'deleteAccountPopup',
  requestPersonalDataPopup: 'requestPersonalDataPopup',
  deleteQuotePopup: 'deleteQuotePopup',
};

const MODAL_COMPONENTS = {
  placeBids: CarAuctionPlaceBidForm,
  login: ApprovedAccountWarning,
  forgotPassword: ForgotPasswordPopup,
  deleteAccountPopup: DeleteAccountPopup,
  requestPersonalDataPopup: RequestPersonalDataPopup,
  deleteQuotePopup: DeleteQuotePopup,
};

const exceptions = [MODAL_TYPE.deleteAccountPopup, MODAL_TYPE.requestPersonalDataPopup];

const RootModal = ({ rootModalProps: { modalType, isModalOpen }, closeModal }) => {
  const ModalComponent = MODAL_COMPONENTS[modalType];

  return ModalComponent ? (
    <div className="root-modal">
      <Modal className={`modal-${exceptions.includes(modalType) ? 'edit-' : ''}component`} show={isModalOpen}>
        <button type="button" className="fancybox-close-small" title="Close" onClick={closeModal} />

        <Modal.Body>
          <ModalComponent />
        </Modal.Body>
      </Modal>
    </div>
  ) : null;
};

RootModal.propTypes = {
  rootModalProps: PropTypes.shape({
    modalType: PropTypes.string,
    isModalOpen: PropTypes.bool,
  }),
  closeModal: PropTypes.func,
};

RootModal.defaultProps = {
  rootModalProps: {},
  closeModal: () => {},
};

const mapStateToProps = createStructuredSelector({
  rootModalProps: getRootModalState(),
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(modalClose()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootModal);
