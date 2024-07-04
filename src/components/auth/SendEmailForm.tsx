import { Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label, LoginTextMessage, MyformControl } from "../../assets/styles/styled";
import { validationSchema } from "../../Validations/SchemaValidations";
import FormInputButton from "../common/Button";
import { InputField } from "../common/FomInputField";
const emails = ['sachin@gmail.com', 'infowind@gmail.com']
const SendEmailForm: React.FC = () => {
    const navigate = useNavigate()
    const currentValidationStep = validationSchema[3];
    const [emailFound, setEmailFound] = useState(true);
    const handleSubmit = (values: { email: string }) => {

        setEmailFound(!!emails.find((email: string, index: number) => email == values.email))
        if (emailFound) {
            navigate(`/checkemail/${values.email}`)
        }
    }
    return <>
        <Formik
            initialValues={{ email: '' }}
            validationSchema={currentValidationStep}
            validateOnChange={true}
            onSubmit={handleSubmit}
        >
            {(({ }) => (
                <Form>
                    <MyformControl >
                        <Label shrink className='labelDesign' >Email</Label>
                        <InputField name='email' className='email' label='' id='email' emailfound={emailFound} />
                    </MyformControl>
                    <FormInputButton isLoading={false} text='Send Reset Email' />
                </Form>
            ))}

        </Formik>
        <LoginTextMessage>
            <Typography variant="body2">Take me back to<Link to={'/'} className="anchor" color="primary" >login</Link></Typography>
        </LoginTextMessage>
    </>
}
export default SendEmailForm;