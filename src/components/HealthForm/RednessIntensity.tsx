import FormNavBar from "./FormNavBar"
import { ErrorMsg, InfectedAreaSection, IntensitySection, MyformControl, SignpuFlexBox, SubmitButton } from "../../assets/styles/styled"
import { Box } from "@mui/material"
import { Formik, Form } from "formik"
import firstImage from '../../../public/images/image.jpg'
import secondImage from '../../../public/images/image (1).jpg'
import thirdImage from '../../../public/images/image (2).jpg'
import fourthImage from '../../../public/images/image (3).jpg'
import { useState } from "react"
import AffectedAreas from "./common-components/AffectedAreasContent"
import InputField from "./common-components/InputField"
import { ValdationHealth } from '../../Validations/ValidationHealth'
const RednessIntensity: React.FC<{ handleNext: (values: any) => void, handlePrevious: () => void, rednessIntensity: number }> = ({ handleNext, handlePrevious, rednessIntensity }) => {

    const [selectedIntensity, setSelected] = useState(rednessIntensity);
    const currentValidationStep = ValdationHealth[2];
    const handleClick = (name: string, value: number, setFieldValue: (name: string, value: number) => void) => {
        setFieldValue(name, value);
        setSelected(value);
    }
    return <>
        <FormNavBar text='Affected area' />
        <IntensitySection>
            <Box>
                <AffectedAreas activeStep={2} diseaseName='Redness' />
                <Formik
                    initialValues={{ rednessIntensity: rednessIntensity, }}
                    onSubmit={handleNext}
                    validationSchema={currentValidationStep}
                >
                    {({ errors, touched, setFieldValue }) => (
                        <Form>
                            <MyformControl sx={{ marginTop: '15px' }}>
                                <InfectedAreaSection >
                                    <InputField onClick={() => handleClick("rednessIntensity", 0, setFieldValue)} image={firstImage} name='rednessIntensity' isSelected={selectedIntensity == 0} num={0} />
                                    <InputField onClick={() => handleClick("rednessIntensity", 1, setFieldValue)} image={secondImage} name='rednessIntensity' isSelected={selectedIntensity == 1} num={1} />
                                    <InputField onClick={() => handleClick("rednessIntensity", 2, setFieldValue)} image={thirdImage} name='rednessIntensity' isSelected={selectedIntensity == 2} num={2} />
                                    <InputField onClick={() => handleClick("rednessIntensity", 3, setFieldValue)} image={fourthImage} name='rednessIntensity' isSelected={selectedIntensity == 3} num={3} />
                                </InfectedAreaSection>
                                {errors.rednessIntensity && touched.rednessIntensity ? <ErrorMsg variant='body2' color='error'>{errors.rednessIntensity}</ErrorMsg> : ""}

                            </MyformControl >
                            <SignpuFlexBox sx={{ justifyContent: 'space-between' }}>
                                <SubmitButton type='submit' variant="contained">
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
export default RednessIntensity