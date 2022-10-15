import { call, put, takeLatest } from 'redux-saga/effects';

import client from '@car-service/api-client';
import AwaitingCollection from '../action-types/awaitingCollection';

export function* loadCarList({ payload }) {
  try {
    const response = yield call(client.awaitingCollection.getAwaitingCollectionCarList, payload);

    const { items, totalNumberOfAuctions, limit, offset } = response;

    yield put({
      type: AwaitingCollection.GET_AWAITING_COLLECTION_CAR_LIST.SUCCESS,
      payload: items,
    });

    yield put({
      type: AwaitingCollection.SET_AWAITING_COLLECTION_CAR_LIST_PAGING,
      payload: { totalNumberOfAuctions, limit, offset },
    });
  } catch ({ error }) {
    // TODO: refactor to put just error in payload
    yield put({
      type: AwaitingCollection.GET_AWAITING_COLLECTION_CAR_LIST.ERROR,
      payload: error && error.messages,
    });
  }
}

export default [takeLatest(AwaitingCollection.GET_AWAITING_COLLECTION_CAR_LIST.REQUEST, loadCarList)];
