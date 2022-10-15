import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import ToastTypes from '../action-types/toasts';

const initialState = {
  open: false,
  message: '',
  kind: 'success', // 'info', 'error', 'warning', 'success'
};

export default {
  toasts: handleActions(
    {
      [ToastTypes.SHOW_TOAST]: (state, { payload }) =>
        immutable(state, {
          open: { $set: true },
          message: { $set: payload?.message },
          kind: { $set: payload?.kind },
        }),

      [ToastTypes.HIDE_TOAST]: state =>
        immutable(state, {
          open: { $set: false },
        }),
    },
    initialState,
  ),
};
