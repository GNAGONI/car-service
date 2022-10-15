import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import DropDownTypes from '../action-types/dropDowns';

export const dropDownState = {
  isVehicleMakeOpen: false,
  isVehicleModelOpen: false,
  isVarientOpen: false,
  isTrimOpen: false,
  isDerivativeOpen: false,
  isBodyTypeOpen: false,
  isTransmissionOpen: false,
  isFuelTypeOpen: false,
  isColourOpen: false,
};

export default {
  dropDowns: handleActions(
    {
      [DropDownTypes.TOGGLE_VEHICLE_MAKE_DROP_DOWN]: (state, { payload }) => {
        const initialState = immutable(state, { $merge: dropDownState });
        return immutable(initialState, {
          isVehicleMakeOpen: { $set: payload },
        });
      },

      [DropDownTypes.TOGGLE_VEHICLE_MODEL_DROP_DOWN]: (state, { payload }) => {
        const initialState = immutable(state, { $merge: dropDownState });
        return immutable(initialState, {
          isVehicleModelOpen: { $set: payload },
        });
      },

      [DropDownTypes.TOGGLE_VARIENT_DROP_DOWN]: (state, { payload }) => {
        const initialState = immutable(state, { $merge: dropDownState });
        return immutable(initialState, {
          isVarientOpen: { $set: payload },
        });
      },

      [DropDownTypes.TOGGLE_TRIM_DROP_DOWN]: (state, { payload }) => {
        const initialState = immutable(state, { $merge: dropDownState });
        return immutable(initialState, {
          isTrimOpen: { $set: payload },
        });
      },

      [DropDownTypes.TOGGLE_DERIVATIVE_DROP_DOWN]: (state, { payload }) => {
        const initialState = immutable(state, { $merge: dropDownState });
        return immutable(initialState, {
          isDerivativeOpen: { $set: payload },
        });
      },

      [DropDownTypes.TOGGLE_BODY_TYPE_DROP_DOWN]: (state, { payload }) => {
        const initialState = immutable(state, { $merge: dropDownState });
        return immutable(initialState, {
          isBodyTypeOpen: { $set: payload },
        });
      },

      [DropDownTypes.TOGGLE_TRANSMISSION_DROP_DOWN]: (state, { payload }) => {
        const initialState = immutable(state, { $merge: dropDownState });
        return immutable(initialState, {
          isTransmissionOpen: { $set: payload },
        });
      },

      [DropDownTypes.TOGGLE_FUEL_TYPE_DROP_DOWN]: (state, { payload }) => {
        const initialState = immutable(state, { $merge: dropDownState });
        return immutable(initialState, {
          isFuelTypeOpen: { $set: payload },
        });
      },

      [DropDownTypes.TOGGLE_COLOUR_DROP_DOWN]: (state, { payload }) => {
        const initialState = immutable(state, { $merge: dropDownState });
        return immutable(initialState, {
          isColourOpen: { $set: payload },
        });
      },

      [DropDownTypes.CLOSE_ALL_DROP_DOWN]: state => immutable(state, { $merge: dropDownState }),
    },
    dropDownState,
  ),
};
