import { createActions } from 'redux-actions';

import AuctionTypes from '../action-types/pendingPayments';

export const {
  getPendingPaymentsCarListRequest,
  getPendingPaymentsCarListSuccess,
  getPendingPaymentsCarListError,
  setPendingPaymentsCarListPaging,
} = createActions({
  [AuctionTypes.GET_PENDING_PAYMENTS_CAR_LIST.REQUEST]: payload => payload,
  [AuctionTypes.GET_PENDING_PAYMENTS_CAR_LIST.SUCCESS]: payload => payload,
  [AuctionTypes.GET_PENDING_PAYMENTS_CAR_LIST.ERROR]: payload => payload,
  [AuctionTypes.SET_PENDING_PAYMENTS_CAR_LIST_PAGING]: payload => payload,
});
