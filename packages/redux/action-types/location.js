import { createAsyncActionSet } from '../lib/action-helper';

export default {
  // SETTERS
  CHANGE_LOCATION_REGION_FILTERS: createAsyncActionSet('CHANGE_LOCATION_REGION_FILTERS'),
  CHANGE_LOCATION_AREA_FILTERS: createAsyncActionSet('CHANGE_LOCATION_AREA_FILTERS'),
  CHANGE_LOCATION_CITY_FILTERS: createAsyncActionSet('CHANGE_LOCATION_CITY_FILTERS'),
};
