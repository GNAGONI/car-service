import { put, takeLatest, select, call } from 'redux-saga/effects';

import client from '@car-service/api-client';
import ScrappedCarsTypes from '../action-types/scrappedCars';
import { getRootModalState } from '../selectors/modal';
import {
  getDeletedQuoteId,
  getQuoteHistoryLimit,
  getQuoteHistoryOffset,
  getQuoteHistoryItems,
  getScrappedCarsLimit,
  getScrappedCarsOffset,
} from '../selectors/scrappedCars';
import { showToast } from '../actions';
import { SOME_ERROR_OCCURRED } from '../constants';
import { modalClose } from '../actions/modal';
import {
  deleteQuoteError,
  deleteQuoteSuccess,
  getQuoteHistoryError,
  getQuoteHistorySuccess,
  getScrappedCarsError,
  getScrappedCarsSuccess,
} from '../actions/scrappedCars';

export function* deleteQuote() {
  const { modalType } = yield select(getRootModalState());
  const deletedQuoteId = yield select((...args) => getDeletedQuoteId(...args));

  try {
    yield call(client.quotes.deleteQuote, deletedQuoteId);
    const quotes = yield select((...args) => getQuoteHistoryItems(...args));
    const quoteIndex = quotes.findIndex(quote => quote.id === deletedQuoteId);
    yield put(deleteQuoteSuccess({ quoteIndex }));
    yield put(showToast({ message: 'Quote has been successfully deleted.', kind: 'success' }));
    if (modalType === 'deleteQuotePopup') {
      yield put(modalClose());
    }
  } catch (err) {
    if (err.status !== 401) {
      yield put(showToast({ message: err?.error?.messages?.common?.[0] || SOME_ERROR_OCCURRED, kind: 'error' }));
      if (modalType === 'deleteQuotePopup') {
        yield put(modalClose());
      }
    }
    yield put(deleteQuoteError(err));
  }
}

export function* getQuoteHistory() {
  const limit = yield select((...args) => getQuoteHistoryLimit(...args));
  const offset = yield select((...args) => getQuoteHistoryOffset(...args));

  try {
    const { items, total } = yield call(client.quotes.getHistory, { limit, offset });
    yield put(getQuoteHistorySuccess({ items, total }));
  } catch (err) {
    yield put(getQuoteHistoryError(err));
  }
}

export function* getScrappedCars() {
  const limit = yield select((...args) => getScrappedCarsLimit(...args));
  const offset = yield select((...args) => getScrappedCarsOffset(...args));

  try {
    const { items, total } = yield call(client.quotes.getScrapped, { limit, offset });
    yield put(getScrappedCarsSuccess({ items, total }));
  } catch (err) {
    yield put(getScrappedCarsError(err));
  }
}

export default [
  takeLatest(ScrappedCarsTypes.DELETE_QUOTE.REQUEST, deleteQuote),
  takeLatest(ScrappedCarsTypes.GET_QUOTE_HISTORY.REQUEST, getQuoteHistory),
  takeLatest(ScrappedCarsTypes.GET_SCRAPPED_CARS.REQUEST, getScrappedCars),
];
