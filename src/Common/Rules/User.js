import * as Yup from 'yup';

export const initialValues = {
  name: '',
  email: ''
};

export const schema = Yup.object().shape({
  name: Yup
    .string()
    .max(255)
    .required('Name is required'),
  email: Yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required')
});
