import * as Yup from 'yup';
import { PHONE_NUMBER_VALIDATION, EMAIL_LOCAL_PART_VALIDATION } from '../regexp';

export const validationSchemaStep2 = Yup.object().shape({
  title: Yup.string()
    .max(30)
    .required('Value is required'),
  subtitle: Yup.string()
    .max(30)
    .required('Value is required'),
  carFeatures: Yup.array().required('At least one is required'),
  owners: Yup.number().required('Value is required'),
  serviceHistory: Yup.object().required('Value is required'),
  motDue: Yup.date().required('Value is required'),
  hasKeys: Yup.boolean().required('Value is required'),
  isValidV5CLogbook: Yup.boolean().required('Value is required'),
  isVehicleStart: Yup.boolean().required('Value is required'),
  hasValidMOT: Yup.boolean().required('Value is required'),
  mileage: Yup.number().required('Value is required'),
  hasMechanicalIssues: Yup.boolean().required('Value is required'),
  mechanicalIssuesDescription: Yup.string(),
  bodyCondition: Yup.string().required('Value is required'),
  interiorCondition: Yup.string().required('Value is required'),
  hasFinanceRemaining: Yup.boolean().required('Value is required'),
  contactEmail: Yup.string()
    .email('Incorrect email format')
    .matches(EMAIL_LOCAL_PART_VALIDATION, `Maximum length of the email's local part should be 64 characters`)
    .max(255, 'Maximum length of the email should be 255 characters')
    .required('Email should not be empty'),
  phoneNumber: Yup.string()
    .matches(PHONE_NUMBER_VALIDATION, 'Phone number is not valid')
    .required('Value is required'),
  postcode: Yup.string().required('Value is required'),
  fullAddress: Yup.object().required('Value is required'),
  addressLine1: Yup.string(),
  addressLine2: Yup.string(),
  townCity: Yup.string(),
  county: Yup.string(),
  terms: Yup.boolean()
    .required('Please, accept terms and conditions')
    .oneOf([true], 'Please, accept terms and conditions'),
});

export const initialValues = {
  title: '',
  subtitle: '',
  contactEmail: '',
  phoneNumber: '',
  postcode: '',
  carFeatures: [],
  owners: '',
  serviceHistory: '',
  motDue: '',
  bodyCondition: '',
  interiorCondition: '',
  terms: '',
  hasKeys: '',
  isValidV5CLogbook: '',
  isVehicleStart: '',
  hasValidMOT: '',
  hasMechanicalIssues: '',
  hasFinanceRemaining: '',
  mileage: '',
};
