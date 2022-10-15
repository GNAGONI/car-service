import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import QuotesArchiveType from '../action-types/quotesArchive';

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
  quotesArchive: handleActions(
    {
      [QuotesArchiveType.GET_QUOTES_ARCHIVE_PAGE.REQUEST]: state =>
        immutable(state, {
          isPageLoading: { $set: true },
          pageError: { $set: null },
        }),

      [QuotesArchiveType.GET_QUOTES_ARCHIVE_PAGE.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          isPageLoading: { $set: false },
          pageData: { $set: payload },
        }),

      [QuotesArchiveType.GET_QUOTES_ARCHIVE_PAGE.ERROR]: (state, { payload }) =>
        immutable(state, {
          isPageLoading: { $set: false },
          pageError: { $set: payload },
        }),

      [QuotesArchiveType.GET_QUOTES_ARCHIVE_CAR_LIST.REQUEST]: state =>
        immutable(state, {
          isCarsListLoading: { $set: true },
          carsListError: { $set: null },
        }),

      [QuotesArchiveType.GET_QUOTES_ARCHIVE_CAR_LIST.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          isCarsListLoading: { $set: false },
          carsList: { $set: [...state.carsList, ...payload] },
          isCarListLoaded: { $set: true },
        }),

      [QuotesArchiveType.GET_QUOTES_ARCHIVE_CAR_LIST.ERROR]: (state, { payload }) =>
        immutable(state, {
          isCarsListLoading: { $set: false },
          carsListError: { $set: payload },
        }),

      [QuotesArchiveType.SET_QUOTES_ARCHIVE_CAR_LIST_PAGING]: (state, { payload }) =>
        immutable(state, {
          carsListPaging: { $set: { ...state.carsListPaging, ...payload } },
        }),

      [QuotesArchiveType.DELETE_QUOTES_ARCHIVE_CAR_LIST]: state =>
        immutable(state, {
          carsList: { $set: [] },
        }),

      [QuotesArchiveType.RESET_QUOTES_ARCHIVE_CAR_LIST]: state =>
        immutable(state, {
          isCarsListLoading: { $set: true },
          carsListError: { $set: null },
        }),

      [QuotesArchiveType.RESET_QUOTES_ARCHIVE_CAR_LIST_PAGING]: state =>
        immutable(state, {
          carsListPaging: { $set: initialPaging },
        }),
    },
    initialState,
  ),
};
