import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { Router } from 'server/pages';
import { getPostcode, getQuoteStatus, getCarDetails } from '@car-service/redux/selectors/quote';
import { cancelQuote, setOnlineQuote } from '@car-service/redux/actions/quote';
import ScrapClarificationSection from 'components/ScrapClarificationSection';
import { QUOTE_STATUS, QUOTE_ROUTES } from 'modules/ScrapMyCar/QuoteProcess/constants';
import { requestedStatusCheckForData } from 'webSpecificRedux/sagas/scrapMyCarRedirectSaga';
import ArrangeCollectionSection from './ArrangeCollectionSection';
import VehicleDetailsSection from './VehicleDetailsSection';
import CustomerReviewSection from './CustomerReviewSection';
import { scrapClarification, arrangeCollection, vehicleDetails, customerReview } from './constants';

const OnlineQuotation = () => {
  const dispatch = useDispatch();

  const postcode = useSelector(getPostcode);
  const quoteStatus = useSelector(getQuoteStatus);
  const [carWeight, carType, price, registrationNumber, carImage] = useSelector(getCarDetails);

  useEffect(() => {
    const isRequestedStatusValid = requestedStatusCheckForData(quoteStatus, QUOTE_STATUS.CREATED);

    if (!(postcode && quoteStatus && carType && price && registrationNumber) && isRequestedStatusValid) {
      Router.pushRoute(QUOTE_ROUTES.HOMEPAGE);
    }
  }, []);

  const handleSubmitButton = () => {
    const quoteStatusPayload = quoteStatus === QUOTE_STATUS.CREATED ? { quoteStatus: QUOTE_STATUS.ARRANGE } : {};
    dispatch(setOnlineQuote(quoteStatusPayload));
  };

  const onCancelQuote = () => {
    dispatch(cancelQuote({}));
  };

  const showCancelQuoteLink =
    quoteStatus === QUOTE_STATUS.DRAFT || quoteStatus === QUOTE_STATUS.CREATED || quoteStatus === QUOTE_STATUS.ARRANGE;

  return (
    <div className="online-quotation">
      <section className="content section-process extend">
        <Row>
          <Col md={6} className="content-block text-center bg-before-darkest text-default justify-content-center">
            <ArrangeCollectionSection
              {...arrangeCollection}
              price={price}
              postcode={postcode}
              next={handleSubmitButton}
              showCancelQuoteLink={showCancelQuoteLink}
              cancelQuote={onCancelQuote}
            />
          </Col>
          <Col md={6} className="content-block bg-before-default">
            <div className="content-area">
              <VehicleDetailsSection
                {...vehicleDetails}
                carType={carType}
                carImage={carImage}
                registrationNumber={registrationNumber}
                carWeight={carWeight}
                postcode={postcode}
              />
              <CustomerReviewSection {...customerReview} />
            </div>
          </Col>
        </Row>
      </section>
      <section className="content section-scraping bg-before-info scrap-clarification-section">
        <ScrapClarificationSection {...scrapClarification} />
      </section>
    </div>
  );
};
OnlineQuotation.propTypes = {
  next: PropTypes.func.isRequired,
};

export default OnlineQuotation;
