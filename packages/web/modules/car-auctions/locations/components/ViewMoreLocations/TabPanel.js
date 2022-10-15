import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { Tab, Button } from 'react-bootstrap';

import TabItem from './TabItem';

const TabPanel = ({ id, cities, name = '' }) =>
  cities && Array.isArray(cities) ? (
    <Tab.Pane eventKey={id}>
      <ul className="regions-list">{cities?.map(TabItem)}</ul>
      <div className="text-center">
        <Link route={{ pathname: '/car-auctions/locations/area-auctions', query: { area: name, id } }}>
          <a>
            <Button className="mt-5">View auctions in {name}</Button>
          </a>
        </Link>
      </div>
    </Tab.Pane>
  ) : null;

TabPanel.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      depth: PropTypes.number,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default TabPanel;
