import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import LiveAuctionActions from '../action-types/liveAuction';

const initialPaging = {
  limit: 15,
  offset: 0,
  totalNumberOfAuctions: 20,
};

const initialCarsListFilter = {
  type: 'personalized',
};

const initialState = {
  carsList: [],
  isCarsListLoading: null,
  carsListError: null,
  carsListFilter: initialCarsListFilter,
  carsListPaging: initialPaging,
  isCarListLoaded: false,
};

export default {
  liveAuction: handleActions(
    {
      [LiveAuctionActions.GET_LIVE_AUCTION_CAR_LIST.REQUEST]: state =>
        immutable(state, {
          isCarsListLoading: { $set: true },
          carsListError: { $set: null },
        }),

      [LiveAuctionActions.GET_LIVE_AUCTION_CAR_LIST.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          isCarsListLoading: { $set: false },
          carsList: { $set: [...state.carsList, ...payload] },
          isCarListLoaded: { $set: true },
        }),

      [LiveAuctionActions.GET_LIVE_AUCTION_CAR_LIST.ERROR]: (state, { payload }) =>
        immutable(state, {
          isCarsListLoading: { $set: false },
          carsListError: { $set: payload },
        }),

      [LiveAuctionActions.SET_LIVE_AUCTION_CAR_LIST_PAGING]: (state, { payload }) =>
        immutable(state, {
          carsListPaging: { $set: { ...state.carsListPaging, ...payload } },
        }),

      [LiveAuctionActions.SET_LIVE_AUCTION_CAR_LIST_FILTER]: (state, { payload }) =>
        immutable(state, {
          carsListFilter: { $set: { ...state.carsListFilter, ...payload } },
        }),

      [LiveAuctionActions.DELETE_LIVE_AUCTION_CAR_LIST]: state =>
        immutable(state, {
          carsList: { $set: [] },
        }),

      [LiveAuctionActions.RESET_LIVE_AUCTION_CAR_LIST]: state =>
        immutable(state, {
          isCarsListLoading: { $set: true },
          carsListError: { $set: null },
        }),

      [LiveAuctionActions.RESET_LIVE_AUCTION_CAR_LIST_PAGING]: state =>
        immutable(state, {
          carsListPaging: { $set: initialPaging },
        }),
    },
    initialState,
  ),
};
