import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import ActionType from '../action-types/message';

const initialState = {
  isMessageShown: false,
  messageType: null,
};

export default {
  message: handleActions(
    {
      [ActionType.SHOW_MESSAGE]: (state, { payload }) =>
        immutable(state, {
          isMessageShown: { $set: true },
          messageType: { $set: payload },
        }),

      [ActionType.HIDE_MESSAGE]: state =>
        immutable(state, {
          isMessageShown: { $set: false },
          messageType: { $set: null },
        }),
    },
    initialState,
  ),
};
