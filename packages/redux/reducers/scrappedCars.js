import immutable from 'immutability-helper';
import { handleActions } from 'redux-actions';
import ScrappedCarsActionsType from '../action-types/scrappedCars';
import { STATUS } from '../constants';

const DEFAULT_LIMIT = 10;
const LIMIT = 5;
const DEFAULT_OFFSET = 0;

const initialState = {
  status: STATUS.IDLE,
  deletedQuoteId: null,
  scrappedCars: {
    items: [],
    total: 0,
    limit: DEFAULT_LIMIT,
    offset: DEFAULT_OFFSET,
    isInitialized: false,
  },
  quoteHistory: {
    items: [],
    total: 0,
    limit: DEFAULT_LIMIT,
    offset: DEFAULT_OFFSET,
    isInitialized: false,
  },
};

export default {
  scrappedCars: handleActions(
    {
      [ScrappedCarsActionsType.SET_DELETED_QUOTE_ID]: (state, { payload: { quoteId } }) =>
        immutable(state, {
          deletedQuoteId: { $set: quoteId },
        }),

      [ScrappedCarsActionsType.DELETE_QUOTE.REQUEST]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
        }),
      [ScrappedCarsActionsType.DELETE_QUOTE.SUCCESS]: (state, { payload: { quoteIndex } }) =>
        immutable(state, {
          status: { $set: STATUS.SUCCESS },
          quoteHistory: {
            items: { $splice: [[quoteIndex, 1]] },
            total: { $set: state.quoteHistory.total - 1 },
          },
        }),
      [ScrappedCarsActionsType.DELETE_QUOTE.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
        }),

      [ScrappedCarsActionsType.GET_QUOTE_HISTORY.REQUEST]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
        }),

      [ScrappedCarsActionsType.GET_QUOTE_HISTORY.SUCCESS]: (state, { payload: { items, total } }) =>
        immutable(state, {
          status: { $set: STATUS.SUCCESS },
          quoteHistory: {
            total: { $set: total },
            items: { $push: items },
            offset: { $set: state.quoteHistory.offset + state.quoteHistory.limit },
            limit: { $set: 5 },
            isInitialized: { $set: true },
          },
        }),

      [ScrappedCarsActionsType.GET_QUOTE_HISTORY.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
          quoteHistory: {
            isInitialized: { $set: true },
          },
        }),

      [ScrappedCarsActionsType.GET_SCRAPPED_CARS.REQUEST]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
        }),

      [ScrappedCarsActionsType.GET_SCRAPPED_CARS.SUCCESS]: (state, { payload: { items, total } }) =>
        immutable(state, {
          status: { $set: STATUS.SUCCESS },
          scrappedCars: {
            total: { $set: total },
            items: { $push: items },
            offset: { $set: state.scrappedCars.offset + state.scrappedCars.limit },
            limit: { $set: LIMIT },
            isInitialized: { $set: true },
          },
        }),

      [ScrappedCarsActionsType.GET_SCRAPPED_CARS.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
          scrappedCars: {
            isInitialized: { $set: true },
          },
        }),

      [ScrappedCarsActionsType.INITIALIZE_QUOTE_HISTORY]: state =>
        immutable(state, {
          quoteHistory: {
            total: { $set: 0 },
            items: { $set: [] },
            offset: { $set: DEFAULT_OFFSET },
            limit: { $set: DEFAULT_LIMIT },
            isInitialized: { $set: false },
          },
        }),

      [ScrappedCarsActionsType.INITIALIZE_SCRAPPED_CARS]: state =>
        immutable(state, {
          scrappedCars: {
            total: { $set: 0 },
            items: { $set: [] },
            offset: { $set: DEFAULT_OFFSET },
            limit: { $set: DEFAULT_LIMIT },
            isInitialized: { $set: false },
          },
        }),
    },
    initialState,
  ),
};
