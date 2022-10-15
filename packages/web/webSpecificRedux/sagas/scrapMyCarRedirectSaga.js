import { takeLatest, select, put } from 'redux-saga/effects';
import { Router } from 'server/pages';
import { setCookie, removeCookie, getCookie } from 'lib/cookie';
import { redirect } from 'lib/routes';
import { createQuoteRequest, dropQuote } from '@car-service/redux/actions/quote';
import QuoteTypes from '@car-service/redux/action-types/quote';
import UserTypes from '@car-service/redux/action-types/user';
import { getQuoteStatus } from '@car-service/redux/selectors/quote';
import { QUOTE_STATUS, QUOTE_ROUTES } from 'modules/ScrapMyCar/QuoteProcess/constants';
import { scrollToTop } from '../../lib/page';

const setQuoteDataToCookies = (quoteStatus = '') => {
  setCookie('quoteStatus', quoteStatus);
};

const removeQuoteDataFromCookies = () => {
  removeCookie('quoteStatus');
};

const getStepRoute = (quoteStatus = '', requestedQuoteStatus = '') => {
  const isRequestedStatusValid = requestedStatusCheck(quoteStatus, requestedQuoteStatus);
  const status = isRequestedStatusValid ? requestedQuoteStatus : quoteStatus;
  switch (status) {
    case QUOTE_STATUS.DRAFT:
      return QUOTE_ROUTES.ENTER_DETAILS;
    case QUOTE_STATUS.CREATED:
      return QUOTE_ROUTES.ONLINE_QUOTATION;
    case QUOTE_STATUS.ARRANGE:
      return QUOTE_ROUTES.ARRANGE_COLLECTION;
    case QUOTE_STATUS.PENDING_PAYMENT:
      return QUOTE_ROUTES.PAYMENT_METHOD;
    case QUOTE_STATUS.CONFIRMED:
      return QUOTE_ROUTES.CONFIRMATION;
    case QUOTE_STATUS.EXPIRED:
      return QUOTE_ROUTES.CUSTOMER_PORTAL_QUOTE_HISTORY;
    case QUOTE_STATUS.PAID:
      return QUOTE_ROUTES.CUSTOMER_PORTAL_SCRAPPED_CARS;
    case QUOTE_STATUS.COLLECTION:
      return QUOTE_ROUTES.CUSTOMER_PORTAL_SCRAPPED_CARS;
    case QUOTE_STATUS.DELETED:
      return QUOTE_ROUTES.CUSTOMER_PORTAL_SCRAPPED_CARS;
    case QUOTE_STATUS.COMPLETED:
      return QUOTE_ROUTES.CUSTOMER_PORTAL_SCRAPPED_CARS;
    case QUOTE_STATUS.UNAUTHORIZED:
      return QUOTE_ROUTES.LOGIN;
    case QUOTE_STATUS.FORBIDDEN:
      return QUOTE_ROUTES.HOMEPAGE;
    default:
      return QUOTE_ROUTES.HOMEPAGE;
  }
};

const getStatusIndex = status => {
  const quoteStatuses = [
    QUOTE_STATUS.DRAFT,
    QUOTE_STATUS.CREATED,
    QUOTE_STATUS.ARRANGE,
    QUOTE_STATUS.PENDING_PAYMENT,
    QUOTE_STATUS.CONFIRMED,
  ];
  return quoteStatuses.indexOf(status);
};

const isRequestedStatusLessThanCurrent = (quoteStatusIndex, requestedQuoteStatusIndex) => {
  const isQuoteStatusValid = quoteStatusIndex > -1;
  const isRequestedQuoteStatusValid = requestedQuoteStatusIndex > -1;
  return isQuoteStatusValid && isRequestedQuoteStatusValid && requestedQuoteStatusIndex < quoteStatusIndex;
};

const isRequestedStatusLessOrEqualThanCurrent = (quoteStatusIndex, requestedQuoteStatusIndex) => {
  const isQuoteStatusValid = quoteStatusIndex > -1;
  const isRequestedQuoteStatusValid = requestedQuoteStatusIndex > -1;
  return isQuoteStatusValid && isRequestedQuoteStatusValid && requestedQuoteStatusIndex <= quoteStatusIndex;
};

