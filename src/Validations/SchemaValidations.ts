import * as Yup from 'yup'
export const validationSchema =[
    
    Yup.object().shape({
        email  : Yup.string().required("Email is required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address"),
        password : Yup.string().required("Password is empty").min(8, "Length should be more than 8").matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character').matches(/\d/, 'Password must contain at least one number')
    }),
    Yup.object().shape({
        firstName : Yup.string().required('First name is required').matches(/^[a-zA-Z' -]+$/, "Only letters are allowed"),
        lastName : Yup.string().required('Last name Required').matches(/^[a-zA-Z' -]+$/, "Only letters are allowed"),
        dateOfBirth: Yup.date().required('Date of birth is required').min(new Date('1900-01-01'), 'Date must be after 1900-01-01'),
        gender: Yup.string().required('Gender is required'), 
    }),
    Yup.object().shape({
        skinTone : Yup.string().required('skintone is required')
    }),
    Yup.object().shape({
        isChecked: Yup.bool().oneOf([true], 'You must agree to share your de-identified data')
      }),
    Yup.object().shape({
        email  : Yup.string().required("Email is required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address"),

    }),
    Yup.object().shape({
        password : Yup.string().required("Password is empty").min(8, "Length should be more than 8").matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character').matches(/\d/, 'Password must contain at least one number')
    }),
];