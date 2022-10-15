import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const TermsAndConditionsInfo = ({ header, text }) => (
  <Col xl={8} lg={7} md={7} sm={12} className="website-info">
    {header && <h1 className="website-info-mainHeader" dangerouslySetInnerHTML={{ __html: header }} />}
    {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
  </Col>
);

TermsAndConditionsInfo.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};

export default TermsAndConditionsInfo;
