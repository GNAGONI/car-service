import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const SocialValuePartnersImpactOption = ({ icon, value, label }) => (
  <Col xl={3} lg={3} md={5} sm={12} className="impact-option-wrapper">
    <div className="impact-option">
      <div>{<img src={icon} alt="Impact" />}</div>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  </Col>
);

SocialValuePartnersImpactOption.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
};

export default SocialValuePartnersImpactOption;
