import { createActions } from 'redux-actions';
import AuctionTypes from '../action-types/message';

export const { showMessage, hideMessage } = createActions({
  [AuctionTypes.SHOW_MESSAGE]: payload => payload,
  [AuctionTypes.HIDE_MESSAGE]: payload => payload,
});
