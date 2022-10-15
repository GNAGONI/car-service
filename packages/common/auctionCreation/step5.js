import * as Yup from 'yup';

export const validationSchemaStep5 = Yup.object().shape({
  confirmationOfTermsAndConditions: Yup.boolean()
    .required('Please, accept terms and conditions')
    .oneOf([true], 'Please, accept terms and conditions'),
  packageId: Yup.number().required('Please, select a package'),
});

export const initialValues = {
  confirmationOfTermsAndConditions: false,
  packageId: '',
};
