import * as Yup from 'yup';

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .trim()
    .min(6, 'Old password field must be at least 6 characters long')
    .max(100, 'Old password field should not be more than 100 characters')
    .required('Old password field should not be empty')
    .matches(/(^\S+$)/, 'Space character is not allowed'),
  newPassword: Yup.string()
    .trim()
    .min(6, 'New password field must be at least 6 characters long')
    .max(100, 'New password field should not be more than 100 characters')
    .notOneOf([Yup.ref('oldPassword'), null], 'New password field should be different from the old one')
    .required('New password field should not be empty')
    .matches(/(^\S+$)/, 'Space character is not allowed'),
  confirmPassword: Yup.string()
    .trim()
    .required('Re-enter new password field should not be empty')
    .oneOf([Yup.ref('newPassword'), null], `The passwords you entered don't match`)
    .matches(/(^\S+$)/, 'Space character is not allowed'),
});

export const initialValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};
