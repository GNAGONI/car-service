import { createSelector } from 'reselect';
import { SUCCESS_BID } from '../constants';

const getMessage = state => state.message;

export const isPlaceBidSuccess = () =>
  createSelector(
    getMessage,
    ({ isMessageShown, messageType }) => isMessageShown && messageType === SUCCESS_BID,
  );
