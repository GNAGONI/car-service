import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ArrangeCollectionSection = ({ title, postcode, price, next, showCancelQuoteLink, cancelQuote }) => (
  <div className="content-area">
    <div className="quote-block">
      {title && (
        <div className="section-head">
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </div>
      )}
      <strong className="price">£{price || 0}</strong>
      <h3>
        Arrange a free collection from {postcode} <br /> and receive £{price || 0} direct to your bank
      </h3>
      <div className="btn-block">
        <Button variant="primary" size="lg" onClick={next}>
          Arrange a collection
        </Button>
      </div>
      {showCancelQuoteLink && (
        <div className="link-holder">
          <a className="link" onClick={cancelQuote} role="button" tabIndex="-1" onKeyUp={() => {}}>
            Cancel Quote
          </a>
        </div>
      )}
    </div>
  </div>
);

ArrangeCollectionSection.propTypes = {
  title: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  showCancelQuoteLink: PropTypes.bool.isRequired,
  cancelQuote: PropTypes.func.isRequired,
};

export default ArrangeCollectionSection;
