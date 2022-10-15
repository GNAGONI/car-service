import { createActions } from 'redux-actions';

import AuctionTypes from '../action-types/quotesArchive';

export const {
  getQuotesArchivePageRequest,
  getQuotesArchivePageSuccess,
  getQuotesArchivePageError,
  getQuotesArchiveCarListRequest,
  getQuotesArchiveCarListSuccess,
  getQuotesArchiveCarListError,
  setQuotesArchiveCarListPaging,
} = createActions({
  [AuctionTypes.GET_QUOTES_ARCHIVE_PAGE.REQUEST]: payload => payload,
  [AuctionTypes.GET_QUOTES_ARCHIVE_PAGE.SUCCESS]: payload => payload,
  [AuctionTypes.GET_QUOTES_ARCHIVE_PAGE.ERROR]: payload => payload,
  [AuctionTypes.GET_QUOTES_ARCHIVE_CAR_LIST.REQUEST]: payload => payload,
  [AuctionTypes.GET_QUOTES_ARCHIVE_CAR_LIST.SUCCESS]: payload => payload,
  [AuctionTypes.GET_QUOTES_ARCHIVE_CAR_LIST.ERROR]: payload => payload,
  [AuctionTypes.SET_QUOTES_ARCHIVE_CAR_LIST_PAGING]: payload => payload,
});
