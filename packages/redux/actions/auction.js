import { createActions } from 'redux-actions';
import AuctionTypes from '../action-types/auction';

export const {
  getAuctionRequest,
  getAuctionSuccess,
  getAuctionError,
  placeBidRequest,
  placeBidSuccess,
  placeBidError,
  updateTimeRemaining,
  updateBidRequest,
  updateAuctionBid,
  watchAuctionProgress,
  watchAuctionFinish,
} = createActions({
  [AuctionTypes.GET_AUCTION.REQUEST]: payload => payload,
  [AuctionTypes.GET_AUCTION.SUCCESS]: payload => payload,
  [AuctionTypes.GET_AUCTION.ERROR]: payload => payload,
  [AuctionTypes.PLACE_BID.REQUEST]: auctionId => auctionId,
  [AuctionTypes.PLACE_BID.SUCCESS]: ({ amount }) => ({ amount }),
  [AuctionTypes.PLACE_BID.ERROR]: ({ error }) => ({ error }),
  [AuctionTypes.UPDATE_TIME_REMAINING]: timeRemaining => timeRemaining,
  [AuctionTypes.BID_HAS_BEEN_UPDATED]: data => data,
  [AuctionTypes.UPDATE_AUCTION_BID]: data => data,
  [AuctionTypes.WATCH_AUCTION.PROGRESS]: auctionId => auctionId,
  [AuctionTypes.WATCH_AUCTION.FINISH]: auctionId => auctionId,
});
