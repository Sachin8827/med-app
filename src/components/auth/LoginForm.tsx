import { Visibility, VisibilityOff } from "@mui/icons-material"
import { IconButton, InputAdornment } from "@mui/material"
import { Box, Container } from "@mui/material"
import { Formik, Form } from "formik"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ForgotPassword, Label, LoginFormSection, MyformControl, SubmitButton } from "../../assets/styles/styled"
import { LoginType } from "../../Types/Types"
import { validationSchema } from "../../Validations/SchemaValidations"
import { EmailFormInputField, PasswordFormInputField } from "./FomInputField"

const LoginForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(true);
    const currentValidationStep = validationSchema[0];
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
    return <>

        <LoginFormSection className='customBox' >

            <Box sx={{ mt: 3 }}>
                <Formik initialValues={initialValues} validationSchema={currentValidationStep} validateOnChange={true} onSubmit={handleSubmit}>
                    {({ }) => (

                        < Form >
                            <MyformControl >
                                <Label shrink className='labelDesign' >Email</Label>
                                <EmailFormInputField name='email' className='email' label='' id='email' />
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

                            <SubmitButton fullWidth variant='contained' type="submit" >Login</SubmitButton>
                        </Form>

                    )}
                </Formik>
            </Box>

            <ForgotPassword variant='h6' component={'h6'} ><Link className='forgot' to={'/forgot'} >Forgot your password?</Link></ForgotPassword>
        </LoginFormSection>


    </>
}
export default LoginForm;