import { call, put, takeLatest, take, race, cancelled, select, takeEvery } from 'redux-saga/effects';

import client from '@car-service/api-client';
import UserTypes from '../action-types/user';
import ToastTypes from '../action-types/toasts';
import AuctionTypes from '../action-types/auction';
import AuctionModalTypes from '../action-types/modal';
import setFormikErrors from '../lib/setFormikErrors';
import { SUCCESSFULLY_LOGGED_IN, SUCCESSFULLY_SIGNED_UP, SOME_ERROR_OCCURRED } from '../constants';
import { getRootModalState } from '../selectors/modal';
import { modalClose } from '../actions/modal';
import {
  userLoginSuccess,
  userLoginError,
  refreshTokenSuccess,
  refreshTokenError,
  getUserDataSuccess,
  getUserDataError,
  userLogoutSuccess,
  userLogoutError,
  userSignupSuccess,
  userSignupError,
  changePasswordSuccess,
  changePasswordError,
  forgotPasswordSuccess,
  forgotPasswordError,
  showToast,
  personalDataSuccess,
  personalDataError,
  editProfileSuccess,
  editProfileError,
  deleteAccountSuccess,
  deleteAccountError,
  resetPasswordSuccess,
  resetPasswordError,
  refreshTokenRequest,
  userLogoutRequest,
  getUserDataRequest,
} from '../actions';
import { getFailType, getSuccessType, requestAction } from '../lib/helper';

const errorToastAction = {
  type: ToastTypes.SHOW_TOAST,
  payload: {
    message: SOME_ERROR_OCCURRED,
    kind: 'error',
  },
};

export function* login({
  payload: {
    data,
    redirect,
    actions: { setErrors, setSubmitting },
  },
}) {
  try {
    setSubmitting(true);
    const { userJWT: token } = yield call(client.auth.login, data);

    yield put(userLoginSuccess({ token, redirect }));

    yield put(
      showToast({
        message: SUCCESSFULLY_LOGGED_IN,
        kind: 'success',
      }),
    );
  } catch (err) {
    setFormikErrors(setErrors, err?.error?.messages);

    yield put(userLoginError(err));

    yield put(errorToastAction);
  } finally {
    setSubmitting(false);
  }
}

export function* refreshToken() {
  try {
    const { userJWT: token } = yield call(client.auth.refreshToken);

    yield put(refreshTokenSuccess({ token }));
  } catch (err) {
    yield put(refreshTokenError(err));
  }
}

export function* getUserData() {
  try {
    const data = yield call(client.user.getUserProfile);

    yield put(getUserDataSuccess(data));
  } catch (err) {
    yield put(getUserDataError(err));
  }
}

export function* logout({ payload: { redirect } }) {
  try {
    yield call(client.auth.logout);

    yield put(userLogoutSuccess({ token: '', redirect }));
  } catch (err) {
    yield put(userLogoutError(err));
  }
}

export function* signUp({
  payload: {
    data,
    actions: { setErrors, setSubmitting },
    redirect,
  },
}) {
  try {
    setSubmitting(true);
    const { userJWT: token } = yield call(client.auth.customerSignUp, data);

    yield put(userSignupSuccess({ token, redirect }));

    yield put(
      showToast({
        message: SUCCESSFULLY_SIGNED_UP,
        kind: 'success',
      }),
    );
  } catch (err) {
    setFormikErrors(setErrors, err?.error?.messages);

    yield put(userSignupError(err));

    yield put(errorToastAction);
    setSubmitting(false);
  }
}

function* watchUserChannel() {
  let socket;
  try {
    // TODO: use it for personal channel when it will be implementing
    // const userJWT = yield select((...args) => getUserTokenSelector(...args))
    // socket = yield call(createWebSocketConnection, `${process.env.SOCKET_URL}/messages?userJWT=${userJWT}`)
    // const socketChannel = yield call(createSocketChannel, socket)
    //
    // while (true) {
    //   const action = yield take(socketChannel);
    //   yield put(action);
    // }
  } catch (e) {
    console.log(e);
  } finally {
    if (yield cancelled()) {
      socket.close();
    }
  }
}

function* startStopUserChannel() {
  while (true) {
    yield take(UserTypes.WATCH_USER_CHANNEL.PROGRESS);
    yield race({
      task: call(watchUserChannel),
      cancel: take(AuctionTypes.WATCH_USER_CHANNEL.FINISH),
    });
  }
}

export function* changePassword({
  payload: {
    data,
    actions: { setErrors, setSubmitting },
  },
}) {
  try {
    setSubmitting(true);
    const { userJWT: token } = yield call(client.auth.changePassword, data);
    yield put(
      showToast({
        message: 'You have successfully updated your password on your account',
        kind: 'success',
      }),
    );

    yield put(changePasswordSuccess({ token }));
    setSubmitting(false);
  } catch (err) {
    if (err.status !== 401) {
      setFormikErrors(setErrors, err?.error?.messages);

      yield put(
        showToast({
          message: 'There were errors. Please fix them and try again',
          kind: 'error',
        }),
      );
      setSubmitting(false);
    }
    yield put(changePasswordError(err));
  }
}

