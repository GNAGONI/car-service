import { takeLatest } from 'redux-saga/effects';
import { Router } from 'server/pages';
import ActionType from '@car-service/redux/action-types/contactUs';

function* redirectEnquiry() {
  yield Router.pushRoute('/contact/thank-you');
}

export default [takeLatest(ActionType.SET_CONTACT_US_ENQUIRY.SUCCESS, redirectEnquiry)];
