import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import ActionTypes from '../action-types/carModels';

const initialData = {
  modelsList: null,
  isModelsListLoading: false,
  carModelsListError: null,
};

export default {
  carModels: handleActions(
    {
      [ActionTypes.GET_CAR_MODELS_LIST.REQUEST]: state =>
        immutable(state, {
          isModelsListLoading: { $set: true },
          carModelsListError: { $set: null },
        }),

      [ActionTypes.GET_CAR_MODELS_LIST.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          isModelsListLoading: { $set: false },
          modelsList: { $set: payload },
        }),

      [ActionTypes.GET_CAR_MODELS_LIST.ERROR]: (state, { payload }) =>
        immutable(state, {
          isModelsListLoading: { $set: false },
          carModelsListError: { $set: payload },
        }),
    },
    initialData,
  ),
};
