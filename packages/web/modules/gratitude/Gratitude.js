import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import GratitudeHeader from './GratitudeHeader';
import GratitudeList from './GratitudeList';

const Gratitude = ({ children }) => (
  <Container fluid className="gratitude">
    {children}
  </Container>
);

Gratitude.Header = GratitudeHeader;
Gratitude.List = GratitudeList;

Gratitude.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Gratitude;
