import { Link } from "react-router-dom"
import { CloseIconWrapper, ErrorMsg, Label, MyformControl, SubmitButton } from "../assets/styles/styled"
import CloseIcon from '@mui/icons-material/Close';
import { Box, Container, RadioGroup, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Form, Formik } from "formik";
import { validationSchema } from "../Validations/SchemaValidations";
import { DateInputField, GenderInputField, InputField } from "../components/common/FomInputField";

const EditProfile = () => {

    const [userState, setUserState] = useState({
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1996/05/23',
        gender: 'male'
    })
    const isFeMale = userState.gender == 'Female';
    const isMale = userState.gender == 'Male';
    const isOther = userState.gender == 'Other';
    const isLandScape = useMediaQuery('(orientation  : landscape)');
    const currentValidationStep = validationSchema[1];

    const handleSubmit = () => {
        console.log(userState)
    }
    const handleChange = (value: string, setFieldValue: (name: string, value: string) => void) => {
        setFieldValue("gender", value);
        setUserState({ ...userState, gender: value })
    }

    return <>
        <CloseIconWrapper sx={{ display: isLandScape ? 'none' : 'flex' }} >
            <Link to={'/'} ><CloseIcon sx={{ color: '#A3A3A3', fontSize: '16px', }} /></Link>
        </CloseIconWrapper>
        <Container sx={{
            maxWidth: {
                xs: '100%',
                sm: '376px',
                lg: '508px',
                xl: '616px'
            }
        }}
        >
            <Typography variant="h6">Edit profile</Typography>
            <Formik
                initialValues={userState}
                validationSchema={currentValidationStep}
                onSubmit={handleSubmit}
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
                                <Label shrink className='labelDesign' >Date of Birth</Label>
                                <DateInputField name="dateOfBirth" label="" />
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
                        <SubmitButton variant="contained" fullWidth type="submit">Update my information</SubmitButton>
                    </Form>
                )}
            </Formik>
        </Container>

    </>
}
export default EditProfile