import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import VehicleDetails from './vehicleDetails';
import AdvertDetails from './advertDetails';
import TotalCost from './totalCost';

const SummarySection = ({
  advertDetails: { premiumAdvert, extras, startPrice, reservePrice, startTime, totalCost },
  vehicleDetails: { mileage, registration, vehicleMake, vehicleModel, vehicleVariant },
}) => (
  <>
    <div className="details-section">
      <Row style={{ width: '100%' }}>
        <Col>
          <VehicleDetails
            registration={registration}
            mileage={mileage}
            vehicleMake={vehicleMake}
            model={vehicleModel}
            variant={vehicleVariant}
          />
        </Col>
        <Col>
          <AdvertDetails
            premiumAdvert={premiumAdvert}
            extras={extras}
            startPrice={startPrice}
            reservePrise={reservePrice}
            startTime={startTime}
          />
        </Col>
      </Row>
    </div>
    <Row>
      <Col>
        <TotalCost totalCost={totalCost} />
      </Col>
    </Row>
  </>
);

SummarySection.propTypes = {
  advertDetails: PropTypes.shape({
    premiumAdvert: PropTypes.string,
    extras: PropTypes.string,
    startPrice: PropTypes.string,
    reservePrice: PropTypes.string,
    startTime: PropTypes.string,
    totalCost: PropTypes.string,
  }),

  vehicleDetails: PropTypes.shape({
    mileage: PropTypes.string,
    registration: PropTypes.string,
    vehicleMake: PropTypes.string,
    vehicleModel: PropTypes.string,
    vehicleVariant: PropTypes.string,
  }),
};

SummarySection.defaultProps = {
  advertDetails: {
    premiumAdvert: '',
    extras: '',
    startPrice: '',
    reservePrice: '',
    startTime: '',
    totalCost: '',
  },

  vehicleDetails: {
    mileage: '',
    registration: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleVariant: '',
  },
};

export default SummarySection;
