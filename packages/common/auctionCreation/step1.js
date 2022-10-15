import * as Yup from 'yup';
import { REGISTRATION_NUMBER_VALIDATION } from '../regexp';

export const validationSchemaStep1 = Yup.object().shape({
  registrationNumber: Yup.string()
    .matches(REGISTRATION_NUMBER_VALIDATION, 'The car registration number entered is incorrect')
    .required('The car registration number should not be empty'),
  mileage: Yup.number('Should be a number').required('Mileage is required'),
  vehicleMake: Yup.object().required('Vehicle make is required'),
  vehicleModel: Yup.object().required('Vehicle model is required'),
  varient: Yup.object().required('Varient is required'),
  derivative: Yup.object().required('Derivative is required'),
  bodyType: Yup.object().required('Body type is required'),
  transmission: Yup.object().required('Transmission is required'),
  fuelType: Yup.object().required('Fuel type is required'),
  colour: Yup.object().required('Colour is required'),
  dateOfFirstRegistration: Yup.date().required('Date of first registration required'),
});

export const initialValues = {
  registrationNumber: '',
  mileage: '',
  vehicleMake: '',
  vehicleModel: '',
  varient: '',
  trim: '',
  derivative: '',
  bodyType: '',
  transmission: '',
  fuelType: '',
  colour: '',
  dateOfFirstRegistration: '',
};
