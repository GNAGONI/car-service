import { createActions } from 'redux-actions';

import DropDownsTypes from '../action-types/dropDowns';

export const {
  toggleVehicleMakeDropDown,
  toggleVehicleModelDropDown,
  toggleVarientDropDown,
  toggleTrimDropDown,
  toggleDerivativeDropDown,
  toggleBodyTypeDropDown,
  toggleTransmissionDropDown,
  toggleFuelTypeDropDown,
  toggleColourDropDown,
  closeAllDropDowns,
} = createActions({
  [DropDownsTypes.TOGGLE_VEHICLE_MAKE_DROP_DOWN]: payload => payload,
  [DropDownsTypes.TOGGLE_VEHICLE_MODEL_DROP_DOWN]: payload => payload,
  [DropDownsTypes.TOGGLE_VARIENT_DROP_DOWN]: payload => payload,
  [DropDownsTypes.TOGGLE_TRIM_DROP_DOWN]: payload => payload,
  [DropDownsTypes.TOGGLE_DERIVATIVE_DROP_DOWN]: payload => payload,
  [DropDownsTypes.TOGGLE_BODY_TYPE_DROP_DOWN]: payload => payload,
  [DropDownsTypes.TOGGLE_TRANSMISSION_DROP_DOWN]: payload => payload,
  [DropDownsTypes.TOGGLE_FUEL_TYPE_DROP_DOWN]: payload => payload,
  [DropDownsTypes.TOGGLE_COLOUR_DROP_DOWN]: payload => payload,
  [DropDownsTypes.CLOSE_ALL_DROP_DOWN]: () => ({}),
});
