import { createAsyncActionSet } from '../lib/action-helper';

export default {
  DELETE_QUOTE: createAsyncActionSet('DELETE_QUOTE'),
  GET_QUOTE_HISTORY: createAsyncActionSet('GET_QUOTE_HISTORY'),
  GET_SCRAPPED_CARS: createAsyncActionSet('GET_SCRAPPED_CARS'),
  SET_DELETED_QUOTE_ID: 'SET_DELETED_QUOTE_ID',
  INITIALIZE_QUOTE_HISTORY: 'INITIALIZE_QUOTE_HISTORY',
  INITIALIZE_SCRAPPED_CARS: 'INITIALIZE_SCRAPPED_CARS',
};
