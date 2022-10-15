import { call, put, takeLatest } from 'redux-saga/effects';

import client from '@car-service/api-client';
import QuotesArchive from '../action-types/quotesArchive';

export function* loadCarList({ payload }) {
  try {
    const response = yield call(client.quotesArchive.getQuotesArchiveCarList, payload);

    const { items, totalNumberOfAuctions, limit, offset } = response.data;

    yield put({
      type: QuotesArchive.GET_QUOTES_ARCHIVE_CAR_LIST.SUCCESS,
      payload: items,
    });

    yield put({
      type: QuotesArchive.SET_QUOTES_ARCHIVE_CAR_LIST_PAGING,
      payload: { totalNumberOfAuctions, limit, offset },
    });
  } catch ({ error }) {
    // TODO: refactor set just error in payload
    yield put({
      type: QuotesArchive.GET_QUOTES_ARCHIVE_CAR_LIST.ERROR,
      payload: error && error.messages,
    });
  }
}

export default [takeLatest(QuotesArchive.GET_QUOTES_ARCHIVE_CAR_LIST.REQUEST, loadCarList)];
