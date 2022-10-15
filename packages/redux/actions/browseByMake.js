import { createActions } from 'redux-actions';

import AuctionTypes from '../action-types/browseByMake';

export const {
  getBrowseByMakeAuctionsRequest,
  getBrowseByMakeAuctionsSuccess,
  getBrowseByMakeAuctionsError,
} = createActions({
  [AuctionTypes.GET_BROWSE_BY_MAKE_AUCTIONS.REQUEST]: () => {},
  [AuctionTypes.GET_BROWSE_BY_MAKE_AUCTIONS.SUCCESS]: auctions => auctions,
  [AuctionTypes.GET_BROWSE_BY_MAKE_AUCTIONS.ERROR]: error => error,
});
