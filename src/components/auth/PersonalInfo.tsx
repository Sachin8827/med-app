
import { DateInput, Label, MyformControl, MyRadioButton } from "../../assets/styles/styled"
import { DateInputField, InputField } from "../common/FomInputField"
import ImageHeading from "../common/ImageHeading"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { PersonalInfoProps } from "../../Types/Types"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"
const PersonalInfo: React.FC<PersonalInfoProps> = ({ firstName, lastName, dateOfBirth, setFieldValue, gender }) => {
    const [genderInput, setGender] = useState(gender);
    const isFeMale = "Female" == genderInput;
    const isMale = "Male" == genderInput;
    const isOther = "Other" == genderInput
    const handleChange = (value: string) => {
        setFieldValue("gender", value)
        setGender(value)
    }
    return <>
        <ImageHeading heading="Tell us a little about yourself so we can help you get the most out of the service" />
        <MyformControl sx={{ mt: '1.7rem' }}>
            <Label shrink className='labelDesign' >First name</Label>
            <InputField name='firstName' className='firstName' label='' id='firstName' value={firstName} />
        </MyformControl>
        <MyformControl sx={{ mt: '1.5rem' }}>
            <Label shrink className='labelDesign' >Last name</Label>
            <InputField name='lastName' className='lastName' label='' id='lastName' value={lastName} />
        </MyformControl>
        <MyformControl sx={{ mt: '1.5rem' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Label shrink className='labelDesign' >Date of Birth</Label>
                {/* <DateInputField name="dateOfBirth" label="" value={dateOfBirth} onChange={(value: Date) => setFieldValue("dateOfBirth", value)}/> */}
                <DateInputField name="dateOfBirth" label="" value={''} />
            </LocalizationProvider>
        </MyformControl>
        <MyformControl sx={{ mt: '1.5rem' }}>
            <Label shrink className='labelDesign' >Gender</Label>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="gender"
                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
                <MyRadioButton onClick={(e) => handleChange("Female")} sx={{ backgroundColor: isFeMale ? '#87C81A' : "#F0F1F4 ", color: isFeMale ? 'white' : 'black' }} name="gender" value="Female" control={<Radio />} label="Female" />
                <MyRadioButton onClick={(e) => handleChange('Male')} sx={{ backgroundColor: isMale ? '#87C81A' : "#F0F1F4 ", color: isMale ? 'white' : 'black' }} name="gender" value="Male" control={<Radio />} label="Male" />
                <MyRadioButton onClick={(e) => handleChange('Other')} sx={{ backgroundColor: isOther ? '#87C81A' : "#F0F1F4 ", color: isOther ? 'white' : 'black' }} name="gender" value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
        </MyformControl>






    </>
}
export default PersonalInfo