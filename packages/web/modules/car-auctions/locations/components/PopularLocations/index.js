import React from 'react';

import { POPULAR_LOCATIONS_TYPE } from 'constants/api-types';
import PopularLocationsItem from './PopularLocationsItem';

const PopularLocations = ({ popularLocations }) =>
  popularLocations && Array.isArray(popularLocations) && popularLocations.length ? (
    <div className="popular-locations text-center">
      <div className="list-holder">
        <ul className="locations-list">{popularLocations.map(PopularLocationsItem)}</ul>
      </div>
    </div>
  ) : null;

PopularLocations.propTypes = {
  popularLocations: POPULAR_LOCATIONS_TYPE,
};

export default PopularLocations;
