
import { CustomRadioButton, ErrorMsg, Label, MyformControl, MyRadioButton, SignpuFlexBox, SubmitButton } from "../../assets/styles/styled"
import { DateInputField, GenderInputField, InputField } from "../common/FomInputField"
import ImageHeading from "../common/ImageHeading"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { PersonalInfoProps } from "../../Types/Types"
import { Box, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"
import { Form, Formik, useField } from "formik"
import { validationSchema } from "../../Validations/SchemaValidations"
const PersonalInfo: React.FC<PersonalInfoProps> = ({ firstName, lastName, gender, dateOfBirth, handleNext, handlePrevious }) => {
    const [genderInput, setGender] = useState(gender);
    const currentValidationStep = validationSchema[1];
    const isFeMale = "Female" == genderInput;
    const isMale = "Male" == genderInput;
    const isOther = "Other" == genderInput;
    const initialValues = {
        firstName,
        lastName,
        dateOfBirth,
        gender
    }
    console.log("asdf")
    const handleChange = (value: string, setFieldValue: (key: string, value: string) => void) => {
        setFieldValue("gender", value)
        setGender(value)
    }
    return <>
        <ImageHeading heading="Tell us a little about yourself so we can help you get the most out of the service" />
        <Formik
            initialValues={initialValues}
            // validateOnChange={true}
            validationSchema={currentValidationStep}
            onSubmit={handleNext}
        >
            {({ values, setFieldValue, errors, touched }) => (
                <Form>

                    <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', rowGap: "1.5rem" }}>
                        <MyformControl >
                            <Label shrink className='labelDesign' >First name</Label>
                            <InputField name='firstName' className='firstName' label='' id='firstName' value={values.firstName} />
                        </MyformControl>


                        <MyformControl >
                            <Label shrink className='labelDesign' >Last name</Label>
                            <InputField name='lastName' className='lastName' label='' id='lastName' value={values.lastName} />
                        </MyformControl>


                        <MyformControl >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Label shrink className='labelDesign' >Date of Birth</Label>
                                <DateInputField name="dateOfBirth" label="" />
                            </LocalizationProvider>
                        </MyformControl>


                        <MyformControl >
                            <Label shrink className='labelDesign' >Gender</Label>
                            <RadioGroup
                                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                            >
                                <GenderInputField isSelected={isFeMale} onClick={() => handleChange("Female", setFieldValue)} name="gender" value="Female" label="Female" />
                                <GenderInputField isSelected={isMale} onClick={() => handleChange('Male', setFieldValue)} name="gender" value="Male" label="Male" />
                                <GenderInputField isSelected={isOther} onClick={() => handleChange('Other', setFieldValue)} name="gender" value="Other" label="Other" />
                            </RadioGroup>
                            {errors.gender && touched.gender ? <ErrorMsg variant='body2' color='error'>{errors.gender}</ErrorMsg> : ""}
                        </MyformControl>
                    </Box>
                    <SignpuFlexBox sx={{ justifyContent: 'space-between' }}>
                        <SubmitButton type='submit' variant="contained">
                            Continue
                        </SubmitButton>
                        <SubmitButton variant="outlined" onClick={handlePrevious}>
                            Previous
                        </SubmitButton>
                    </SignpuFlexBox>
                </Form>
            )}
        </Formik>




    </>
}
export default PersonalInfo