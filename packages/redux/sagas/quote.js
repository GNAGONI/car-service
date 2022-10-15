import { call, put, takeLatest, select } from 'redux-saga/effects';
import moment from 'moment';

import client from '@car-service/api-client';
import { QUOTE_STATUS, QUOTE_ROUTES } from '@car-service/web/modules/ScrapMyCar/QuoteProcess/constants';
import setFormikErrors from '../lib/setFormikErrors';
import {
  getRegistrationNumber,
  getPostcode,
  getQuoteId,
  getPhoneNumber,
  getQuoteStatus,
  getUserPersonalDetails,
  getUserAddressDetails,
  getHasAccount,
  getPaymentDetails,
  getIsAddressManual,
} from '../selectors/quote';
import { getUserEmailSelector, getUserFirstNameSelector, getUserLastNameSelector } from '../selectors/user';
import QuoteTypes from '../action-types/quote';
import {
  createQuoteSuccess,
  createQuoteError,
  handleQuoteForbiddenStatus,
  handleQuoteUnauthorizedStatus,
  enterDetailsError,
  enterDetailsSuccess,
  arrangeCollectionSuccess,
  arrangeCollectionError,
  getAddressesByPostcodeError,
  getAddressesByPostcodeSuccess,
  setPaymentMethodSuccess,
  setPaymentMethodError,
  completeArrangeCollection,
} from '../actions/quote';
import { userLoginRequest } from '../actions/user';
import { showToast } from '../actions/toasts';
import { continueWithQuoteError, continueWithQuoteSuccess } from '../actions';
import { isUserAuthenticatedSelector } from '../selectors/userAuth';

export function* createQuote({
  payload: {
    actions: { setErrors, setSubmitting },
  },
}) {
  try {
    setSubmitting(true);
    const registrationNumber = yield select(getRegistrationNumber);
    const postcode = yield select(getPostcode);
    const { scrapQuoteId, quoteToken, status } = yield call(client.scrapCarQuote.create, {
      registration: registrationNumber,
      postcode,
    });
    yield put(createQuoteSuccess({ quoteId: scrapQuoteId, quoteToken, quoteStatus: status }));
    setSubmitting(false);
  } catch (err) {
    const isAuthenticated = yield select(isUserAuthenticatedSelector);
    if (err.status === 401 && isAuthenticated) {
      yield put(createQuoteError(err));
    } else if (err.status === 401 && !isAuthenticated) {
      yield put(
        showToast({
          message:
            'These details are currently active in another quote, please login to your account in order to continue',
          kind: 'success',
        }),
      );
      yield put(handleQuoteUnauthorizedStatus());
    } else if (err.status === 403) {
      yield put(
        showToast({ message: 'Sorry, car with this registration number has already been scrapped', kind: 'error' }),
      );
      yield put(handleQuoteForbiddenStatus());
      setSubmitting(false);
    } else {
      const errorMessages = err?.error?.messages;
      const commonErrorMessages = errorMessages?.common?.[0];
      if (commonErrorMessages) {
        yield put(showToast({ message: `${commonErrorMessages}`, kind: 'error' }));
      } else {
        const { registration: registrationNumber, ...restErrorMessages } = errorMessages;
        setFormikErrors(setErrors, { registrationNumber, ...restErrorMessages });
      }
      setSubmitting(false);
    }
  }
}

