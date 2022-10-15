import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

const VehicleDetailsSection = ({ title, carType, registrationNumber, carWeight, postcode, carImage }) => (
  <div className="product-details">
    {title && (
      <div className="section-head text-center">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    )}
    <ul className="details-list">
      {carType && (
        <li>
          <strong className="title">Car Type</strong>
          <span className="text">{carType}</span>
        </li>
      )}
      {registrationNumber && (
        <li>
          <strong className="title">Registration</strong>
          <span className="text">{registrationNumber}</span>
        </li>
      )}
      {postcode && (
        <li>
          <strong className="title">Postcode</strong>
          <span className="text">{postcode}</span>
        </li>
      )}
    </ul>
    <div className="link-holder text-center">
      <Link route="/scrap-my-car/not-my-car">
        <a className="link">This isn&#39;t my car</a>
      </Link>
    </div>
    {carImage && (
      <div className="img-thumbnail">
        <img src={carImage} alt="Car" />
      </div>
    )}
  </div>
);

VehicleDetailsSection.propTypes = {
  title: PropTypes.string,
  carType: PropTypes.string,
  registrationNumber: PropTypes.string,
  carWeight: PropTypes.string,
  postcode: PropTypes.string,
  carImage: PropTypes.string,
};

VehicleDetailsSection.defaultProps = {
  title: '',
  carType: '',
  registrationNumber: '',
  carWeight: '',
  postcode: '',
  carImage: '',
};

export default VehicleDetailsSection;
