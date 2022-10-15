import * as Yup from 'yup';
import { REGISTRATION_NUMBER_VALIDATION } from '../../regexp';

export const instantQuoteValidationSchema = Yup.object().shape({
  registrationNumber: Yup.string()
    .matches(REGISTRATION_NUMBER_VALIDATION, 'The car registration number entered is incorrect')
    .required('The car registration number should not be empty'),
  postcode: Yup.string()
    .min(5, 'The postcode should be at least 5 characters long')
    .max(8, 'The postcode should be maximum 8 characters long')
    .required('The postcode should not be empty'),
});

export const instantQuoteInitialValues = {
  registrationNumber: '',
  postcode: '',
};
