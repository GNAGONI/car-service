import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Image from 'components/common/image';

import CarDescription from './CarDescription';

const ScrapCarItem = ({
  quote: { vehicleYear, manufacturerName, rangeName, modelName, registrationNumber, postcode, soldDate, cost, image },
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
        soldDate={soldDate}
      />
    </div>
    <div
      className="d-flex justify-content-center flex-column quote-status"
      dangerouslySetInnerHTML={{
        __html: `Sold for &nbsp;<b>£${cost || 0}</b>`,
      }}
    />
    <div className="d-flex justify-content-center flex-column">
      <Button variant="success" disabled onClick={() => {}}>
        Download invoice
      </Button>
    </div>
  </div>
);

ScrapCarItem.propTypes = {
  quote: PropTypes.object.isRequired,
};

export default ScrapCarItem;
