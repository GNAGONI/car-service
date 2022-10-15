import { put, takeLatest, delay } from 'redux-saga/effects';

import ToastTypes from '../action-types/toasts';

export function* showToast({ payload }) {
  const timeout = payload?.timeout || 5000;

  yield delay(timeout);
  yield put({ type: ToastTypes.HIDE_TOAST });
}

export default [takeLatest(ToastTypes.SHOW_TOAST, showToast)];
