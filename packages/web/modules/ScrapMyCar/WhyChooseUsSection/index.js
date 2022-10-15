import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import TypesOfCars from './TypesOfCars';
import TextContent from './TextContent';

const WhyChooseUsSection = ({
  textContentTitle,
  textContentSubTitle,
  textContentText,
  carTypesTitle,
  carTypesText,
  carTypesItems,
}) => (
  <section className="content bg-before-default section-why-choose-us">
    <Row className="content-holder">
      <Col md={7} className="content-block">
        <TextContent title={textContentTitle} subTitle={textContentSubTitle} content={textContentText} />
      </Col>
      <Col md={5} className="content-block">
        <TypesOfCars title={carTypesTitle} text={carTypesText} carTypesItems={carTypesItems} />
      </Col>
    </Row>
  </section>
);

WhyChooseUsSection.propTypes = {
  textContentTitle: PropTypes.string,
  textContentSubTitle: PropTypes.string,
  textContentText: PropTypes.string,
  carTypesTitle: PropTypes.string,
  carTypesText: PropTypes.string,
  carTypesItems: PropTypes.array,
};

WhyChooseUsSection.defaultProps = {
  textContentTitle: '',
  textContentSubTitle: '',
  textContentText: '',
  carTypesTitle: '',
  carTypesText: '',
  carTypesItems: '',
};

export default WhyChooseUsSection;
