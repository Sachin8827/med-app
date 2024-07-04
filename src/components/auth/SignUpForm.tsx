import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import { Dayjs } from 'dayjs';
import { useState } from "react";
import { SignpuFlexBox, SubmitButton } from "../../assets/styles/styled";
import { validationSchema } from "../../Validations/SchemaValidations";
import Agreement from "./Agreement";
import EmailForm from "./EmailForm";
import PersonalInfo from "./PersonalInfo";
import SkinTone from "./SkinTone";
import { User } from "../../Types/Types";

const SignUpForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(2);
    const currentValidationStep = validationSchema[currentStep];
    const initialValues = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',

        gender: 'Female',
        skinTone: '',

    }
    const handleSubmit = () => {
        console.log("values")
        if (currentStep == 3) {

        }
        else {
            setCurrentStep(currentStep => currentStep + 1)
        }
    }
    const handlePrevious = () => {
        setCurrentStep((currentStep) => currentStep - 1)
    }
    const RenderPage = (values: any, setFieldValue: any) => {
        console.log(values)
        //it will render page using switch case
        switch (currentStep) {
            case 0: return <EmailForm email={values.email} password={values.password} />;
            case 1: return < PersonalInfo firstName={values.firstName} lastName={values.lastName} dateOfBirth={values.dateOfBirth} setFieldValue={setFieldValue} gender={values.gender} />
            case 2: return <SkinTone skinTone={values.skinTone} setFieldValue={setFieldValue} />;
            case 3: return <Agreement />;

        }
    }
    return <>
        <Box>
            <Formik
                initialValues={initialValues}
                validateOnChange={true}
                validationSchema={currentValidationStep}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        {RenderPage(values, setFieldValue)}
                        <SignpuFlexBox>
                            <SubmitButton type='submit' variant="contained" >{currentStep == 3 ? 'Finalize registratoin' : currentStep >= 1 ? "Continue" : 'Create account'}</SubmitButton>
                            {currentStep != 0 ? <SubmitButton variant="outlined" onClick={handlePrevious}>Previous</SubmitButton> : ""}
                        </SignpuFlexBox>
                    </Form>
                )}

            </Formik>
        </Box>
    </>
}
export default SignUpForm;