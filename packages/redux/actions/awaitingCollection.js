import { createActions } from 'redux-actions';

import AuctionTypes from '../action-types/awaitingCollection';

export const {
  getAwaitingCollectionPageRequest,
  getAwaitingCollectionPageSuccess,
  getAwaitingCollectionPageError,
  getAwaitingCollectionCarListRequest,
  getAwaitingCollectionCarListSuccess,
  getAwaitingCollectionCarListError,
  setAwaitingCollectionCarListPaging,
} = createActions({
  [AuctionTypes.GET_AWAITING_COLLECTION_PAGE.REQUEST]: payload => payload,
  [AuctionTypes.GET_AWAITING_COLLECTION_PAGE.SUCCESS]: payload => payload,
  [AuctionTypes.GET_AWAITING_COLLECTION_PAGE.ERROR]: payload => payload,
  [AuctionTypes.GET_AWAITING_COLLECTION_CAR_LIST.REQUEST]: payload => payload,
  [AuctionTypes.GET_AWAITING_COLLECTION_CAR_LIST.SUCCESS]: payload => payload,
  [AuctionTypes.GET_AWAITING_COLLECTION_CAR_LIST.ERROR]: payload => payload,
  [AuctionTypes.SET_AWAITING_COLLECTION_CAR_LIST_PAGING]: payload => payload,
});
