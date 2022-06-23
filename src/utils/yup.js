import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters long')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Must be at least 3 characters long')
    .required('No password provided')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Repeat your password'),
});

export const loginSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters long')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Must be at least 3 characters long')
    .required('No password provided')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});
