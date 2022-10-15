import { createAsyncActionSet } from '../lib/action-helper';

export default {
  GET_QUOTE_PRICE: createAsyncActionSet('GET_QUOTE_PRICE'),
  GET_QUOTE_BY_TOKEN: createAsyncActionSet('GET_QUOTE_BY_TOKEN'),
  GET_ADDRESSES_BY_POSTCODE: createAsyncActionSet('GET_ADDRESSES_BY_POSTCODE'),

  CREATE_QUOTE: createAsyncActionSet('CREATE_QUOTE'),
  ENTER_DETAILS: createAsyncActionSet('ENTER_DETAILS'),
  SET_ONLINE_QUOTE: createAsyncActionSet('SET_ONLINE_QUOTE'),
  ARRANGE_COLLECTION: createAsyncActionSet('ARRANGE_COLLECTION'),
  COMPLETE_ARRANGE_COLLECTION: createAsyncActionSet('COMPLETE_ARRANGE_COLLECTION'),
  SET_PAYMENT_METHOD: createAsyncActionSet('SET_PAYMENT_METHOD'),
  CANCEL_QUOTE: createAsyncActionSet('CANCEL_QUOTE'),
  DROP_QUOTE: createAsyncActionSet('DROP_QUOTE'),
  CONTINUE_WITH_QUOTE: createAsyncActionSet('CONTINUE_WITH_QUOTE'),
  HANDLE_QUOTE_FORBIDDEN_STATUS: createAsyncActionSet('HANDLE_QUOTE_FORBIDDEN_STATUS'),
  HANDLE_QUOTE_UNAUTHORIZED_STATUS: createAsyncActionSet('HANDLE_QUOTE_UNAUTHORIZED_STATUS'),
  SET_MANUAL_ADDRESS: createAsyncActionSet('SET_MANUAL_ADDRESS'),
};
