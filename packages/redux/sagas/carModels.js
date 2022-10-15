import { call, put, takeLatest } from 'redux-saga/effects';
import client from '@car-service/api-client';
import ActionType from '../action-types/carModels';

function* loadCarModels({ payload }) {
  try {
    const response = yield call(client.carModels.getCarModelsData, payload);

    yield put({
      type: ActionType.GET_CAR_MODELS_LIST.SUCCESS,
      payload: response,
    });
  } catch (err) {
    yield put({
      type: ActionType.GET_CAR_MODELS_LIST.ERROR,
      payload: err,
    });
  }
}

export default [takeLatest(ActionType.GET_CAR_MODELS_LIST.REQUEST, loadCarModels)];
