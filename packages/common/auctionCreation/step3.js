import * as Yup from 'yup';

export const validationSchemaStep3 = Yup.object().shape({
  photos: Yup.array()
    .required('At least one photo is required')
    .min(1, 'Minimum 1 photo'),
});

export const initialValues = {
  photos: [],
};
