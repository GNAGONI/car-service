import { takeLatest } from 'redux-saga/effects';
import { setCookie, removeCookie } from 'lib/cookie';

import client from '@car-service/api-client';
import UserTypes from '@car-service/redux/action-types/user';

export function* setTokenToCookies({ payload: { token = '' } }) {
  setCookie('token', token);
}

export function* removeTokenFromCookies() {
  removeCookie('token');
}

export function* authenticate({ payload: { token } }) {
  client.apiCilent.token = token;
}

/**
 * User Sagas
 */
export default [
  takeLatest(
    [
      UserTypes.USER_LOGIN.SUCCESS,
      UserTypes.USER_SIGNUP.SUCCESS,
      UserTypes.REFRESH_TOKEN.SUCCESS,
      UserTypes.CHANGE_PASSWORD.SUCCESS,
    ],
    setTokenToCookies,
  ),
  takeLatest(
    [UserTypes.USER_LOGOUT.SUCCESS, UserTypes.DELETE_ACCOUNT.SUCCESS, UserTypes.REFRESH_TOKEN.ERROR],
    removeTokenFromCookies,
  ),
  takeLatest(
    [
      UserTypes.USER_LOGIN.SUCCESS,
      UserTypes.USER_SIGNUP.SUCCESS,
      UserTypes.USER_LOGOUT.SUCCESS,
      UserTypes.DELETE_ACCOUNT.SUCCESS,
      UserTypes.REFRESH_TOKEN.SUCCESS,
      UserTypes.AUTHENTICATE,
      UserTypes.CHANGE_PASSWORD.SUCCESS,
    ],
    authenticate,
  ),
];