export function* enterDetails({
  payload: {
    actions: { setErrors, setSubmitting, setFieldTouched },
  },
}) {
  try {
    setSubmitting(true);
    const quoteId = yield select(getQuoteId);
    const email = yield select(getUserEmailSelector);
    const phoneNumber = yield select(getPhoneNumber);
    const quoteStatus = yield select(getQuoteStatus);
    if (quoteStatus === QUOTE_STATUS.DRAFT) {
      const { scrapQuoteId, token, registration, weight, price, status, image, year, color, ...data } = yield call(
        client.scrapCarQuote.enterDetails,
        quoteId,
        { email, mobile: phoneNumber },
      );

      yield put(
        enterDetailsSuccess({
          ...data,
          quoteId: scrapQuoteId,
          quoteToken: token,
          registrationNumber: registration,
          carWeight: weight,
          carPrice: price,
          quoteStatus: status,
          carImage: image,
          carYear: year,
          carColour: color,
        }),
      );
    } else {
      yield put(enterDetailsSuccess({}));
    }
    setSubmitting(false);
  } catch (err) {
    const isAuthenticated = yield select(isUserAuthenticatedSelector);
    if (err.status === 401 && isAuthenticated) {
      yield put(enterDetailsError(err));
    } else if (err.status === 401 && !isAuthenticated) {
      yield put(
        showToast({
          message:
            'These details are currently active in another quote, please login to your account in order to continue',
          kind: 'success',
        }),
      );
      yield put(handleQuoteUnauthorizedStatus());
    } else if (err.status === 403) {
      yield put(
        showToast({ message: 'Sorry, car with this registration number has already been scrapped', kind: 'error' }),
      );
      yield put(handleQuoteForbiddenStatus());
      setSubmitting(false);
    } else {
      const errorMessages = err?.error?.messages;
      const commonErrorMessages = errorMessages?.common?.[0];
      if (commonErrorMessages) {
        yield put(showToast({ message: `${commonErrorMessages}`, kind: 'error' }));
      } else {
        const { mobile: phoneNumber, ...restErrorMessages } = errorMessages;
        setFormikErrors(setErrors, { phoneNumber, ...restErrorMessages }, setFieldTouched);
      }
      setSubmitting(false);
    }
  }
}

export function* arrangeCollection({ payload: { password, formikBag } }) {
  try {
    formikBag.setSubmitting(true);
    const quoteId = yield select(getQuoteId);
    const quoteStatus = yield select(getQuoteStatus);
    const firstName = yield select(getUserFirstNameSelector);
    const lastName = yield select(getUserLastNameSelector);
    const [terms, preferredCollectionDateTime] = yield select(getUserPersonalDetails);
    const isAddressManual = yield select(getIsAddressManual);
    const [address, address1, address2, addressCityTown, county] = yield select(getUserAddressDetails);
    const hasAccount = yield select(getHasAccount);
    const isAuthenticated = yield select(isUserAuthenticatedSelector);
    const email = yield select(getUserEmailSelector);
    const dateTime = preferredCollectionDateTime.map(item =>
      moment(item?.preferredCollectionDate)
        .add(Number(item?.preferredCollectionTime?.value), 'hours')
        .format('YYYY-MM-DD HH:mm:ss'),
    );

    if (quoteStatus === QUOTE_STATUS.ARRANGE) {
      const { scrapQuoteId, token, status } = yield call(client.scrapCarQuote.arrangeCollection, quoteId, {
        firstName,
        lastName,
        ...(isAddressManual
          ? {
              ...(address1 && { address1 }),
              ...(address2 && { address2 }),
              ...(addressCityTown && { addressCityTown }),
              ...(county && { county }),
            }
          : {
              address: address?.label,
            }),
        datetime: dateTime,
        ...(!hasAccount && { password, terms }),
      });
      yield put(
        arrangeCollectionSuccess({
          quoteId: scrapQuoteId,
          quoteToken: token,
          quoteStatus: status,
        }),
      );
      yield put(completeArrangeCollection({}));
      if (!isAuthenticated) {
        yield put(userLoginRequest({ email, password }, formikBag, QUOTE_ROUTES.PAYMENT_METHOD));
      }
    } else {
      yield put(completeArrangeCollection({}));
    }
    formikBag?.setSubmitting(false);
  } catch (err) {
    const isAuthenticated = yield select(isUserAuthenticatedSelector);
    if (err.status === 401 && isAuthenticated) {
      yield put(arrangeCollectionError(err));
    } else if (err.status === 401 && !isAuthenticated) {
      yield put(
        showToast({
          message:
            'These details are currently active in another quote, please login to your account in order to continue',
          kind: 'success',
        }),
      );
      yield put(handleQuoteUnauthorizedStatus());
    } else if (err.status === 403) {
      yield put(
        showToast({ message: 'Sorry, car with this registration number has already been scrapped', kind: 'error' }),
      );
      yield put(handleQuoteForbiddenStatus());
      formikBag?.setSubmitting(false);
    } else {
      const errorMessages = err?.error?.messages;
      const commonErrorMessages = errorMessages?.common?.[0];
      if (commonErrorMessages) {
        yield put(showToast({ message: `${commonErrorMessages}`, kind: 'error' }));
      } else {
        const {
          addressCityTown: town,
          'date.0': date0,
          'date.1': date1,
          'date.2': date2,
          'time.0': time0,
          'time.1': time1,
          'time.2': time2,
          ...restErrorMessages
        } = errorMessages;
        setFormikErrors(
          formikBag?.setErrors,
          {
            town,
            'preferredCollectionDateTime[0].preferredCollectionDate': date0,
            'preferredCollectionDateTime[1].preferredCollectionDate': date1,
            'preferredCollectionDateTime[2].preferredCollectionDate': date2,
            'preferredCollectionDateTime[0].preferredCollectionTime': time0,
            'preferredCollectionDateTime[1].preferredCollectionTime': time1,
            'preferredCollectionDateTime[2].preferredCollectionTime': time2,
            ...restErrorMessages,
          },
          formikBag?.setFieldTouched,
        );
      }
      formikBag?.setSubmitting(false);
    }
  }
}

