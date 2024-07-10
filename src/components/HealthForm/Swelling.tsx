import FormNavBar from "./FormNavBar"
import { ErrorMsg, InfectedAreaSection, IntensitySection, MyformControl, SignpuFlexBox, SubmitButton } from "../../assets/styles/styled"
import { Box } from "@mui/material"
import { Formik, Form } from "formik"
import firstImage from '../../../public/images/image (8).jpg'
import secondImage from '../../../public/images/image (9).jpg'
import thirdImage from '../../../public/images/image (10).jpg'
import fourthImage from '../../../public/images/image (11).jpg'
import { useState } from "react"
import AffectedAreas from "./common-components/AffectedAreasContent"
import InputField from "./common-components/InputField"
import { ValdationHealth } from '../../Validations/ValidationHealth'
const Swelling: React.FC<{ handleNext: (values: any) => void, handlePrevious: () => void, swellingIntensity: number }> = ({ handleNext, handlePrevious, swellingIntensity }) => {

    const [selectedIntensity, setSelected] = useState(swellingIntensity);
    const currentValidationStep = ValdationHealth[3];
    const handleClick = (name: string, value: number, setFieldValue: (name: string, value: number) => void) => {
        setFieldValue(name, value);
        setSelected(value);
    }
    return <>
        <FormNavBar text='Affected area' />
        <IntensitySection>
            <Box>
                <AffectedAreas activeStep={3} diseaseName='Swelling' />
                <Formik
                    initialValues={{ swellingIntensity: swellingIntensity, }}
                    onSubmit={handleNext}
                    validationSchema={currentValidationStep}
                >
                    {({ errors, touched, setFieldValue }) => (
                        <Form>
                            <MyformControl sx={{ marginTop: '15px' }}>
                                <InfectedAreaSection >
                                    <InputField onClick={() => handleClick("swellingIntensity", 0, setFieldValue)} image={firstImage} name='swellingIntensity' isSelected={selectedIntensity == 0} num={0} />
                                    <InputField onClick={() => handleClick("swellingIntensity", 1, setFieldValue)} image={secondImage} name='swellingIntensity' isSelected={selectedIntensity == 1} num={1} />
                                    <InputField onClick={() => handleClick("swellingIntensity", 2, setFieldValue)} image={thirdImage} name='swellingIntensity' isSelected={selectedIntensity == 2} num={2} />
                                    <InputField onClick={() => handleClick("swellingIntensity", 3, setFieldValue)} image={fourthImage} name='swellingIntensity' isSelected={selectedIntensity == 3} num={3} />
                                </InfectedAreaSection>
                                {errors.swellingIntensity && touched.swellingIntensity ? <ErrorMsg variant='body2' color='error'>{errors.swellingIntensity}</ErrorMsg> : ""}

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
export default Swelling