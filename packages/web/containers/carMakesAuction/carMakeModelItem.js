import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { Col } from 'react-bootstrap';

import Image from '../../components/common/image';

const CarMakeModelItem = ({ carModelName, logo, id, onDropFilters, carMake }) => (
  <Col sm={4} md={3} lg={2} className="box-car" as="article" key={id} onClick={onDropFilters}>
    <Link
      path={{
        pathname: '/car-auctions/car-makes/car-makes-and-model-auctions',
        query: { carMake, carModel: carModelName },
      }}
    >
      <a>
        <div className="img-thumbnail">
          <Image src={logo} alt={carModelName} width="110" height="51" />
        </div>
        <h3>{carModelName}</h3>
      </a>
    </Link>
  </Col>
);

CarMakeModelItem.propTypes = {
  carModelName: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDropFilters: PropTypes.func.isRequired,
  carMake: PropTypes.func.isRequired,
};

export default CarMakeModelItem;
