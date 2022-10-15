import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const NavItem = ({ id = 0, name = '' }) => <Nav.Link eventKey={id}>{name}</Nav.Link>;

NavItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
