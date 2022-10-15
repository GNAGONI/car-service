import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import AwaitingCollection from '../action-types/awaitingCollection';

const initialPaging = {
  limit: 15,
  offset: 0,
  totalNumberOfAuctions: 20,
};

const initialState = {
  pageData: null,
  isPageLoading: false,
  pageError: null,
  carsList: [],
  isCarsListLoading: null,
  carsListError: null,
  carsListPaging: initialPaging,
  isCarListLoaded: false,
};

export default {
  awaitingCollection: handleActions(
    {
      [AwaitingCollection.GET_AWAITING_COLLECTION_PAGE.REQUEST]: state =>
        immutable(state, {
          isPageLoading: { $set: true },
          pageError: { $set: null },
        }),

      [AwaitingCollection.GET_AWAITING_COLLECTION_PAGE.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          isPageLoading: { $set: false },
          pageData: { $set: payload },
        }),

      [AwaitingCollection.GET_AWAITING_COLLECTION_PAGE.ERROR]: (state, { payload }) =>
        immutable(state, {
          isPageLoading: { $set: false },
          pageError: { $set: payload },
        }),

      [AwaitingCollection.GET_AWAITING_COLLECTION_CAR_LIST.REQUEST]: state =>
        immutable(state, {
          isCarsListLoading: { $set: true },
          carsListError: { $set: null },
        }),

      [AwaitingCollection.GET_AWAITING_COLLECTION_CAR_LIST.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          isCarsListLoading: { $set: false },
          carsList: { $set: [...state.carsList, ...payload] },
          isCarListLoaded: { $set: true },
        }),

      [AwaitingCollection.GET_AWAITING_COLLECTION_CAR_LIST.ERROR]: (state, { payload }) =>
        immutable(state, {
          isCarsListLoading: { $set: false },
          carsListError: { $set: payload },
        }),

      [AwaitingCollection.SET_AWAITING_COLLECTION_CAR_LIST_PAGING]: (state, { payload }) =>
        immutable(state, {
          carsListPaging: { $set: { ...state.carsListPaging, ...payload } },
        }),

      [AwaitingCollection.DELETE_AWAITING_COLLECTION_CAR_LIST]: state =>
        immutable(state, {
          carsList: { $set: [] },
        }),

      [AwaitingCollection.RESET_AWAITING_COLLECTION_CAR_LIST]: state =>
        immutable(state, {
          isCarsListLoading: { $set: true },
          carsListError: { $set: null },
        }),

      [AwaitingCollection.RESET_AWAITING_COLLECTION_CAR_LIST_PAGING]: state =>
        immutable(state, {
          carsListPaging: { $set: initialPaging },
        }),
    },
    initialState,
  ),
};
