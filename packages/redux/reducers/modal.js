import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import ActionType from '../action-types/modal';

const initialState = {
  isModalOpen: false,
  modalType: null,
};

export default {
  modalState: handleActions(
    {
      [ActionType.OPEN_MODAL]: (state, { payload: { modalType } }) =>
        immutable(state, {
          isModalOpen: { $set: true },
          modalType: { $set: modalType },
        }),

      [ActionType.CLOSE_MODAL]: state =>
        immutable(state, {
          isModalOpen: { $set: false },
          modalType: { $set: null },
        }),
    },
    initialState,
  ),
};
