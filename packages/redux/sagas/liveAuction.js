import { call, put, takeLatest, select } from 'redux-saga/effects';
import client from '@car-service/api-client';
import { getCarsListPaging, getCarsListFilter } from '../selectors/liveAuction';

import LiveAuction from '../action-types/liveAuction';

export function* loadCarList({ payload }) {
  try {
    const response = yield call(client.liveAuction.getLiveAuctionCarList, payload);

    const { items, totalNumberOfAuctions, limit, offset } = response;

    yield put({
      type: LiveAuction.GET_LIVE_AUCTION_CAR_LIST.SUCCESS,
      payload: items,
    });

    yield put({
      type: LiveAuction.SET_LIVE_AUCTION_CAR_LIST_PAGING,
      payload: { totalNumberOfAuctions, limit, offset },
    });
  } catch ({ error }) {
    // TODO: refactor set just error in payload
    yield put({
      type: LiveAuction.GET_LIVE_AUCTION_CAR_LIST.ERROR,
      payload: error && error.messages,
    });
  }
}

export function* resetCarList() {
  yield put({
    type: LiveAuction.RESET_LIVE_AUCTION_CAR_LIST_PAGING,
  });

  const paging = yield select(getCarsListPaging());
  const filter = yield select(getCarsListFilter());

  try {
    const response = yield call(client.liveAuction.getLiveAuctionCarList, { ...filter, ...paging });

    const { items, totalNumberOfAuctions, limit, offset } = response;

    yield put({
      type: LiveAuction.DELETE_LIVE_AUCTION_CAR_LIST,
    });

    yield put({
      type: LiveAuction.GET_LIVE_AUCTION_CAR_LIST.SUCCESS,
      payload: items,
    });

    yield put({
      type: LiveAuction.SET_LIVE_AUCTION_CAR_LIST_PAGING,
      payload: { totalNumberOfAuctions, limit, offset },
    });
  } catch ({ error }) {
    // TODO: refactor set just error in payload
    yield put({
      type: LiveAuction.GET_LIVE_AUCTION_CAR_LIST.ERROR,
      payload: error && error.messages,
    });
  }
}

export default [
  takeLatest(LiveAuction.GET_LIVE_AUCTION_CAR_LIST.REQUEST, loadCarList),
  takeLatest(LiveAuction.RESET_LIVE_AUCTION_CAR_LIST, resetCarList),
];
