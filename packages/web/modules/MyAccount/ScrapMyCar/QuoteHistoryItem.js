import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Image from 'components/common/image';
import CarDescription from './CarDescription';

const QuoteHistoryItem = ({
  onDeleteQuote,
  onContinueQuote,
  index,
  quote: {
    vehicleYear,
    manufacturerName,
    rangeName,
    modelName,
    registrationNumber,
    postcode,
    quoteDate,
    isExpired,
    cost,
    image,
  },
}) => (
  <div className="scrap-item">
    <div className="scrap-item-image-section">
      <Image src={image} />
    </div>
    <div className="d-flex flex-column justify-content-between car-description">
      <CarDescription
        name={`${vehicleYear} ${manufacturerName} ${rangeName} ${modelName}`}
        registrationNumber={registrationNumber}
        postcode={postcode}
        quoteDate={quoteDate}
      />
      <div>
        <span
          role="button"
          tabIndex="-1"
          className="register__link"
          onClick={() => onDeleteQuote(index)}
          onKeyUp={() => {}}
        >
          Delete quote
        </span>
      </div>
    </div>
    <div
      className="d-flex justify-content-center flex-column quote-status"
      dangerouslySetInnerHTML={{
        __html: isExpired ? 'Your quote has expired' : `Your quote&nbsp;<b>£${cost || 0}</b>`,
      }}
    />
    <div className="d-flex justify-content-center flex-column">
      <Button variant="success" onClick={() => onContinueQuote(index)}>
        {isExpired ? 'Refresh prices' : 'Proceed with quote'}
      </Button>
    </div>
  </div>
);

QuoteHistoryItem.propTypes = {
  quote: PropTypes.object.isRequired,
  onDeleteQuote: PropTypes.func.isRequired,
  onContinueQuote: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default QuoteHistoryItem;
