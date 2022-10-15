import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideMessage as hideMessageAction } from '@car-service/redux/actions/message';

const MessagePanel = ({ image, title, subTitle, hideMessage }) => {
  useEffect(() => () => {
    hideMessage();
  });

  return (
    <div role="alert" className="alert alert-lg text-left bg-before-primary">
      <div className="row flex-row justify-content-center align-items-center">
        <div className="col-12 col-lg-10 col-xl-9 alert-holder">
          <div className="icon-holder">
            <img width="75" height="82" alt="icon" src={image} />
          </div>
          <div className="text-holder">
            <h2>{title}</h2>
            <div className="text">
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MessagePanel.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  hideMessage: PropTypes.func.isRequired,
};

MessagePanel.defaultProps = {
  subTitle: '',
};

const mapDispatchToProps = dispatch => ({
  hideMessage: () => dispatch(hideMessageAction()),
});

export default connect(
  null,
  mapDispatchToProps,
)(MessagePanel);
