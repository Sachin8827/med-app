import { Visibility, VisibilityOff } from "@mui/icons-material"
import { IconButton, InputAdornment, Typography } from "@mui/material"
import { Box, } from "@mui/material"
import { Formik, Form } from "formik"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Flex, ForgotPassword, Label, LoginFormSection, MyAlert, MyformControl } from "../../assets/styles/styled"
import { LoginType, User } from "../../Types/Types"
import { validationSchema } from "../../Validations/SchemaValidations"
import FormInputButton from "../common/Button"
import { InputField, PasswordFormInputField } from "../common/FomInputField"

const LoginForm: React.FC = () => {

    const [showPassword, setShowPassword] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [foundStatus, setFoundStatus] = useState(false)
    const currentValidationStep = validationSchema[0];
    const initialValues = {
        email: '',
        password: ''
    }

    const handleSubmit = (values: LoginType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        (values.email != 'sachin@gmail.com') ? setFoundStatus(true) : setFoundStatus(false)
        console.log(foundStatus)
        console.log(values)
    }
    const handleClickShowPassword = () => setShowPassword((show: Boolean) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return <>
        <LoginFormSection className='customBox' >
            <Box sx={{ mt: 2 }}>
                <Formik initialValues={initialValues} validationSchema={currentValidationStep} validateOnChange={true} onSubmit={handleSubmit}>
                    {({ }) => (
                        < Form >
                            <MyformControl >
                                <Label shrink className='labelDesign' >Email</Label>
                                <InputField name='email' className='email' label='' id='email' />
                            </MyformControl>
                            <MyformControl style={{ marginTop: '2rem' }}>
                                <Label shrink className='labelDesign'>Password</Label>
                                <PasswordFormInputField
                                    className="password"
                                    label=''
                                    name='password'
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    endadornment={
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
                                    }
                                />
                            </MyformControl>
                            <FormInputButton isLoading={isLoading} text='Log in' />
                        </Form>
                    )}
                </Formik>
            </Box>
            <ForgotPassword variant='h6'  ><Link className='forgot' to={'/forgot'} ><Typography variant="body2" color={'primary'}>Forgot your password?</Typography></Link></ForgotPassword>
            {foundStatus ? <Flex>
                <MyAlert severity="info" onClose={() => { setFoundStatus(false) }}>
                    User not found
                </MyAlert>
            </Flex> : ""}
        </LoginFormSection>
    </>
}
export default LoginForm;