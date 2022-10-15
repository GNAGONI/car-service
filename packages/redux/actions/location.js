import { createActions } from 'redux-actions';

import LocationTypes from '../action-types/location';

export const { changeLocationRegionFilters, changeLocationAreaFilters, changeLocationCityFilters } = createActions({
  [LocationTypes.CHANGE_LOCATION_REGION_FILTERS.actionName]: regionFilters => ({ regionFilters }),
  [LocationTypes.CHANGE_LOCATION_AREA_FILTERS.actionName]: areaFilters => ({ areaFilters }),
  [LocationTypes.CHANGE_LOCATION_CITY_FILTERS.actionName]: cityFilters => ({ cityFilters }),
});
