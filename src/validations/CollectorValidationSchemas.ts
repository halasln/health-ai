import * as Yup from 'yup';

export const ageValidationSchema = Yup.object().shape({
  age: Yup.number()
    .required('Enter your age')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
});

export const heightValidationSchema = Yup.object().shape({
  height: Yup.number()
    .required('Enter your height')
    .positive('Height must be a positive number')
    .integer('Height must be an integer'),
  weight: Yup.number()
    .required('Enter your weight')
    .positive('Weight must be a positive number')
    .integer('Weight must be an integer'),
});

export const registerValidationSchema = Yup.object({
  firstName: Yup.string().required('Please enter your full name'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Please enter your email'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please enter your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});
