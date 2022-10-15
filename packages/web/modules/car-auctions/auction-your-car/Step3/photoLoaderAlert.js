import React from 'react';
import PropTypes from 'prop-types';
import { iconTips } from 'static/images/icons';

const PhotoLoaderAlert = ({ photoLoaderAlertTitle, photoLoaderAlertSubtitle }) => (
  <div className="alert alert-info bg-dark text-default text-left">
    <div className="icon-holder">
      <img width="72" height="72" alt="Top tips" src={iconTips} />
    </div>
    <div className="text-box">
      <h2>{photoLoaderAlertTitle} </h2>
      <p>{photoLoaderAlertSubtitle}</p>
    </div>
  </div>
);

PhotoLoaderAlert.propTypes = {
  photoLoaderAlertTitle: PropTypes.string,
  photoLoaderAlertSubtitle: PropTypes.string,
};

PhotoLoaderAlert.defaultProps = {
  photoLoaderAlertTitle: '',
  photoLoaderAlertSubtitle: '',
};

export default PhotoLoaderAlert;
