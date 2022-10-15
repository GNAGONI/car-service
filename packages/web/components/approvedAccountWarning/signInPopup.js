import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignInForm from 'modules/User/SignIn/SignInForm';
import { createStructuredSelector } from 'reselect';
import { isUserAuthenticatedSelector } from '@car-service/redux/selectors/userAuth';
import { modalClose } from '@car-service/redux/actions/modal';

const SignInPopup = ({ textContent, isUserAuthenticated, closeModal }) => {
  if (isUserAuthenticated) {
    closeModal();
  }

  return (
    <div className="tab" id="tab-signin">
      <div className="content-frame">
        <p>{textContent}</p>
        <form className="form-login form-bordered form-large b-validation">
          <h2 className="text-small">Log in with your email</h2>
          <SignInForm isForgotPasswordShown={false} isRedirect={false} isModalShouldBeClosed />
        </form>
      </div>
    </div>
  );
};

SignInPopup.propTypes = {
  textContent: PropTypes.string,
  isUserAuthenticated: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

SignInPopup.defaultProps = {
  textContent: '',
};

const mapStateToProps = createStructuredSelector({
  isUserAuthenticated: isUserAuthenticatedSelector,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(modalClose()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInPopup);
