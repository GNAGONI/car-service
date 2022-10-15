import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import UserTypes from '../action-types/user';

import { STATUS } from '../constants';

export const userState = {
  status: STATUS.IDLE,
};

export default {
  user: handleActions(
    {
      // GET_USER_DATA
      [UserTypes.GET_USER_DATA.REQUEST]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
        }),
      [UserTypes.GET_USER_DATA.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          firstName: { $set: payload?.firstName },
          lastName: { $set: payload?.lastName },
          email: { $set: payload?.email },
          phoneNumber: { $set: payload?.phoneNumber },
          dateOfBirth: { $set: payload?.dateOfBirth },
          subscribed: { $set: payload?.isSubscribed },
          status: { $set: STATUS.READY },
        }),
      [UserTypes.GET_USER_DATA.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
        }),

      // SET USER EMAIL
      [UserTypes.SET_EMAIL]: (state, { payload }) =>
        immutable(state, {
          email: { $set: payload.email || '' },
        }),

      // SET USER FIRST NAME
      [UserTypes.SET_FIRST_NAME]: (state, { payload }) =>
        immutable(state, {
          firstName: { $set: payload?.firstName || '' },
        }),

      // SET USER LAST NAME
      [UserTypes.SET_LAST_NAME]: (state, { payload }) =>
        immutable(state, {
          lastName: { $set: payload?.lastName || '' },
        }),

      // SET USER PHONE NUMBER
      [UserTypes.SET_PHONE_NUMBER]: (state, { payload }) =>
        immutable(state, {
          phoneNumber: { $set: payload.phoneNumber || '' },
        }),

      // SET USER CONFIRMATION FLAG
      [UserTypes.SET_CONFIRMATION_VALUE]: (state, { payload }) =>
        immutable(state, {
          confirmationValue: { $set: payload.confirmationValue || false },
        }),
    },
    userState,
  ),
};
