import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import ActionTypes from '../action-types/browseByMake';

const initialData = {
  auctionData: null,
  isAuctionLoading: false,
  auctionError: null,
};

export default {
  browseByMake: handleActions(
    {
      [ActionTypes.GET_BROWSE_BY_MAKE_AUCTIONS.REQUEST]: state =>
        immutable(state, {
          isAuctionLoading: { $set: true },
          auctionError: { $set: null },
        }),

      [ActionTypes.GET_BROWSE_BY_MAKE_AUCTIONS.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          isAuctionLoading: { $set: false },
          auctionData: { $set: payload },
        }),

      [ActionTypes.GET_BROWSE_BY_MAKE_AUCTIONS.ERROR]: (state, { payload }) =>
        immutable(state, {
          isAuctionLoading: { $set: false },
          auctionError: { $set: payload },
        }),
    },
    initialData,
  ),
};
