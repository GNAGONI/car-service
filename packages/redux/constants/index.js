import UserTypes from '../action-types/user';

export const STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const ignoredActionTypes = [
  UserTypes.USER_LOGIN.REQUEST,
  UserTypes.USER_SIGNUP.REQUEST,
  UserTypes.REFRESH_TOKEN.REQUEST,
  UserTypes.USER_LOGOUT.REQUEST,
  UserTypes.FORGOT_PASSWORD.REQUEST,
];

export const DELAY_TIME = 1000;

export const DEFAULT_POSTCODE = 'WC2N 5DU';

export const SUCCESS_BID = 'SUCCESS_BID';

export const SOME_ERROR_OCCURRED = 'There were errors. Please fix them and try again';
export const SUCCESSFULLY_LOGGED_IN = 'You have been successfully logged in';
export const SUCCESSFULLY_SIGNED_UP = 'You have successfully created an account on Car.service';
