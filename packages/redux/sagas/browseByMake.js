import { call, put, takeLatest } from 'redux-saga/effects';
import client from '@car-service/api-client';
import ActionType from '../action-types/browseByMake';

function* loadBrowseByMakeAuction() {
  try {
    const data = yield call(client.browseByMake.getBrowseByMakeAuctions);

    yield put({
      type: ActionType.GET_BROWSE_BY_MAKE_AUCTIONS.SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: ActionType.GET_BROWSE_BY_MAKE_AUCTIONS.ERROR,
      payload: err,
    });
  }
}

export default [takeLatest(ActionType.GET_BROWSE_BY_MAKE_AUCTIONS.REQUEST, loadBrowseByMakeAuction)];
