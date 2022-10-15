import { createAsyncActionSet, createDelayedActionsSet } from '../lib/action-helper';

export default {
  GET_AUCTION: createAsyncActionSet('GET_AUCTION'),
  PLACE_BID: createAsyncActionSet('PLACE_BID'),
  UPDATE_TIME_REMAINING: 'UPDATE_TIME_REMAINING',
  BID_HAS_BEEN_UPDATED: 'BID_HAS_BEEN_UPDATED',
  UPDATE_AUCTION_BID: 'UPDATE_AUCTION_BID',
  WATCH_AUCTION: createDelayedActionsSet('WATCH_AUCTION'),
};
