import * as Yup from 'yup';
import { PHONE_NUMBER_VALIDATION, TEXT_VALIDATION, NAME_VALIDATION, EMAIL_LOCAL_PART_VALIDATION } from './regexp';

// Common fields
export const email = Yup.string()
  .email('Incorrect email format')
  .matches(EMAIL_LOCAL_PART_VALIDATION, `Maximum length of the email's local part should be 64 characters`)
  .max(255, 'Maximum length of the email should be 255 characters')
  .required('Email should not be empty');

export const password = Yup.string()
  .trim()
  .min(6, 'Password field should be at least 6 characters')
  .max(100, 'Password field should not be more than 100 characters')
  .matches(/(^\S+$)/, 'Space character is not allowed')
  .required('Password field should not be empty');

export const contactNumber = Yup.string()
  .max(22, 'The phone number should be maximum 22 characters long')
  .matches(PHONE_NUMBER_VALIDATION, 'The phone number entered is incorrect')
  .required('The phone number should not be empty');

const enquiry = Yup.string()
  .min(6, 'The enquiry should be minimum 6 characters long')
  .max(300, 'The enquiry should be maximum 300 characters long')
  .matches(TEXT_VALIDATION, 'The enquiry entered is incorrect')
  .required('The enquiry should not be empty');

export const commonNameField = fieldName =>
  Yup.string()
    .trim()
    .min(2, `The ${fieldName} should be at least 2 characters long`)
    .max(100, `The ${fieldName} should be maximum 100 characters long`)
    .matches(NAME_VALIDATION, 'Only latin letters, space, dot, dash and single quote are allowed')
    .required(`The ${fieldName} should not be empty`);

// Schemas
export const signInSchema = Yup.object({
  email,
  password,
});

export const signUpSchema = Yup.object({
  firstName: commonNameField('first name'),
  lastName: commonNameField('last name'),
  email,
  password,
  terms: Yup.boolean().oneOf([true], 'Please, accept terms and conditions'),
});

export const contactUsSchema = Yup.object({
  firstName: commonNameField('first name'),
  lastName: commonNameField('last name'),
  email,
  contactNumber,
  enquiry,
});

export const forgotYourPasswordSchema = Yup.object({ email });

export const resetPasswordSchema = Yup.object({
  newPassword: Yup.string()
    .trim()
    .min(6, 'New password field must be at least 6 characters long')
    .max(100, 'New password field should not be more than 100 characters')
    .notOneOf([Yup.ref('oldPassword'), null], 'New password field should be different from the old one')
    .required('New password field should not be empty')
    .matches(/(^\S+$)/, 'Space character is not allowed'),
  confirmPassword: Yup.string()
    .trim()
    .min(6, 'Confirm new password field must be at least 6 characters long')
    .max(100, 'Confirm new password field should not be more than 100 characters')
    .required('Confirm new password field should not be empty')
    .oneOf([Yup.ref('newPassword'), null], `The passwords you entered don't match`)
    .matches(/(^\S+$)/, 'Space character is not allowed'),
});

export const editProfileSchema = Yup.object({
  firstName: commonNameField('first name'),
  lastName: commonNameField('last name'),
  email,
  phoneNumber: contactNumber,
  day: Yup.string().required('The day should not be empty'),
  month: Yup.string().required('The month should not be empty'),
  year: Yup.string().required('The year should not be empty'),
});

// Initial values
export const signInInitialValues = {
  email: '',
  password: '',
};

export const signUpInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: false,
};

export const contactUsValues = {
  firstName: '',
  lastName: '',
  email: '',
  contactNumber: '',
  enquiry: '',
};

export const forgotYourPasswordValues = {
  email: '',
};

export const resetPasswordValues = {
  newPassword: '',
  confirmPassword: '',
};
