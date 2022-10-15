import immutable from 'immutability-helper';
import { handleActions } from 'redux-actions';
import AuctionActionsType from '../action-types/auction';

const initialState = {
  auctionData: {},
  auctionDataIsLoading: false,
  auctionDataError: null,
  auctionPlaceBidError: null,
  auctionPlaceBidIsLoading: false,
  auctionPlaceBidWasPlaced: false,
};

export default {
  auction: handleActions(
    {
      [AuctionActionsType.GET_AUCTION.REQUEST]: state =>
        immutable(state, {
          isPageLoading: { $set: true },
          auctionDataError: { $set: null },
        }),

      [AuctionActionsType.GET_AUCTION.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          auctionDataIsLoading: { $set: false },
          auctionData: { $set: payload },
        }),

      [AuctionActionsType.GET_AUCTION.ERROR]: (state, { payload }) =>
        immutable(state, {
          auctionDataIsLoading: { $set: false },
          auctionDataError: { $set: payload },
        }),

      [AuctionActionsType.PLACE_BID.REQUEST]: state =>
        immutable(state, {
          auctionPlaceBidIsLoading: { $set: true },
          auctionPlaceBidError: { $set: null },
        }),

      [AuctionActionsType.PLACE_BID.SUCCESS]: (state, { payload: { amount } }) =>
        immutable(state, {
          auctionPlaceBidWasPlaced: { $set: true },
          auctionData: {
            lastBids: {
              signedIn: {
                $set: amount,
              },
            },
          },
        }),

      [AuctionActionsType.PLACE_BID.ERROR]: (state, { payload }) =>
        immutable(state, {
          auctionPlaceBidIsLoading: { $set: false },
          auctionPlaceBidError: { $set: payload },
        }),

      [AuctionActionsType.UPDATE_AUCTION_BID]: (state, { payload: { amount } }) =>
        immutable(state, {
          auctionData: {
            bidsCount: { $set: state.auctionData.bidsCount + 1 },
            lastBids: {
              global: {
                $set: amount,
              },
            },
          },
        }),

      [AuctionActionsType.UPDATE_TIME_REMAINING]: (state, { payload }) =>
        immutable(state, {
          auctionData: { $set: { ...state.auctionData, timeRemaining: payload } },
        }),
    },
    initialState,
  ),
};
