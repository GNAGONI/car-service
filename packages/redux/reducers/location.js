import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import LocationTypes from '../action-types/location';
import { STATUS } from '../constants';

export const locationState = {
  location: {
    regionFilters: '',
    areaFilters: '',
    cityFilters: '',
  },
  message: '',
  status: STATUS.IDLE,
};

export default {
  location: handleActions(
    {
      [LocationTypes.CHANGE_LOCATION_REGION_FILTERS.actionName]: (state, { payload }) =>
        immutable(state, {
          regionFilters: {
            $set: payload.regionFilters || state.location.regionFilters,
          },
        }),
      [LocationTypes.CHANGE_LOCATION_AREA_FILTERS.actionName]: (state, { payload }) =>
        immutable(state, {
          areaFilters: {
            $set: payload.areaFilters || state.location.areaFilters,
          },
        }),
      [LocationTypes.CHANGE_LOCATION_CITY_FILTERS.actionName]: (state, { payload }) =>
        immutable(state, {
          cityFilters: {
            $set: payload.cityFilters || state.location.cityFilters,
          },
        }),
    },
    locationState,
  ),
};
