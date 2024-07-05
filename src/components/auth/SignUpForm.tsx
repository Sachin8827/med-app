import { Box, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { LoginTextMessage, SignpuFlexBox, SubmitButton } from "../../assets/styles/styled";
import { validationSchema } from "../../Validations/SchemaValidations";
import Agreement from "./Agreement";
import EmailForm from "./EmailForm";
import PersonalInfo from "./PersonalInfo";
import SkinTone from "./SkinTone";
import { User } from "../../Types/Types";
import { Link } from "react-router-dom";

const SignUpForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const currentValidationStep = validationSchema[currentStep];
    const initialValues = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        skinTone: '',
        isChecked: false,

    }
    const handleSubmit = (values: User, { setTouched }: { setTouched: ({ }) => void }) => {
        console.log("Called")

        if (currentStep == 3) {
            console.log('subit')
        }
        else {
            setCurrentStep(currentStep => currentStep + 1)
            setTouched({})
        }
    }
    const handlePrevious = () => {
        setCurrentStep((currentStep) => currentStep - 1)
    }
    const RenderPage = (values: User, setFieldValue: any, handleChange: any) => {
        const { email, password, firstName, dateOfBirth, lastName, skinTone, isChecked } = values;
        switch (currentStep) {
            case 0: return <EmailForm email={email} password={password} />;
            case 1: return < PersonalInfo firstName={firstName} lastName={lastName} dateOfBirth={dateOfBirth} setFieldValue={setFieldValue} gender={values.gender} />
            case 2: return <SkinTone skinTone={skinTone} setFieldValue={setFieldValue} />;
            case 3: return <Agreement isChecked={isChecked} handleChange={handleChange} />;
        }
    }

    return <>
        <Box sx={{ height: !currentStep ? '35vh' : 'auto' }}>
            <Formik
                initialValues={initialValues}
                // validateOnChange={true}
                validationSchema={currentValidationStep}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue, handleChange, isValid, dirty, touched }) => (

                    <Form>
                        {RenderPage(values, setFieldValue, handleChange)}

                        <SignpuFlexBox sx={{ justifyContent: currentStep ? "" : 'center' }}>
                            <SubmitButton type='submit' variant="contained" sx={{ width: currentStep ? "auto" : "100%" }} disabled={currentStep == 3 ? (!(values.isChecked)) : false}>
                                {currentStep === 3 ? 'Finalize registration' : currentStep >= 1 ? "Continue" : 'Create account'}
                            </SubmitButton>
                            {currentStep !== 0 && (
                                <SubmitButton variant="outlined" onClick={handlePrevious}>
                                    Previous
                                </SubmitButton>
                            )}
                        </SignpuFlexBox>
                    </Form>
                )}

            </Formik>
            {!currentStep ? <LoginTextMessage >
                <Box >
                    <Typography>Already have an account? <Link to='/' style={{ color: '#076EB0', textDecoration: 'none' }}  >Log in</Link></Typography>
                    <Typography mt={2}>By signing up, I agree to</Typography>
                    <Link to='/terms' style={{ color: '#076EB0', textDecoration: 'none' }}>terms & conditions</Link>
                </Box>
            </LoginTextMessage> : ""}
        </Box>
    </>
}
export default SignUpForm;