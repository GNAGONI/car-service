import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import UserTypes from '../action-types/user';

import { STATUS } from '../constants';

export const userState = {
  type: null,
  token: null,
  isAuthenticated: false,
  status: STATUS.IDLE,
  refreshTokenStatus: STATUS.IDLE,
};

export default {
  userAuth: handleActions(
    {
      // AUTHENTICATE
      [UserTypes.AUTHENTICATE]: (state, { payload: { token } }) =>
        immutable(state, {
          token: { $set: token || '' },
          isAuthenticated: { $set: !!token },
        }),

      [UserTypes.GET_USER_DATA.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          type: { $set: payload?.type },
        }),

      // LOGIN
      [UserTypes.USER_LOGIN.REQUEST]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
        }),
      [UserTypes.USER_LOGIN.SUCCESS]: (state, { payload: { token } }) =>
        immutable(state, {
          token: { $set: token },
          isAuthenticated: { $set: true },
          status: { $set: STATUS.READY },
        }),
      [UserTypes.USER_LOGIN.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
        }),

      // REFRESH_TOKEN
      [UserTypes.REFRESH_TOKEN.REQUEST]: state =>
        immutable(state, {
          refreshTokenStatus: { $set: STATUS.RUNNING },
        }),
      [UserTypes.REFRESH_TOKEN.SUCCESS]: (state, { payload: { token } }) =>
        immutable(state, {
          refreshTokenStatus: { $set: STATUS.SUCCESS },
          token: { $set: token },
        }),
      [UserTypes.REFRESH_TOKEN.ERROR]: state =>
        immutable(state, {
          refreshTokenStatus: { $set: STATUS.ERROR },
        }),

      // LOGOUT
      [UserTypes.USER_LOGOUT.REQUEST]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
          token: { $set: null },
          isAuthenticated: { $set: false },
        }),
      [UserTypes.USER_LOGOUT.SUCCESS]: () => userState,
      [UserTypes.USER_LOGOUT.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
        }),

      // USER_SIGNUP
      [UserTypes.USER_SIGNUP.REQUEST]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
        }),
      [UserTypes.USER_SIGNUP.SUCCESS]: (state, { payload: { token } }) =>
        immutable(state, {
          token: { $set: token },
          isAuthenticated: { $set: true },
          status: { $set: STATUS.IDLE },
        }),
      [UserTypes.USER_SIGNUP.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
        }),

      [UserTypes.DELETE_ACCOUNT.SUCCESS]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
          token: { $set: null },
          isAuthenticated: { $set: false },
        }),

      [UserTypes.CHANGE_PASSWORD.SUCCESS]: (state, { payload: { token } }) =>
        immutable(state, {
          token: { $set: token || '' },
        }),
    },
    userState,
  ),
};
