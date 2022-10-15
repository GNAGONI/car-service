import * as Yup from 'yup';
import { PHONE_NUMBER_VALIDATION, EMAIL_LOCAL_PART_VALIDATION } from '../../regexp';

export const enterDetailsValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Incorrect email format')
    .matches(EMAIL_LOCAL_PART_VALIDATION, `Maximum length of the email's local part should be 64 characters`)
    .max(255, 'Maximum length of the email should be 255 characters')
    .required('Email should not be empty'),
  phoneNumber: Yup.string()
    .matches(PHONE_NUMBER_VALIDATION, 'The phone number entered is incorrect')
    .required('The phone number should not be empty'),
});
