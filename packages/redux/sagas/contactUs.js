import { call, put, takeLatest } from 'redux-saga/effects';

import client from '@car-service/api-client';
import ActionType from '../action-types/contactUs';

function* sendEnquiry({
  payload: {
    data,
    actions: { setErrors },
  },
}) {
  try {
    yield call(client.enquiry.sendEnquiry, data);
    yield put({
      type: ActionType.SET_CONTACT_US_ENQUIRY.SUCCESS,
    });
  } catch (err) {
    if (err.status !== 401) {
      yield setErrors(err?.error?.messages);
    }
    yield put({
      type: ActionType.SET_CONTACT_US_ENQUIRY.ERROR,
      payload: err,
    });
  }
}

export default [takeLatest(ActionType.SET_CONTACT_US_ENQUIRY.REQUEST, sendEnquiry)];
