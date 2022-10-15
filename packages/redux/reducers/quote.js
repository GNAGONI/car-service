import { handleActions } from 'redux-actions';
import immutable, { extend } from 'immutability-helper';

import QuoteTypes from '../action-types/quote';
import { STATUS } from '../constants';

extend('$setIfUpdated', (value, original) => (value === undefined ? original : value));

export const quoteState = {
  registrationNumber: '',
  postcode: '',
  addresses: [],

  quoteId: '',
  quoteToken: '',
  quoteStatus: '',

  phoneNumber: '',
  hasAccount: '',

  carMake: '',
  carRange: '',
  carModel: '',
  carDerivative: '',
  carWeight: '',
  carPrice: 0,
  carImage: '',
  carYear: '',
  carColour: '',

  terms: '',
  isAddressManual: false,
  address: '',
  address1: '',
  address2: '',
  addressCityTown: '',
  county: '',
  preferredCollectionDateTime: [{ preferredCollectionDate: '', preferredCollectionTime: '' }],

  paymentType: '',
  bankFullName: '',
  bankSortCode: '',
  bankAccountNumber: '',

  schedule: [],

  message: '',
  status: '',
};

export default {
  quote: handleActions(
    {
      // CREATE QUOTE
      [QuoteTypes.CREATE_QUOTE.REQUEST]: (state, { payload: { registrationNumber, postcode } }) =>
        immutable(state, {
          registrationNumber: { $setIfUpdated: registrationNumber },
          postcode: { $setIfUpdated: postcode },
          quoteId: { $set: '' },
          quoteToken: { $set: '' },
          quoteStatus: { $set: '' },
          message: { $set: '' },
        }),
      [QuoteTypes.CREATE_QUOTE.SUCCESS]: (state, { payload: { quoteId, quoteToken, quoteStatus } }) =>
        immutable(state, {
          quoteId: { $set: quoteId },
          quoteToken: { $set: quoteToken },
          quoteStatus: { $set: quoteStatus },
          status: { $set: STATUS.SUCCESS },
        }),
      [QuoteTypes.CREATE_QUOTE.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
        }),
      [QuoteTypes.HANDLE_QUOTE_UNAUTHORIZED_STATUS.actionName]: state =>
        immutable(state, {
          quoteStatus: { $set: '401' },
        }),
      [QuoteTypes.HANDLE_QUOTE_FORBIDDEN_STATUS.actionName]: state =>
        immutable(state, {
          quoteStatus: { $set: '403' },
        }),

      // ENTER DETAILS
      [QuoteTypes.ENTER_DETAILS.REQUEST]: (state, { payload: { phoneNumber } }) =>
        immutable(state, {
          phoneNumber: { $set: phoneNumber },
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),
      [QuoteTypes.ENTER_DETAILS.SUCCESS]: (
        state,
        {
          payload: {
            quoteId,
            quoteToken,
            carMake,
            carRange,
            carModel,
            carDerivative,
            registrationNumber,
            carWeight,
            postcode,
            carPrice,
            quoteStatus,
            carImage,
            carYear,
            carColour,
            hasAccount,
          },
        },
      ) =>
        immutable(state, {
          registrationNumber: { $setIfUpdated: registrationNumber },
          postcode: { $setIfUpdated: postcode },
          quoteId: { $setIfUpdated: quoteId },
          quoteToken: { $setIfUpdated: quoteToken },
          quoteStatus: { $setIfUpdated: quoteStatus },
          carMake: { $setIfUpdated: carMake },
          carRange: { $setIfUpdated: carRange },
          carModel: { $setIfUpdated: carModel },
          carDerivative: { $setIfUpdated: carDerivative },
          carWeight: { $setIfUpdated: carWeight },
          carPrice: { $setIfUpdated: carPrice },
          carImage: { $setIfUpdated: carImage },
          carYear: { $setIfUpdated: carYear },
          carColour: { $setIfUpdated: carColour },
          hasAccount: { $setIfUpdated: hasAccount },
          message: { $set: '' },
          status: { $set: STATUS.SUCCESS },
        }),

      [QuoteTypes.ENTER_DETAILS.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
        }),

      // SET ONLINE QUOTE
      [QuoteTypes.SET_ONLINE_QUOTE.actionName]: (state, { payload: { quoteStatus } }) =>
        immutable(state, {
          quoteStatus: { $setIfUpdated: quoteStatus },
          message: { $set: '' },
          status: { $set: STATUS.SUCCESS },
        }),

      // CANCEL QUOTE
      [QuoteTypes.CANCEL_QUOTE.actionName]: () => quoteState,

      // ARRANGE A COLLECTION
      [QuoteTypes.ARRANGE_COLLECTION.REQUEST]: (
        state,
        { payload: { terms, address, address1, address2, town, county, preferredCollectionDateTime } },
      ) =>
        immutable(state, {
          terms: { $set: terms },
          address: { $set: address },
          address1: { $set: address1 },
          address2: { $set: address2 },
          addressCityTown: { $set: town },
          county: { $set: county },
          preferredCollectionDateTime: { $set: preferredCollectionDateTime },
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),

      [QuoteTypes.ARRANGE_COLLECTION.SUCCESS]: (state, { payload: { quoteId, quoteToken, quoteStatus } }) =>
        immutable(state, {
          quoteId: { $setIfUpdated: quoteId },
          quoteToken: { $setIfUpdated: quoteToken },
          quoteStatus: { $setIfUpdated: quoteStatus },
          hasAccount: { $setIfUpdated: true },
          status: { $set: STATUS.SUCCESS },
        }),

      [QuoteTypes.ARRANGE_COLLECTION.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
        }),

      // GET ADDRESSES BY POSTCODE
      [QuoteTypes.GET_ADDRESSES_BY_POSTCODE.REQUEST]: state =>
        immutable(state, {
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),

      [QuoteTypes.GET_ADDRESSES_BY_POSTCODE.SUCCESS]: (state, { payload: { addresses } }) =>
        immutable(state, {
          addresses: { $set: addresses },
          status: { $set: STATUS.SUCCESS },
        }),

      [QuoteTypes.GET_ADDRESSES_BY_POSTCODE.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
        }),

      // SET PAYMENT METHOD
      [QuoteTypes.SET_PAYMENT_METHOD.REQUEST]: (
        state,
        { payload: { paymentType, bankFullName, bankSortCode, bankAccountNumber } },
      ) =>
        immutable(state, {
          paymentType: { $set: paymentType },
          bankFullName: { $set: bankFullName },
          bankSortCode: { $set: bankSortCode },
          bankAccountNumber: { $set: bankAccountNumber },
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),

      [QuoteTypes.SET_PAYMENT_METHOD.SUCCESS]: (state, { payload: { quoteId, quoteStatus, carPrice, schedule } }) =>
        immutable(state, {
          quoteId: { $setIfUpdated: quoteId },
          quoteStatus: { $setIfUpdated: quoteStatus },
          carPrice: { $setIfUpdated: carPrice },
          schedule: { $setIfUpdated: schedule },
          status: { $set: STATUS.SUCCESS },
        }),

      [QuoteTypes.SET_PAYMENT_METHOD.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
        }),

      // COMPLETE ARRANGE COLLECTION
      [QuoteTypes.COMPLETE_ARRANGE_COLLECTION.actionName]: state =>
        immutable(state, {
          message: { $set: '' },
          status: { $set: STATUS.SUCCESS },
        }),

      // DROP QUOTE
      [QuoteTypes.DROP_QUOTE.actionName]: () => quoteState,

      [QuoteTypes.CONTINUE_WITH_QUOTE.REQUEST]: state =>
        immutable(state, {
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),

      [QuoteTypes.CONTINUE_WITH_QUOTE.SUCCESS]: (
        state,
        {
          payload: {
            scrapQuoteId,
            registration,
            postcode,
            quoteToken,
            status,
            hasAccount,
            carMake,
            carRange,
            carModel,
            carDerivative,
            weight,
            price,
            image,
            year,
            color,
            mobile,
          },
        },
      ) =>
        immutable(state, {
          registrationNumber: { $set: registration },
          postcode: { $set: postcode },
          quoteId: { $set: scrapQuoteId },
          quoteToken: { $set: quoteToken },
          quoteStatus: { $set: status },
          hasAccount: { $set: hasAccount },
          carMake: { $set: carMake },
          carRange: { $set: carRange },
          carModel: { $set: carModel },
          carDerivative: { $set: carDerivative },
          carWeight: { $set: weight },
          carPrice: { $set: price },
          carImage: { $set: image },
          carYear: { $set: year },
          carColour: { $set: color },
          phoneNumber: { $set: mobile },
          status: { $set: STATUS.SUCCESS },
        }),

      [QuoteTypes.CONTINUE_WITH_QUOTE.ERROR]: state =>
        immutable(state, {
          status: { $set: STATUS.ERROR },
        }),

      [QuoteTypes.SET_MANUAL_ADDRESS.actionName]: (state, { payload: { isAddressManual } }) =>
        immutable(state, {
          isAddressManual: { $set: isAddressManual },
        }),
    },
    quoteState,
  ),
};
