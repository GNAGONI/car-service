import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import CarTypes from '../action-types/car';

import { STATUS } from '../constants';

export const secondStageState = {
  message: '',
  status: STATUS.IDLE,
  binaryFormValue: [],
};

export default {
  car: handleActions(
    {
      [CarTypes.SET_CAR_MODEL]: (state, { payload }) =>
        immutable(state, {
          carModel: { $set: payload.carModel || '' },
        }),

      [CarTypes.SET_SERVICE_HISTORY]: (state, { payload }) =>
        immutable(state, {
          serviceHistory: { $set: payload.serviceHistory || '' },
        }),

      [CarTypes.SET_CAR_FEATURES]: (state, { payload }) =>
        immutable(state, {
          carFeatures: { $set: payload.carFeatures || '' },
        }),

      [CarTypes.SET_BINARY_FORM_VALUE]: (state, { payload }) => {
        const filteredFormValue = state.binaryFormValue.filter(
          item => JSON.stringify(Object.keys(item)) !== JSON.stringify(Object.keys(payload.binaryFormValue)),
        );
        return immutable(state, {
          binaryFormValue: {
            $set: [...filteredFormValue, payload.binaryFormValue] || [],
          },
        });
      },

      [CarTypes.SET_MILEAGE]: (state, { payload }) =>
        immutable(state, {
          mileage: { $set: payload.mileage || '' },
        }),

      [CarTypes.SET_MECHANICAL_ISSUES_DETAILS]: (state, { payload }) =>
        immutable(state, {
          mechanicalIssuesDetails: { $set: payload.mechanicalIssuesDetails || '' },
        }),

      [CarTypes.SET_BODYWORK_CONDITION]: (state, { payload }) =>
        immutable(state, {
          bodyworkCondition: { $set: payload.bodyworkCondition || '' },
        }),

      [CarTypes.SET_INTERIOR_CONDITION]: (state, { payload }) =>
        immutable(state, {
          interiorCondition: { $set: payload.interiorCondition || '' },
        }),

      [CarTypes.SET_CAR_LOCATION_HOME]: (state, { payload }) =>
        immutable(state, {
          carLocationHome: { $set: payload.carLocationHome || '' },
        }),

      [CarTypes.SET_CAR_LOCATION_POSTCODE]: (state, { payload }) =>
        immutable(state, {
          carLocationPostcode: { $set: payload.carLocationPostcode || '' },
        }),

      [CarTypes.SET_UPLOADED_PHOTOS]: (state, { payload }) =>
        immutable(state, {
          uploadedPhotos: { $set: payload.uploadedPhotos || {} },
        }),
    },
    secondStageState,
  ),
};
