import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const SocialValueReleaseStatisticsOption = ({ value, label, className }) => (
  <Col xl={4} lg={4} md={4} className="social-value-release-statistics-option">
    <h1 className={`social-value-release-statistics-percent ${className}`}>
      <span>{value}</span>
    </h1>
    <p>
      {value}% {label}
    </p>
  </Col>
);

SocialValueReleaseStatisticsOption.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
};

export default SocialValueReleaseStatisticsOption;