export function* getAddresses() {
  try {
    const postcode = yield select(getPostcode);
    const data = yield call(client.locations.getLocationByPostcode, postcode);
    if (data?.length) {
      const addressesOptions = data.map((address, index) => ({ value: index, label: address }));
      yield put(getAddressesByPostcodeSuccess({ addresses: addressesOptions }));
    }
  } catch (err) {
    if (err.status !== 401) {
      const errorMessage = err?.error?.messages?.common?.[0];
      yield put(showToast({ message: `${errorMessage}`, kind: 'error' }));
    }
    yield put(getAddressesByPostcodeError(err));
  }
}

export function* setPaymentMethod({
  payload: {
    actions: { setErrors, setSubmitting, setFieldTouched },
  },
}) {
  try {
    setSubmitting(true);
    const quoteId = yield select(getQuoteId);
    const quoteStatus = yield select(getQuoteStatus);
    const [paymentType, bankFullName, bankSortCode, bankAccountNumber] = yield select(getPaymentDetails);
    if (quoteStatus === QUOTE_STATUS.PENDING_PAYMENT) {
      const { scrapQuoteId, status, price, schedule } = yield call(client.scrapCarQuote.paymentMethod, quoteId, {
        paymentType: paymentType?.value,
        bankFullName,
        bankSortCode,
        bankAccountNumber,
      });
      yield put(
        setPaymentMethodSuccess({
          quoteId: scrapQuoteId,
          quoteStatus: status,
          carPrice: price,
          schedule,
        }),
      );
    } else {
      yield put(setPaymentMethodSuccess({}));
    }
    setSubmitting(false);
  } catch (err) {
    const isAuthenticated = yield select(isUserAuthenticatedSelector);
    if (err.status === 401 && isAuthenticated) {
      yield put(setPaymentMethodError(err));
    } else if (err.status === 401 && !isAuthenticated) {
      yield put(
        showToast({
          message:
            'These details are currently active in another quote, please login to your account in order to continue',
          kind: 'success',
        }),
      );
      yield put(handleQuoteUnauthorizedStatus());
    } else if (err.status === 403) {
      yield put(
        showToast({ message: 'Sorry, car with this registration number has already been scrapped', kind: 'error' }),
      );
      yield put(handleQuoteForbiddenStatus());
      setSubmitting(false);
    } else {
      const errorMessages = err?.error?.messages;
      const commonErrorMessages = errorMessages?.common?.[0];
      if (commonErrorMessages) {
        yield put(showToast({ message: `${commonErrorMessages}`, kind: 'error' }));
      } else {
        const { paymentType: payment, bankFullName: fullName, ...restErrorMessages } = errorMessages;
        setFormikErrors(setErrors, { payment, fullName, ...restErrorMessages }, setFieldTouched);
      }
      setSubmitting(false);
    }
  }
}

export function* continueWithQuote({ payload: { token } }) {
  try {
    const data = yield call(client.scrapCarQuote.continueWithQuote, token);
    yield put(continueWithQuoteSuccess(data));
  } catch (err) {
    yield put(continueWithQuoteError(err));
  }
}

export default [
  takeLatest([QuoteTypes.CREATE_QUOTE.REQUEST], createQuote),
  takeLatest([QuoteTypes.ENTER_DETAILS.REQUEST], enterDetails),
  takeLatest([QuoteTypes.ARRANGE_COLLECTION.REQUEST], arrangeCollection),
  takeLatest([QuoteTypes.GET_ADDRESSES_BY_POSTCODE.REQUEST], getAddresses),
  takeLatest([QuoteTypes.SET_PAYMENT_METHOD.REQUEST], setPaymentMethod),
  takeLatest(QuoteTypes.CONTINUE_WITH_QUOTE.REQUEST, continueWithQuote),
];
