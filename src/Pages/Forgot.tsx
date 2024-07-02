import { Container, FormControl, Typography } from "@mui/material";
import { Form, Formik, validateYupSchema } from "formik";
import { Link } from "react-router-dom";
import { FlexBox, Label, LoginTextMessage, MyformControl, SubmitButton } from "../assets/styles/styled";
import FormInputButton from "../components/auth/Button";
import { EmailFormInputField } from "../components/auth/FomInputField";
import ImageHeading from "../components/common/ImageHeading";
import { validationSchema } from "../Validations/SchemaValidations";

const ForgotPassword: React.FC = () => {
    const currentValidationStep = validationSchema[0];
    const handleSubmit = (values: {}) => {
        console.log(values)
    }
    return <>
        <Container maxWidth={'sm'} sx={{ height: '90vh' }}>
            <FlexBox>
                <ImageHeading heading="Reset password" text="Type the email you used to sign up and we'll send you a password reset email" />
                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={currentValidationStep}
                    validateOnChange={true}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <MyformControl >
                            <Label shrink className='labelDesign' >Email</Label>
                            <EmailFormInputField name='email' className='email' label='' id='email' />
                        </MyformControl>

                        <FormInputButton isLoading={false} text='Send Reset Email' />
                    </Form>

                </Formik>
                <LoginTextMessage>
                    <Typography>Take me back to<Link to={'/'} className="anchor" >login</Link></Typography>
                </LoginTextMessage>
            </FlexBox>
        </Container>
    </>
}
export default ForgotPassword;