import { createActions } from 'redux-actions';

import AuctionTypes from '../action-types/liveAuction';

export const {
  getLiveAuctionCarListRequest,
  getLiveAuctionCarListSuccess,
  getLiveAuctionCarListError,
  setLiveAuctionCarListPaging,
  setLiveAuctionCarListFilter,
  resetLiveAuctionCarList,
} = createActions({
  [AuctionTypes.GET_LIVE_AUCTION_CAR_LIST.REQUEST]: payload => payload,
  [AuctionTypes.GET_LIVE_AUCTION_CAR_LIST.SUCCESS]: payload => payload,
  [AuctionTypes.GET_LIVE_AUCTION_CAR_LIST.ERROR]: payload => payload,
  [AuctionTypes.SET_LIVE_AUCTION_CAR_LIST_PAGING]: payload => payload,
  [AuctionTypes.SET_LIVE_AUCTION_CAR_LIST_FILTER]: payload => payload,
  [AuctionTypes.RESET_LIVE_AUCTION_CAR_LIST]: payload => payload,
});
