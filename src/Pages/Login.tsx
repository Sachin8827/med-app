import { makeStyles } from '@mui/styles';
import { Button, IconButton, InputAdornment, Theme } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Container, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import logo from '../../public/images/logo.svg';
import { validationSchema } from '../Validations/SchemaValidations';
import { Form, Formik } from 'formik';
import { LoginType } from '../Types/Types';
import FormInputField from '../components/auth/FomInputField';
import { Link } from 'react-router-dom'
import { useState } from 'react';
const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const currentValidationStep = validationSchema[0];
    const useStyles = makeStyles((theme: Theme) => ({
        customBox: {
            marginTop: "24px",
            textAlign: 'left'
        },
        'text-heading': {
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "32px",
            textAlign: "left",
            color: '#2F2F32',
        },


    }));
    const classes = useStyles();
    const initialValues = {
        email: '',
        password: ''
    }
    const handleSubmit = (values: LoginType) => {
        console.log(values)
    }
    const handleClickShowPassword = () => setShowPassword((show: Boolean) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Container maxWidth="sm"> {/* Adjusted maxWidth for responsiveness */}
            <Box>
                <ImageList>
                    <img src={logo} alt="Logo" />
                </ImageList>
            </Box>
            <Box className={classes.customBox}>
                <Typography variant="h5" component="h5" color="black" className={classes['text-heading']}>
                    Hi there! Have we met before?
                </Typography>
                <Box style={{ marginTop: '20px' }}>
                    <Formik initialValues={initialValues} validationSchema={currentValidationStep} validateOnChange={false} onSubmit={handleSubmit}>
                        {({ values }) => (
                            <Form>
                                <FormInputField type='text' label='Email' name='email' className='email' value={values.email} id='email' />
                                <FormInputField type={showPassword ? 'text' : 'password'} label='Password' name='password' className='password' value={values.password} endadornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                } />
                                <Button fullWidth variant='contained' sx={{ backgroundColor: '#076EB0', marginTop: '20px' }} type='submit'>Login</Button>
                            </Form>

                        )}
                    </Formik>
                </Box>
                <Typography width='100%' textAlign={'center'} marginTop='12px' variant='h6' component={'h6'} ><Link style={{ color: '#076EB0', textDecoration: 'none' }} to={'/forgot'} >Forgot your password?</Link></Typography>
            </Box>
        </Container >
    );
};

export default Login;