export const requestedStatusCheck = (quoteStatus = '', requestedQuoteStatus = '') => {
  const quoteStatusIndex = getStatusIndex(quoteStatus);
  const requestedQuoteStatusIndex = getStatusIndex(requestedQuoteStatus);
  return isRequestedStatusLessOrEqualThanCurrent(quoteStatusIndex, requestedQuoteStatusIndex);
};

export const requestedStatusCheckForData = (quoteStatus = '', requestedQuoteStatus = '') => {
  const quoteStatusIndex = getStatusIndex(quoteStatus);
  const requestedQuoteStatusIndex = getStatusIndex(requestedQuoteStatus);
  return isRequestedStatusLessThanCurrent(quoteStatusIndex, requestedQuoteStatusIndex);
};

export const checkQuoteStatus = (ctx, baseStepRoute = '/', requestedQuoteStatus = '', currentRoute) => {
  const quoteStatus = getCookie('quoteStatus', ctx.req);
  if (quoteStatus && requestedQuoteStatus) {
    const stepRoute = getStepRoute(quoteStatus, requestedQuoteStatus);
    if (currentRoute !== stepRoute) {
      redirect(ctx, stepRoute);
    }
  } else {
    redirect(ctx, baseStepRoute);
  }
};

export function* redirectToStep(stepRouteToRedirect) {
  const quoteStatus = yield select(getQuoteStatus);
  yield setQuoteDataToCookies(quoteStatus);

  Router.pushRoute(stepRouteToRedirect).then(() => scrollToTop());
}

export function* cancelQuote() {
  yield removeQuoteDataFromCookies();
  Router.pushRoute(QUOTE_ROUTES.HOMEPAGE);
}

export function* dropQuoteData() {
  yield removeQuoteDataFromCookies();
}

export function* continueWithQuoteSuccess() {
  const quoteStatus = yield select(getQuoteStatus);
  const stepRouteToRedirect = getStepRoute(quoteStatus);
  yield redirectToStep(stepRouteToRedirect);
}

export function* redirectToStepByQuoteStatus() {
  const quoteStatus = yield select(getQuoteStatus);
  yield setQuoteDataToCookies(quoteStatus);
  const stepRouteToRedirect = getStepRoute(quoteStatus);
  yield redirectToStep(stepRouteToRedirect);
}

export function* handleUnauthorizedQuote() {
  const quoteStatus = yield select(getQuoteStatus);
  if (quoteStatus === QUOTE_STATUS.UNAUTHORIZED) {
    yield put(createQuoteRequest({ actions: { setSubmitting: () => {} } }));
  }
}

export function* handleLogout() {
  yield put(dropQuote());
}

export default [
  takeLatest([QuoteTypes.CREATE_QUOTE.SUCCESS], redirectToStepByQuoteStatus),
  takeLatest([QuoteTypes.ENTER_DETAILS.SUCCESS], redirectToStepByQuoteStatus),
  takeLatest([QuoteTypes.SET_ONLINE_QUOTE.actionName], redirectToStepByQuoteStatus),
  takeLatest([QuoteTypes.COMPLETE_ARRANGE_COLLECTION.actionName], redirectToStepByQuoteStatus),
  takeLatest([QuoteTypes.SET_PAYMENT_METHOD.SUCCESS], redirectToStepByQuoteStatus),
  takeLatest([QuoteTypes.HANDLE_QUOTE_FORBIDDEN_STATUS.actionName], redirectToStepByQuoteStatus),
  takeLatest([QuoteTypes.HANDLE_QUOTE_UNAUTHORIZED_STATUS.actionName], redirectToStepByQuoteStatus),
  takeLatest([QuoteTypes.CANCEL_QUOTE.actionName], cancelQuote),
  takeLatest([QuoteTypes.DROP_QUOTE.actionName], dropQuoteData),
  takeLatest([QuoteTypes.CONTINUE_WITH_QUOTE.SUCCESS], continueWithQuoteSuccess),
  takeLatest([UserTypes.USER_LOGIN.SUCCESS], handleUnauthorizedQuote),
  takeLatest([UserTypes.USER_LOGOUT.SUCCESS], handleLogout),
];
