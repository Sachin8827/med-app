import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Container, IconButton, InputAdornment } from '@mui/material';
import { validationSchema } from '../Validations/SchemaValidations';
import { Form, Formik } from 'formik';
import { LoginType } from '../Types/Types';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { FormControl } from '@mui/base';
import { ForgotPassword, Label, LoginFormSection } from '../assets/styles/styled';
import { EmailFormInputField, PasswordFormInputField } from '../components/auth/FomInputField';
import ImageHeading from '../components/common/ImageHeading';
import FormInputButton from '../components/auth/Button';
import LoginForm from '../components/auth/LoginForm';



const Login = () => {


    return (
        <Container maxWidth="sm" > {/* Adjusted maxWidth for responsiveness */}

            <ImageHeading heading='Hi there! Have we met before?' />
            <LoginForm />

        </Container >
    );
};

export default Login;
