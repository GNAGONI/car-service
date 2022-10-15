import { call, put, takeLatest } from 'redux-saga/effects';

import client from '@car-service/api-client';
import PendingPayments from '../action-types/pendingPayments';

export function* loadCarList({ payload }) {
  try {
    const response = yield call(client.pendingPayments.getPendingPaymentsCarList, payload);

    const { items, totalNumberOfAuctions, limit, offset } = response.data;

    yield put({
      type: PendingPayments.GET_PENDING_PAYMENTS_CAR_LIST.SUCCESS,
      payload: items,
    });

    yield put({
      type: PendingPayments.SET_PENDING_PAYMENTS_CAR_LIST_PAGING,
      payload: { totalNumberOfAuctions, limit, offset },
    });
  } catch ({ error }) {
    // TODO: refactor set just error in payload
    yield put({
      type: PendingPayments.GET_PENDING_PAYMENTS_CAR_LIST.ERROR,
      payload: error && error.messages,
    });
  }
}

export default [takeLatest(PendingPayments.GET_PENDING_PAYMENTS_CAR_LIST.REQUEST, loadCarList)];
