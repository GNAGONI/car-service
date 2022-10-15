import { createActions } from 'redux-actions';
import CarTypes from '../action-types/car';

export const {
  setCarModel,
  setServiceHistory,
  setCarFeatures,
  setBinaryFormValue,
  setMileage,
  setMechanicalIssuesDetails,
  setBodyworkCondition,
  setInteriorCondition,
  setCarLocationHome,
  setCarLocationPostcode,
  setUploadedPhotos,
} = createActions({
  [CarTypes.SET_CAR_MODEL]: carModel => ({ carModel }),
  [CarTypes.SET_SERVICE_HISTORY]: serviceHistory => ({ serviceHistory }),
  [CarTypes.SET_CAR_FEATURES]: carFeatures => ({ carFeatures }),
  [CarTypes.SET_BINARY_FORM_VALUE]: binaryFormValue => ({ binaryFormValue }),
  [CarTypes.SET_MILEAGE]: mileage => ({ mileage }),
  [CarTypes.SET_MECHANICAL_ISSUES_DETAILS]: mechanicalIssuesDetails => ({ mechanicalIssuesDetails }),
  [CarTypes.SET_BODYWORK_CONDITION]: bodyworkCondition => ({ bodyworkCondition }),
  [CarTypes.SET_INTERIOR_CONDITION]: interiorCondition => ({ interiorCondition }),
  [CarTypes.SET_CAR_LOCATION_HOME]: carLocationHome => ({ carLocationHome }),
  [CarTypes.SET_CAR_LOCATION_POSTCODE]: carLocationPostcode => ({ carLocationPostcode }),
  [CarTypes.SET_UPLOADED_PHOTOS]: uploadedPhotos => ({ uploadedPhotos }),
});
