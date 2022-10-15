import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { Button } from 'react-bootstrap';

const TabItem = ({ id, title }) => (
  <li key={id}>
    <Link route={{ pathname: '/car-auctions/locations/city-auctions', query: { location: title } }}>
      <a>
        <Button>{title}</Button>
      </a>
    </Link>
  </li>
);

TabItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TabItem;
