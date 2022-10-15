import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

const PopularLocationsItem = ({ id, title }) => (
  <li key={id}>
    <Link route={{ pathname: '/car-auctions/locations/city-auctions', query: { location: title } }}>
      <a>{title}</a>
    </Link>
  </li>
);

PopularLocationsItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default PopularLocationsItem;
