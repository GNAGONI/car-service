import { createAsyncActionSet } from '../lib/action-helper';

export default {
  // GETTERS
  GET_CAR_LONG_AUCTION: createAsyncActionSet('GET_CAR_LONG_AUCTION'),
  GET_CAR_DETAILS_LONG_AUCTION: createAsyncActionSet('GET_CAR_DETAILS_LONG_AUCTION'),

  // SETTERS
  SET_CAR_DETAILS_LONG_AUCTION: createAsyncActionSet('SET_CAR_DETAILS_LONG_AUCTION'),
  UPDATE_CAR_DETAILS_LONG_AUCTION: createAsyncActionSet('UPDATE_CAR_DETAILS_LONG_AUCTION'),

  SET_SEARCH_PARAMS: createAsyncActionSet('SET_SEARCH_PARAMS'),
  RESTART_LONG_AUCTION: createAsyncActionSet('RESTART_LONG_AUCTION'),
};
