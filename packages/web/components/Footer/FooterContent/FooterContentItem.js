import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const FooterContentItem = ({ title, children }) => (
  <Col xl={9} lg={8} md={6} sm={12} className="col" key={title}>
    <h4>{title}</h4>
    <div className="col-area">{children}</div>
  </Col>
);

FooterContentItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default FooterContentItem;
