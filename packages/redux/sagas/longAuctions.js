import { call, put, takeLatest } from 'redux-saga/effects';

import client from '@car-service/api-client';
import LongAuctionsTypes from '../action-types/longAuctions';

export function* createLongAuction({ payload }) {
  try {
    const response = yield call(client.longAuctions.create, payload);

    yield put({
      type: LongAuctionsTypes.GET_CAR_LONG_AUCTION.SUCCESS,
      payload: response,
    });
  } catch (err) {
    yield put({
      type: LongAuctionsTypes.GET_CAR_LONG_AUCTION.ERROR,
      payload: err,
    });
  }
}

export function* getCarDetailsLonAuction({ payload }) {
  try {
    const response = yield call(client.longAuctions.create, payload);

    yield put({
      type: LongAuctionsTypes.GET_CAR_DETAILS_LONG_AUCTION.SUCCESS,
      payload: response,
    });
  } catch (err) {
    yield put({
      type: LongAuctionsTypes.GET_CAR_LONG_AUCTION.ERROR,
      payload: err,
    });
  }
}

export default [
  takeLatest(LongAuctionsTypes.GET_CAR_LONG_AUCTION.REQUEST, createLongAuction),
  takeLatest(LongAuctionsTypes.GET_CAR_DETAILS_LONG_AUCTION.REQUEST, getCarDetailsLonAuction),
];
