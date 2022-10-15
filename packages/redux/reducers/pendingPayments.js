import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import LiveAuctionActions from '../action-types/pendingPayments';

const initialPaging = {
  limit: 15,
  offset: 0,
  totalNumberOfAuctions: 20,
};

const initialState = {
  carsList: [],
  isCarsListLoading: null,
  carsListError: null,
  carsListPaging: initialPaging,
  isCarListLoaded: false,
};

export default {
  pendingPayment: handleActions(
    {
      [LiveAuctionActions.GET_PENDING_PAYMENTS_CAR_LIST.REQUEST]: state =>
        immutable(state, {
          isCarsListLoading: { $set: true },
          carsListError: { $set: null },
        }),

      [LiveAuctionActions.GET_PENDING_PAYMENTS_CAR_LIST.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          isCarsListLoading: { $set: false },
          carsList: { $set: [...state.carsList, ...payload] },
          isCarListLoaded: { $set: true },
        }),

      [LiveAuctionActions.GET_PENDING_PAYMENTS_CAR_LIST.ERROR]: (state, { payload }) =>
        immutable(state, {
          isCarsListLoading: { $set: false },
          carsListError: { $set: payload },
        }),

      [LiveAuctionActions.SET_PENDING_PAYMENTS_CAR_LIST_PAGING]: (state, { payload }) =>
        immutable(state, {
          carsListPaging: { $set: { ...state.carsListPaging, ...payload } },
        }),

      [LiveAuctionActions.DELETE_PENDING_PAYMENTS_CAR_LIST]: state =>
        immutable(state, {
          carsList: { $set: [] },
        }),

      [LiveAuctionActions.RESET_PENDING_PAYMENTS_CAR_LIST]: state =>
        immutable(state, {
          isCarsListLoading: { $set: true },
          carsListError: { $set: null },
        }),

      [LiveAuctionActions.RESET_PENDING_PAYMENTS_CAR_LIST_PAGING]: state =>
        immutable(state, {
          carsListPaging: { $set: initialPaging },
        }),
    },
    initialState,
  ),
};
