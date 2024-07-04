import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label, LoginTextMessage, MyformControl } from "../../assets/styles/styled";
import { validationSchema } from "../../Validations/SchemaValidations";
import { PasswordFormInputField } from "../common/FomInputField";
import FormInputButton from "../common/Button";

const ResetPasswordForm: React.FC<{ setAlert: (status: boolean) => void }> = ({ setAlert }) => {
    const currentValidationStep = validationSchema[4];
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show: Boolean) => !show);
    const navigate = useNavigate()
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleSubmit = (values: { password: string }) => {

        setAlert(true)
        setTimeout(() => {
            setAlert(false)
            navigate('/')
        }, 1000)
    }
    return <>
        <Formik
            initialValues={{ password: '' }}
            validationSchema={currentValidationStep}
            validateOnChange={true}
            onSubmit={handleSubmit}
        >
            {(({ }) => (
                <Form>
                    <MyformControl >
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
                    <FormInputButton isLoading={false} text='Continue' />
                </Form>
            ))}

        </Formik>
        <LoginTextMessage>
            <Typography variant="body2">Take me back to<Link to={'/'} className="anchor" color="primary" >login</Link></Typography>
        </LoginTextMessage>
    </>
}
export default ResetPasswordForm;