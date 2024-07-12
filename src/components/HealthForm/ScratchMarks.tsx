import { useState } from "react"
import { ErrorMsg, InfectedAreaSection, IntensitySection, MyformControl, SignpuFlexBox, SubmitButton } from "../../assets/styles/styled"
import { Formik, Form } from "formik"
import { Box } from "@mui/material"
import { ValdationHealth } from '../../Validations/ValidationHealth'
import InputField from "./common-components/InputField"
import FormNavBar from "./FormNavBar"
import AffectedAreas from "./common-components/AffectedAreasContent"
import firstImage from '../../../public/images/image (16).jpg'
import secondImage from '../../../public/images/image (17).jpg'
import thirdImage from '../../../public/images/image (18).jpg'
import fourthImage from '../../../public/images/image (19).jpg'
const ScratchMarks: React.FC<{ handleNext: (values: any) => void, handlePrevious: () => void, scratchMarksIntensity: number }> = ({ handleNext, handlePrevious, scratchMarksIntensity }) => {

    const [selectedIntensity, setSelected] = useState(scratchMarksIntensity);
    const currentValidationStep = ValdationHealth[5];

    const handleClick = (name: string, value: number, setFieldValue: (name: string, value: number) => void) => {
        setFieldValue(name, value);
        setSelected(value);
    }
    return <>
        <FormNavBar text='Affected area' />
        <IntensitySection>
            <Box>
                <AffectedAreas activeStep={5} diseaseName='Scratch marks' />
                <Formik
                    initialValues={{ scratchMarksIntensity: scratchMarksIntensity, }}
                    onSubmit={handleNext}
                    validationSchema={currentValidationStep}
                >
                    {({ errors, touched, setFieldValue, values }) => (
                        <Form>
                            <MyformControl sx={{ marginTop: '15px' }}>
                                <InfectedAreaSection >
                                    <InputField onClick={() => handleClick("scratchMarksIntensity", 0, setFieldValue)} image={firstImage} name='scratchMarksIntensity' isSelected={selectedIntensity == 0} num={0} />
                                    <InputField onClick={() => handleClick("scratchMarksIntensity", 1, setFieldValue)} image={secondImage} name='scratchMarksIntensity' isSelected={selectedIntensity == 1} num={1} />
                                    <InputField onClick={() => handleClick("scratchMarksIntensity", 2, setFieldValue)} image={thirdImage} name='scratchMarksIntensity' isSelected={selectedIntensity == 2} num={2} />
                                    <InputField onClick={() => handleClick("scratchMarksIntensity", 3, setFieldValue)} image={fourthImage} name='scratchMarksIntensity' isSelected={selectedIntensity == 3} num={3} />
                                </InfectedAreaSection>
                                {errors.scratchMarksIntensity && touched.scratchMarksIntensity ? <ErrorMsg variant='body2' color='error'>{errors.scratchMarksIntensity}</ErrorMsg> : ""}
                            </MyformControl >
                            <SignpuFlexBox sx={{ justifyContent: 'space-between' }}>
                                <SubmitButton type='submit' variant="contained" disabled={values.scratchMarksIntensity < 0}>
                                    Next
                                </SubmitButton>
                                <SubmitButton variant="outlined" onClick={handlePrevious}>
                                    Back
                                </SubmitButton>
                            </SignpuFlexBox>
                        </Form>
                    )}
                </Formik>
            </Box>
        </IntensitySection>
    </>
}
export default ScratchMarks;