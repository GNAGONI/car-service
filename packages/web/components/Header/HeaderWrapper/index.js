import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderNav from './HeaderNav';

const HeaderWrapper = ({ children }) => (
  <header id="header">
    <Container fluid>
      <Row>
        <Col className="header-wrap">{children}</Col>
      </Row>
    </Container>
  </header>
);

HeaderWrapper.Nav = HeaderNav;

HeaderWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default HeaderWrapper;
