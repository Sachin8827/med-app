import { useState } from "react"
import { ErrorMsg, InfectedAreaSection, IntensitySection, MyformControl, SignpuFlexBox, SubmitButton } from "../../assets/styles/styled"
import { Box } from "@mui/material"
import { Formik, Form } from "formik"
import { ValdationHealth } from '../../Validations/ValidationHealth'
import InputField from "./common-components/InputField"
import FormNavBar from "./FormNavBar"
import AffectedAreas from "./common-components/AffectedAreasContent"
import firstImage from '../../../public/images/image (20).jpg'
import secondImage from '../../../public/images/image (21).jpg'
import thirdImage from '../../../public/images/image (22).jpg'
import fourthImage from '../../../public/images/image (23).jpg'
const SkinThickening: React.FC<{ handleNext: (values: any) => void, handlePrevious: () => void, skinThickening: number }> = ({ handleNext, handlePrevious, skinThickening }) => {

    const [selectedIntensity, setSelected] = useState(skinThickening);
    const currentValidationStep = ValdationHealth[6];

    const handleClick = (name: string, value: number, setFieldValue: (name: string, value: number) => void) => {
        setFieldValue(name, value);
        setSelected(value);
    }
    return <>
        <FormNavBar text='Affected area' />
        <IntensitySection>
            <Box>
                <AffectedAreas activeStep={6} diseaseName='Skin thickening' />
                <Formik
                    initialValues={{ skinThickening: skinThickening, }}
                    onSubmit={handleNext}
                    validationSchema={currentValidationStep}
                >
                    {({ errors, touched, setFieldValue, values }) => (
                        <Form>
                            <MyformControl sx={{ marginTop: '15px' }}>
                                <InfectedAreaSection >
                                    <InputField onClick={() => handleClick("skinThickening", 0, setFieldValue)} image={firstImage} name='skinThickening' isSelected={selectedIntensity == 0} num={0} />
                                    <InputField onClick={() => handleClick("skinThickening", 1, setFieldValue)} image={secondImage} name='skinThickening' isSelected={selectedIntensity == 1} num={1} />
                                    <InputField onClick={() => handleClick("skinThickening", 2, setFieldValue)} image={thirdImage} name='skinThickening' isSelected={selectedIntensity == 2} num={2} />
                                    <InputField onClick={() => handleClick("skinThickening", 3, setFieldValue)} image={fourthImage} name='skinThickening' isSelected={selectedIntensity == 3} num={3} />
                                </InfectedAreaSection>
                                {errors.skinThickening && touched.skinThickening ? <ErrorMsg variant='body2' color='error'>{errors.skinThickening}</ErrorMsg> : ""}
                            </MyformControl >
                            <SignpuFlexBox disabled={values.skinThickening < 0} sx={{ justifyContent: 'space-between' }}>
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
export default SkinThickening;