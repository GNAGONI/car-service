import { createActions } from 'redux-actions';
import AuctionTypes from '../action-types/modal';

export const { modalClose, modalOpen } = createActions({
  [AuctionTypes.CLOSE_MODAL]: payload => payload,
  [AuctionTypes.OPEN_MODAL]: payload => payload,
});
