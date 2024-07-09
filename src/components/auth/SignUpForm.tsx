import { Box, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { LoginTextMessage, SignpuFlexBox, SubmitButton } from "../../assets/styles/styled";
import Agreement from "./Agreement";
import EmailForm from "./EmailForm";
import PersonalInfo from "./PersonalInfo";
import SkinTone from "./SkinTone";
import { User } from "../../Types/Types";
import { Link } from "react-router-dom";

const SignUpForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        skinTone: '',
        isChecked: false,

    })
    const handleSubmit = (values: User) => {
        console.log(formData)
    }
    const handleNext = (values: any, { setTouched }: { setTouched: ({ }) => void }) => {

        setFormData(prevFormData => ({
            ...prevFormData,
            ...values
        }));
        setCurrentStep(currentStep => currentStep + 1)

        setTouched({})
    }
    const handlePrevious = () => {
        setCurrentStep((currentStep) => currentStep - 1)
    }
    const RenderPage = () => {
        const { email, password, firstName, dateOfBirth, lastName, skinTone, isChecked, gender } = formData;
        switch (currentStep) {
            case 0: return <EmailForm email={email} password={password} handleNext={handleNext} />;
            case 1: return < PersonalInfo handleNext={handleNext} firstName={firstName} lastName={lastName} dateOfBirth={dateOfBirth} handlePrevious={handlePrevious} gender={gender} />
            case 2: return <SkinTone handlePrevious={handlePrevious} skinTone={skinTone} handleNext={handleNext} />;
            case 3: return <Agreement isChecked={isChecked} handleSubmit={handleSubmit} handlePrevious={handlePrevious} />;
        }
    }

    return <>
        <Box sx={{ height: !currentStep ? '35vh' : 'auto' }}>

            {RenderPage()}

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