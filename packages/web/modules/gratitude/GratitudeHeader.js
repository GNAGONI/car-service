import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

const GratitudeHeader = ({ gratitudeHeaderLabel, gratitudeHeaderMessage }) => (
  <Row className="gratitude__head">
    {gratitudeHeaderLabel && (
      <h2 className="gratitudeHead__header" dangerouslySetInnerHTML={{ __html: gratitudeHeaderLabel }} />
    )}
    <p className="gratitudeHead__text">{gratitudeHeaderMessage}</p>
  </Row>
);

GratitudeHeader.propTypes = {
  gratitudeHeaderLabel: PropTypes.string,
  gratitudeHeaderMessage: PropTypes.string,
};

export default GratitudeHeader;
