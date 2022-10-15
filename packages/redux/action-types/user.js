import keyMirror from 'keymirror';
import { createAsyncActionSet, createDelayedActionsSet } from '../lib/action-helper';

const syncActionSet = keyMirror({
  SET_PHONE_NUMBER: undefined,
  SET_EMAIL: undefined,
  SET_FIRST_NAME: undefined,
  SET_LAST_NAME: undefined,
  SET_CONFIRMATION_VALUE: undefined,
  AUTHENTICATE: undefined,
});

const asyncActionSet = {
  USER_LOGIN: createAsyncActionSet('USER_LOGIN'),
  REFRESH_TOKEN: createAsyncActionSet('REFRESH_TOKEN'),
  USER_LOGOUT: createAsyncActionSet('USER_LOGOUT'),
  GET_USER_DATA: createAsyncActionSet('GET_USER_DATA'),
  USER_SIGNUP: createAsyncActionSet('USER_SIGNUP'),
  WATCH_USER_CHANNEL: createDelayedActionsSet('WATCH_USER_CHANNEL'),
  CHANGE_PASSWORD: createAsyncActionSet('CHANGE_PASSWORD'),
  FORGOT_PASSWORD: createAsyncActionSet('FORGOT_PASSWORD'),
  RESET_PASSWORD: createAsyncActionSet('RESET_PASSWORD'),
  EDIT_PROFILE: createAsyncActionSet('EDIT_PROFILE'),
  DELETE_ACCOUNT: createAsyncActionSet('DELETE_ACCOUNT'),
  PERSONAL_DATA: createAsyncActionSet('PERSONAL_DATA'),
};

export default {
  ...syncActionSet,
  ...asyncActionSet,
};
