import { createSelector } from 'reselect';

export const getQuote = state => state.quote;

export const getQuoteId = createSelector(
  getQuote,
  quote => quote.quoteId,
);

export const getPhoneNumber = createSelector(
  getQuote,
  quote => quote.phoneNumber,
);

export const getRegistrationNumber = createSelector(
  getQuote,
  quote => quote.registrationNumber,
);

export const getPostcode = createSelector(
  getQuote,
  quote => quote.postcode,
);

export const getCarWeight = createSelector(
  getQuote,
  quote => quote.carWeight,
);

export const getCarType = createSelector(
  getQuote,
  quote => `${quote.carYear} ${quote.carMake} ${quote.carRange} - ${quote.carColour}  `,
);

export const getCarPrice = createSelector(
  getQuote,
  quote => quote.carPrice,
);

export const getQuoteStatus = createSelector(
  getQuote,
  quote => quote.quoteStatus,
);

export const getQuoteToken = createSelector(
  getQuote,
  quote => quote.quoteToken,
);

export const getHasAccount = createSelector(
  getQuote,
  quote => quote.hasAccount,
);

export const getTerms = createSelector(
  getQuote,
  quote => quote.terms,
);

export const getAddress = createSelector(
  getQuote,
  quote => quote.address,
);

export const getAddress1 = createSelector(
  getQuote,
  quote => quote.address1,
);

export const getAddress2 = createSelector(
  getQuote,
  quote => quote.address2,
);

export const getAddressCityTown = createSelector(
  getQuote,
  quote => quote.addressCityTown,
);

export const getCounty = createSelector(
  getQuote,
  quote => quote.county,
);

export const getDate = createSelector(
  getQuote,
  quote => quote.date,
);

export const getTime = createSelector(
  getQuote,
  quote => quote.time,
);

export const getPreferredCollectionDateTime = createSelector(
  getQuote,
  quote => quote.preferredCollectionDateTime,
);

export const getAddressesByPostcode = createSelector(
  getQuote,
  quote => quote.addresses,
);

export const getPaymentType = createSelector(
  getQuote,
  quote => quote.paymentType,
);

export const getBankFullName = createSelector(
  getQuote,
  quote => quote.bankFullName,
);

export const getBankSortCode = createSelector(
  getQuote,
  quote => quote.bankSortCode,
);

export const bankAccountNumber = createSelector(
  getQuote,
  quote => quote.bankAccountNumber,
);

export const getSchedule = createSelector(
  getQuote,
  quote => quote.schedule,
);

export const getCarImage = createSelector(
  getQuote,
  quote => quote.carImage,
);

export const getIsAddressManual = createSelector(
  getQuote,
  quote => quote.isAddressManual,
);

export const getCarDetails = createSelector(
  [getCarWeight, getCarType, getCarPrice, getRegistrationNumber, getCarImage],
  (...details) => details,
);

export const getUserPersonalDetails = createSelector(
  [getTerms, getPreferredCollectionDateTime],
  (...details) => details,
);

export const getUserAddressDetails = createSelector(
  [getAddress, getAddress1, getAddress2, getAddressCityTown, getCounty],
  (...details) => details,
);

export const getPaymentDetails = createSelector(
  [getPaymentType, getBankFullName, getBankSortCode, bankAccountNumber],
  (...details) => details,
);
