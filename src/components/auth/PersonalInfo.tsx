
import { CustomRadioButton, ErrorMsg, Label, MyformControl, MyRadioButton } from "../../assets/styles/styled"
import { DateInputField, InputField } from "../common/FomInputField"
import ImageHeading from "../common/ImageHeading"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { PersonalInfoProps } from "../../Types/Types"
import { Box, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"
import { useField } from "formik"
const PersonalInfo: React.FC<PersonalInfoProps> = ({ firstName, lastName, setFieldValue, gender }) => {
    const [genderInput, setGender] = useState(gender);
    const isFeMale = "Female" == genderInput;
    const isMale = "Male" == genderInput;
    const isOther = "Other" == genderInput
    const [field, meta, helper] = useField('gender');
    const isError = meta.error && meta.touched;
    const handleChange = (value: string) => {
        setFieldValue("gender", value)
        setGender(value)
    }
    return <>
        <ImageHeading heading="Tell us a little about yourself so we can help you get the most out of the service" />
        <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', rowGap: "1.5rem" }}>
            <MyformControl >
                <Label shrink className='labelDesign' >First name</Label>
                <InputField name='firstName' className='firstName' label='' id='firstName' value={firstName} />
            </MyformControl>


            <MyformControl >
                <Label shrink className='labelDesign' >Last name</Label>
                <InputField name='lastName' className='lastName' label='' id='lastName' value={lastName} />
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
                    <CustomRadioButton isError={isError} isSelected={isFeMale} onClick={(e) => handleChange("Female")} name="gender" value="Female" control={<Radio />} label="Female" />
                    <CustomRadioButton isError={isError} isSelected={isMale} onClick={(e) => handleChange('Male')} name="gender" value="Male" control={<Radio />} label="Male" />
                    <CustomRadioButton isError={isError} isSelected={isOther} onClick={(e) => handleChange('Other')} name="gender" value="Other" control={<Radio />} label="Other" />
                </RadioGroup>
                {meta.error && meta.touched ? <ErrorMsg variant='body2' color='error'>{meta.error}</ErrorMsg> : ""}
            </MyformControl>
        </Box>





    </>
}
export default PersonalInfo