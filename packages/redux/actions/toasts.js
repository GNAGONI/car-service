import { createActions } from 'redux-actions';

import ToastTypes from '../action-types/toasts';

export const { showToast, hideToast } = createActions({
  [ToastTypes.SHOW_TOAST]: payload => payload,
  [ToastTypes.HIDE_TOAST]: () => {},
});
