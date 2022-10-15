import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

import client from '@car-service/api-client';

import { postRise } from 'static/images';

import ErrorAlert from 'components/errorAlert';

const FeaturedPopup = ({
  popupTitle,
  popupText,
  featurePrice,
  isFeaturedPopupOpened,
  handleFeaturedPopupClose,
  values,
  sharedValues: { auctionId, token: temporaryToken },
  next,
}) => {
  const [errorMessage, changeErrorMessage] = useState('');

  const addFeature = async () => {
    const { packageId } = values;
    const data = {
      temporaryToken,
      packageId,
      extraFeatureType: 1,
    };

    try {
      await client.longAuctions.selectPackage(auctionId, data);
      next(values);
    } catch (e) {
      changeErrorMessage(e?.error?.messages && Object.values(e.error.messages));
    }
  };

  const continueWithout = async () => {
    const { packageId } = values;
    const data = {
      temporaryToken,
      packageId,
    };

    try {
      await client.longAuctions.selectPackage(auctionId, data);
      next(values);
    } catch (e) {
      changeErrorMessage(e?.error?.messages && Object.values(e.error.messages));
    }
  };

  return (
    <>
      <Modal show={isFeaturedPopupOpened} onHide={handleFeaturedPopupClose}>
        <Modal.Header closeButton>
          <header className="section-head text-center">
            <h2>{popupTitle}</h2>
            <div className="text-box">
              <p>{popupText}</p>
            </div>
          </header>
        </Modal.Header>
        <Modal.Body>
          <div className="img-area has-shadow">
            <span className="arrow" />
            <span className="arrow right" />
            <picture>
              <img src={postRise} alt="Post Rise" width="508" height="450" />
            </picture>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={continueWithout}>Continue without</Button>
          <Button onClick={addFeature}>{`Add for £${featurePrice}`}</Button>
          {errorMessage && <ErrorAlert message={errorMessage} />}
        </Modal.Footer>
      </Modal>
    </>
  );
};

FeaturedPopup.propTypes = {
  popupTitle: PropTypes.string,
  popupText: PropTypes.string,
  featurePrice: PropTypes.number,
  handleFeaturedPopupClose: PropTypes.func.isRequired,
  isFeaturedPopupOpened: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
  sharedValues: PropTypes.object,
  next: PropTypes.func,
};

FeaturedPopup.defaultProps = {
  popupTitle: '',
  popupText: '',
  featurePrice: 0,
};

export default FeaturedPopup;
