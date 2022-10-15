import { createActions } from 'redux-actions';

import LongAuctionTypes from '../action-types/longAuctions';

export const { setSearchParams } = createActions({
  [LongAuctionTypes.SET_SEARCH_PARAMS.actionName]: payload => payload,
});

export const {
  getCarLongAuctionRequest,
  getCarDetailsLongAuctionRequest,
  setCarDetailsLongAuction,
  updateCarDetailsLongAuctionRequest,
  restartLongAuction,
} = createActions({
  [LongAuctionTypes.GET_CAR_LONG_AUCTION.REQUEST]: payload => ({ payload }),
  [LongAuctionTypes.GET_CAR_DETAILS_LONG_AUCTION.REQUEST]: payload => payload,
  [LongAuctionTypes.SET_CAR_DETAILS_LONG_AUCTION.actionName]: payload => payload,
  [LongAuctionTypes.UPDATE_CAR_DETAILS_LONG_AUCTION.REQUEST]: payload => ({ payload }),
  [LongAuctionTypes.RESTART_LONG_AUCTION.actionName]: () => ({}),
});
