import { call, put, takeLatest, select, take, race, cancelled, takeEvery } from 'redux-saga/effects';
import client from '@car-service/api-client';
import AuctionTypes from '../action-types/auction';
import AuctionsTypes from '../action-types/auctions';
import AuctionModalTypes from '../action-types/modal';
import AuctionMessageTypes from '../action-types/message';
import { getAuctionData, getAuctionId } from '../selectors/auction';
import { SUCCESS_BID } from '../constants';
import { createSocketChannel, createWebSocketConnection } from '../lib/socket-helper';
import { auctionsSelector } from '../selectors/auctions';

export function* getAuction({ payload: { id } }) {
  try {
    const data = yield call(client.auction.getAuction, id);

    yield put({
      type: AuctionTypes.GET_AUCTION.SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: AuctionTypes.GET_AUCTION.ERROR,
      payload: err,
    });
  }
}

export function* putBid({ payload }) {
  const auctionId = yield select(getAuctionId());

  try {
    const data = yield call(client.auction.placeBid, auctionId, { amount: payload });

    yield put({
      type: AuctionTypes.PLACE_BID.SUCCESS,
      payload: data,
    });

    yield put({
      type: AuctionModalTypes.CLOSE_MODAL,
    });

    yield put({
      type: AuctionMessageTypes.SHOW_MESSAGE,
      payload: SUCCESS_BID,
    });
  } catch (err) {
    yield put({
      type: AuctionTypes.PLACE_BID.ERROR,
      payload: err,
    });
  }
}

export function* updateBId({ data: { amount, objectId } }) {
  const { id } = yield select(getAuctionData());
  const auctions = yield select((...args) => auctionsSelector(...args));

  if (objectId === id) {
    yield put({
      type: AuctionTypes.UPDATE_AUCTION_BID,
      payload: { amount },
    });
  }
  if (auctions.length && auctions.find(({ id }) => id === objectId)) {
    const index = auctions.findIndex(({ id }) => id === objectId);
    yield put({
      type: AuctionsTypes.UPDATE_AUCTIONS_BID,
      payload: { index, amount },
    });
  }
}

function* watchAuction(auctionId) {
  if (auctionId) {
    let socket;
    try {
      socket = yield call(createWebSocketConnection, `${process.env.SOCKET_URL}/auctions/${auctionId}`);
      const events = { 'auction.bidPosted': AuctionTypes.BID_HAS_BEEN_UPDATED };
      const socketChannel = yield call(createSocketChannel, socket, events);

      while (true) {
        const action = yield take(socketChannel);
        yield put(action);
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (yield cancelled() && socket) {
        socket.close();
      }
    }
  }
}

function* startStopWatchingAuction({ payload }) {
  yield race({
    task: call(watchAuction, payload),
    cancel: take(AuctionTypes.WATCH_AUCTION.FINISH),
  });
}

export default [
  takeLatest(AuctionTypes.GET_AUCTION.REQUEST, getAuction),
  takeLatest(AuctionTypes.PLACE_BID.REQUEST, putBid),
  takeLatest(AuctionTypes.BID_HAS_BEEN_UPDATED, updateBId),
  takeEvery(AuctionTypes.WATCH_AUCTION.PROGRESS, startStopWatchingAuction),
];
