import * as Yup from 'yup';
import { commonNameField, password } from '../../user';

const address = (addressName, isRequired) =>
  isRequired
    ? Yup.string()
        .max(100, `The ${addressName} should be maximum 100 characters long`)
        .required(`The ${addressName} should not be empty`)
    : Yup.string().max(100, `The ${addressName} should be maximum 100 characters long`);
const preferredCollectionDateTime = Yup.array()
  .of(
    Yup.object().shape({
      preferredCollectionDate: Yup.date().required('The preferred collection date should not be empty'),
      preferredCollectionTime: Yup.object().required('The preferred collection time should not be empty'),
    }),
  )
  .required('The preferred collection date time should not be empty')
  .min(1, 'Minimum 1 Preferred Collection Time');

export const arrangeACollectionValidationSchema = Yup.object({
  firstName: commonNameField('first name'),
  lastName: commonNameField('last name'),
  postcode: Yup.string(),
  preferredCollectionDateTime,
});

export const arrangeACollectionValidationSchemaManualAddress = Yup.object({
  address1: address('address line 1', true),
  address2: address('address line 2', false),
  town: Yup.string()
    .max(100, 'The town should be maximum 100 characters long')
    .required('The town should not be empty'),
  county: Yup.string()
    .max(100, 'The county should be maximum 100 characters long')
    .required('The county should not be empty'),
});

export const arrangeACollectionValidationSchemaAddressByPostcode = Yup.object({
  address: Yup.string().required('The address should not be empty'),
});

export const arrangeACollectionValidationSchemaPassword = Yup.object({
  password,
  terms: Yup.boolean()
    .required('Please, accept terms and conditions')
    .oneOf([true], 'Please, accept terms and conditions'),
});
