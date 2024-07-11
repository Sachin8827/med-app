import { useState } from "react"
import { ErrorMsg, InfectedAreaSection, IntensitySection, MyformControl, SignpuFlexBox, SubmitButton } from "../../assets/styles/styled"
import { Box } from "@mui/material"
import { Formik, Form } from "formik"
import { ValdationHealth } from '../../Validations/ValidationHealth'
import FormNavBar from "./FormNavBar"
import InputField from "./common-components/InputField"
import AffectedAreas from "./common-components/AffectedAreasContent"
import firstImage from '../../../public/images/image (12).jpg'
import secondImage from '../../../public/images/image (13).jpg'
import thirdImage from '../../../public/images/image (14).jpg'
import fourthImage from '../../../public/images/image (15).jpg'
const Crusts: React.FC<{ handleNext: (values: any) => void, handlePrevious: () => void, crustsIntensity: number }> = ({ handleNext, handlePrevious, crustsIntensity }) => {

    const [selectedIntensity, setSelected] = useState(crustsIntensity);
    const currentValidationStep = ValdationHealth[4];

    const handleClick = (name: string, value: number, setFieldValue: (name: string, value: number) => void) => {
        setFieldValue(name, value);
        setSelected(value);
    }
    return <>
        <FormNavBar text='Affected area' />
        <IntensitySection>
            <Box>
                <AffectedAreas activeStep={4} diseaseName='Crusts & Oozing' />
                <Formik
                    initialValues={{ crustsIntensity: crustsIntensity, }}
                    onSubmit={handleNext}
                    validationSchema={currentValidationStep}
                >
                    {({ errors, touched, setFieldValue, values }) => (
                        <Form>
                            <MyformControl sx={{ marginTop: '15px' }}>
                                <InfectedAreaSection >
                                    <InputField onClick={() => handleClick("crustsIntensity", 0, setFieldValue)} image={firstImage} name='crustsIntensity' isSelected={selectedIntensity == 0} num={0} />
                                    <InputField onClick={() => handleClick("crustsIntensity", 1, setFieldValue)} image={secondImage} name='crustsIntensity' isSelected={selectedIntensity == 1} num={1} />
                                    <InputField onClick={() => handleClick("crustsIntensity", 2, setFieldValue)} image={thirdImage} name='crustsIntensity' isSelected={selectedIntensity == 2} num={2} />
                                    <InputField onClick={() => handleClick("crustsIntensity", 3, setFieldValue)} image={fourthImage} name='crustsIntensity' isSelected={selectedIntensity == 3} num={3} />
                                </InfectedAreaSection>
                                {errors.crustsIntensity && touched.crustsIntensity ? <ErrorMsg variant='body2' color='error'>{errors.crustsIntensity}</ErrorMsg> : ""}
                            </MyformControl >
                            <SignpuFlexBox disabled={values.crustsIntensity < 0} sx={{ justifyContent: 'space-between' }}>
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
export default Crusts;