export function* forgotPassword({ payload: { data, actions = {} } }) {
  const { modalType } = yield select(getRootModalState());

  try {
    const { resetForm } = actions;

    yield call(client.auth.forgotPassword, data);

    yield put(forgotPasswordSuccess());

    yield put(
      showToast({
        message:
          'We have sent you a password reset link to your email. Click the link in the email and follow the instructions to enter a new password',
        kind: 'success',
      }),
    );
    resetForm();
    if (modalType === 'forgotPassword') {
      yield put({ type: AuctionModalTypes.CLOSE_MODAL });
    }
  } catch (err) {
    if (err.status !== 401) {
      const setErrors = actions?.setErrors;
      setFormikErrors(setErrors, err?.error?.messages);
      if (modalType === 'forgotPassword') {
        yield put({ type: AuctionModalTypes.CLOSE_MODAL });
      }
    }
    yield put(forgotPasswordError(err));
  }
}

export function* resetPassword({
  payload: {
    data,
    actions: { setErrors, setSubmitting },
    redirect,
  },
}) {
  try {
    setSubmitting(true);
    yield call(client.auth.resetPassword, data);

    yield put(
      showToast({ message: 'You have successfully reset and updated your password on your account', kind: 'success' }),
    );
    yield put(resetPasswordSuccess({ redirect }));
    yield put(userLogoutRequest({ redirect }));

    setSubmitting(false);
  } catch (err) {
    if (err.status !== 401) {
      setFormikErrors(setErrors, err?.error?.messages);

      yield put(showToast({ message: 'There were errors. Please fix them and try again', kind: 'error' }));
      setSubmitting(false);
    }
    yield put(resetPasswordError(err));
  }
}

export function* editProfile({
  payload: {
    data,
    actions: { setErrors, setSubmitting },
  },
}) {
  try {
    setSubmitting(true);
    yield call(client.customer.editProfile, data);

    yield put(showToast({ message: 'Your profile details has been updated', kind: 'success' }));

    yield put(editProfileSuccess());
    yield put(getUserDataRequest());
    setSubmitting(false);
  } catch (err) {
    if (err.status !== 401) {
      setFormikErrors(setErrors, err?.error?.messages);
      if (err?.error?.messages?.dateOfBirth) {
        setErrors({ month: err.error.messages.dateOfBirth });
      }

      yield put(showToast({ message: 'There were errors. Please fix them and try again', kind: 'error' }));
      setSubmitting(false);
    }
    yield put(editProfileError(err));
  }
}

export function* deleteAccount({ payload: { redirect } }) {
  const { modalType } = yield select(getRootModalState());

  try {
    yield call(client.user.deleteAccount);

    yield put(
      showToast({ message: 'Your account has been permanently deleted and can not be recovered.', kind: 'success' }),
    );

    yield put(deleteAccountSuccess({ redirect }));

    if (modalType === 'deleteAccountPopup') {
      yield put(modalClose());
    }
  } catch (err) {
    if (err.status !== 401) {
      yield put(showToast({ message: 'There were errors. Please fix them and try again', kind: 'error' }));

      if (modalType === 'deleteAccountPopup') {
        yield put(modalClose());
      }
    }
    yield put(deleteAccountError(err));
  }
}

export function* requestPersonalData({ payload: { redirect } }) {
  const { modalType } = yield select(getRootModalState());

  try {
    yield call(client.user.requestPersonalData);

    yield put(
      showToast({
        message: 'We have received your request for your personal data and will be in touch with you shortly.',
        kind: 'success',
      }),
    );
    if (modalType === 'requestPersonalDataPopup') {
      yield put(modalClose());
    }

    yield put(personalDataSuccess({ redirect }));
  } catch (err) {
    if (err.status !== 401) {
      yield put(
        showToast({
          message: err?.error?.messages?.common || 'There were errors. Please fix them and try again',
          kind: 'error',
        }),
      );

      if (modalType === 'requestPersonalDataPopup') {
        yield put(modalClose());
      }
    }
    yield put(personalDataError(err));
  }
}

function* requestMiddleware(action) {
  const { fail } = yield race({
    success: take(getSuccessType(action)),
    fail: take(getFailType(action)),
  });

  if (fail && fail.payload && fail.payload.status === 401) {
    yield put(refreshTokenRequest());

    const { success } = yield race({
      success: take(UserTypes.REFRESH_TOKEN.SUCCESS),
      fail: take(UserTypes.REFRESH_TOKEN.ERROR),
    });

    if (success) {
      yield put(action);
    } else {
      yield put(userLogoutRequest());
    }
  }
}

/**
 * User Sagas
 */
export default [
  takeLatest(UserTypes.USER_LOGIN.REQUEST, login),
  takeLatest(UserTypes.REFRESH_TOKEN.REQUEST, refreshToken),
  takeLatest(UserTypes.GET_USER_DATA.REQUEST, getUserData),
  takeLatest(UserTypes.USER_LOGOUT.REQUEST, logout),
  takeLatest(UserTypes.USER_SIGNUP.REQUEST, signUp),
  takeLatest(UserTypes.CHANGE_PASSWORD.REQUEST, changePassword),
  takeLatest(UserTypes.FORGOT_PASSWORD.REQUEST, forgotPassword),
  takeLatest(UserTypes.RESET_PASSWORD.REQUEST, resetPassword),
  takeLatest(UserTypes.EDIT_PROFILE.REQUEST, editProfile),
  takeLatest(UserTypes.DELETE_ACCOUNT.REQUEST, deleteAccount),
  takeLatest(UserTypes.PERSONAL_DATA.REQUEST, requestPersonalData),
  takeEvery(requestAction, requestMiddleware),
  startStopUserChannel(),
];
