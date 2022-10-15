import * as Yup from 'yup';

export const searchSchema = Yup.object({
  location: Yup.string().required('Enter location'),
});
