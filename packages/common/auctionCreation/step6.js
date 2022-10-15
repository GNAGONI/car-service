import * as Yup from 'yup';

export const validationSchemaStep6 = Yup.object().shape({
  password: Yup.string()
    .trim()
    .min(6, 'Password field should be at least 6 characters')
    .max(100, 'Password field should not be more than 100 characters')
    .matches(/(^\S+$)/, 'Space character is not allowed')
    .required('Password field should not be empty'),
});

export const initialValues = {
  password: '',
};
