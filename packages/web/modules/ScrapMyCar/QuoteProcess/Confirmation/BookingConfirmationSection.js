import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Col } from 'react-bootstrap';
import { Router } from 'server/pages';
import { QUOTE_ROUTES } from 'modules/ScrapMyCar/QuoteProcess/constants';
import { dropQuote } from '@car-service/redux/actions/quote';

const BookingConfirmationSection = ({ title, text, quotePriceTitle, price, quotePriceText, question }) => {
  const dispatch = useDispatch();

  const goToAccount = () => {
    dispatch(dropQuote());
    Router.pushRoute('/my-account');
  };

  const goHome = () => {
    dispatch(dropQuote());
    Router.pushRoute(QUOTE_ROUTES.HOMEPAGE);
  };

  return (
    <Col
      md={12}
      lg={6}
      className="content-block text-center bg-before-darkest text-default justify-content-center booking-confirmation-section"
    >
      <div className="content-area">
        <div className="quote-block">
          <div className="section-head">
            {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
            {text && (
              <div className="text-box">
                <p className="section-head__description" dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            )}
          </div>
          {quotePriceTitle && <span className="title" dangerouslySetInnerHTML={{ __html: quotePriceTitle }} />}
          <strong className="price">£{price || 0}</strong>
          {quotePriceText && <h3 className="title-light" dangerouslySetInnerHTML={{ __html: quotePriceText }} />}
          <div className="site-info" />
          {question && <h3 className="title-bold" dangerouslySetInnerHTML={{ __html: question }} />}
          <div className="btn-block">
            <Button className="btn btn-primary" onClick={goToAccount}>
              Go to your account
            </Button>
            <Button className="btn btn-primary" onClick={goHome}>
              Go back home
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

BookingConfirmationSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  quotePriceTitle: PropTypes.string,
  price: PropTypes.number,
  quotePriceText: PropTypes.string,
  question: PropTypes.string,
};

BookingConfirmationSection.defaultProps = {
  title: '',
  text: '',
  quotePriceTitle: '',
  price: 0,
  quotePriceText: '',
  question: '',
};

export default BookingConfirmationSection;
