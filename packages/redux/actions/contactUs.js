import { createActions } from 'redux-actions';

import ContactUsTypes from '../action-types/contactUs';

export const { setContactUsEnquiryRequest, setContactUsEnquirySuccess, setContactUsEnquiryError } = createActions({
  [ContactUsTypes.SET_CONTACT_US_ENQUIRY.REQUEST]: (data, actions) => ({ data, actions }),
  [ContactUsTypes.SET_CONTACT_US_ENQUIRY.SUCCESS]: data => data,
  [ContactUsTypes.SET_CONTACT_US_ENQUIRY.ERROR]: data => data,
});
