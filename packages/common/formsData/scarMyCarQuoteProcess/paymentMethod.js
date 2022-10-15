import * as Yup from 'yup';
import { commonNameField } from '../../user';
import { BANK_SORT_CODE_VALIDATION, BANK_ACCOUNT_NUMBER_VALIDATION } from '../../regexp';

export const paymentMethodValidationSchema = Yup.object().shape({
  payment: Yup.object().required('The payment should not be empty'),
  fullName: commonNameField('full name'),
  bankSortCode: Yup.string()
    .matches(BANK_SORT_CODE_VALIDATION, 'The bank sort code entered in incorrect')
    .required('The bank sort code should not be empty'),
  bankAccountNumber: Yup.string()
    .matches(BANK_ACCOUNT_NUMBER_VALIDATION, 'The bank account number entered in incorrect')
    .required('The bank account number should not be empty'),
});
