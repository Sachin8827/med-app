import { useState } from "react"
import FormNavBar from "./FormNavBar"
import { ErrorMsg, InfectedAreaSection, IntensitySection, MyformControl, SignpuFlexBox, SubmitButton } from "../../assets/styles/styled"
import { Box } from "@mui/material"
import { Formik, Form } from "formik"
import { ValdationHealth } from '../../Validations/ValidationHealth'
import firstImage from '../../../public/images/image (4).jpg'
import secondImage from '../../../public/images/image (5).jpg'
import thirdImage from '../../../public/images/image (6).jpg'
import fourthImage from '../../../public/images/image (7).jpg'
import AffectedAreas from "./common-components/AffectedAreasContent"
import InputField from "./common-components/InputField"
const DrynessIntensity: React.FC<{ handleNext: (values: any) => void, handlePrevious: () => void, drynessIntensity: number }> = ({ handleNext, handlePrevious, drynessIntensity }) => {

    const [selectedIntensity, setSelected] = useState(drynessIntensity);
    const currentValidationStep = ValdationHealth[1];

    const handleClick = (name: string, value: number, setFieldValue: (name: string, value: number) => void) => {
        setFieldValue(name, value);
        setSelected(value);
    }
    return <>
        <FormNavBar text='Affected area' />
        <IntensitySection>
            <Box>
                <AffectedAreas activeStep={1} diseaseName='Dryness' />
                <Formik
                    initialValues={{ drynessIntensity: drynessIntensity, }}
                    onSubmit={handleNext}
                    validationSchema={currentValidationStep}
                >
                    {({ errors, touched, setFieldValue, values }) => (
                        <Form>
                            <MyformControl sx={{ marginTop: '15px' }}>
                                <InfectedAreaSection >
                                    <InputField onClick={() => handleClick("drynessIntensity", 0, setFieldValue)} image={firstImage} name='drynessIntensity' isSelected={selectedIntensity == 0} num={0} />
                                    <InputField onClick={() => handleClick("drynessIntensity", 1, setFieldValue)} image={secondImage} name='drynessIntensity' isSelected={selectedIntensity == 1} num={1} />
                                    <InputField onClick={() => handleClick("drynessIntensity", 2, setFieldValue)} image={thirdImage} name='drynessIntensity' isSelected={selectedIntensity == 2} num={2} />
                                    <InputField onClick={() => handleClick("drynessIntensity", 3, setFieldValue)} image={fourthImage} name='drynessIntensity' isSelected={selectedIntensity == 3} num={3} />
                                </InfectedAreaSection>
                                {errors.drynessIntensity && touched.drynessIntensity ? <ErrorMsg variant='body2' color='error'>{errors.drynessIntensity}</ErrorMsg> : ""}
                            </MyformControl >
                            <SignpuFlexBox sx={{ justifyContent: 'space-between' }}>
                                <SubmitButton disabled={values.drynessIntensity < 0} type='submit' variant="contained">
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
export default DrynessIntensity