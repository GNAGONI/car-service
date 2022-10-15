import { takeLatest } from 'redux-saga/effects';
import { Router } from 'server/pages';
import { scrollToTop } from 'lib/page';

import UserTypes from '@car-service/redux/action-types/user';

export function* redirectToSetting() {
  Router.pushRoute('/my-account/settings').then(() => scrollToTop());
}

export function* redirectToSignUpPage() {
  Router.pushRoute('/register/customer');
}

export function* redirectToSignInPage() {
  Router.pushRoute('/sign-in');
}

export function* redirectToMyAccount({ payload: { redirect } }) {
  if (redirect) {
    Router.pushRoute('/my-account');
  }
}

export function* redirectToRoute({ payload: { redirect } }) {
  if (redirect) {
    Router.pushRoute(redirect);
  }
}

export function* redirectToRoot() {
  Router.pushRoute('/');
}

export default [
  takeLatest(
    [UserTypes.CHANGE_PASSWORD.SUCCESS, UserTypes.PERSONAL_DATA.SUCCESS, UserTypes.EDIT_PROFILE.SUCCESS],
    redirectToSetting,
  ),
  takeLatest(UserTypes.USER_SIGNUP.SUCCESS, redirectToMyAccount),
  takeLatest(UserTypes.USER_LOGIN.SUCCESS, redirectToRoute),
  takeLatest([UserTypes.DELETE_ACCOUNT.SUCCESS], redirectToRoot),
  takeLatest(UserTypes.USER_LOGOUT.SUCCESS, redirectToRoute),
  takeLatest(UserTypes.PERSONAL_DATA.SUCCESS, redirectToSetting),
  takeLatest([UserTypes.RESET_PASSWORD.SUCCESS, UserTypes.REFRESH_TOKEN.ERROR], redirectToSignInPage),
];
