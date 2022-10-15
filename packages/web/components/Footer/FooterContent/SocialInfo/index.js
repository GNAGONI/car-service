import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

import SocialInfoItem from './SocialInfoItem';

const SocialInfo = ({ title, children }) => (
  <Col xl={3} lg={4} md={6} sm={12} className="social-info">
    <div className="social-networks">
      <h4>{title}</h4>
      <ul>{children}</ul>
    </div>
  </Col>
);

SocialInfo.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

SocialInfo.Item = SocialInfoItem;

export default SocialInfo;
