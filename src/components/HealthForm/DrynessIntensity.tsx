import FormNavBar from "./FormNavBar"
import { BodySection, BodySectionForm, CustomStepper, ImageDiv, InfectedAreaSecion, IntensitySection, MyformControl, NextButtonDiv, SignpuFlexBox, SubmitButton, SvgBox } from "../../assets/styles/styled"
import { Box, ImageList, ImageListItem, MobileStepper, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Formik, Form } from "formik"
import firstImage from '../../../public/images/image.jpg'
import secondImage from '../../../public/images/image (1).jpg'
import thirdImage from '../../../public/images/image (2).jpg'
import fourthImage from '../../../public/images/image (3).jpg'
const DrynessIntensity: React.FC<{handleNext : (values:any) =>void, handlePrevious : ()=>void}> = ({handleNext, handlePrevious}) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    return <>
        <FormNavBar text='Affected area' />
        <IntensitySection>
            <Box>
                <Typography variant='h5'>Intensity of your symptoms</Typography>
                {isLargeScreen && <Typography mt={1} variant="body2">Press the zones that are affected by eczema</Typography>}
                <Box mt={2} sx={{ display: 'flex', justifyContent: '', alignItems: 'center', columnGap: 1.5 }}>
                    <Typography>1/6</Typography>
                    <CustomStepper
                        variant="progress"
                        steps={6}
                        position="static"
                        activeStep={1} backButton={undefined} nextButton={undefined}

                    />
                </Box>
                <Typography mt={1} variant='h6'>Dryness</Typography>
                <Typography mt={1} variant="body2">Evaluate the symptom's intensity on the zone you selected, without regard to the location of the displayed image.</Typography>
                <Formik
                    initialValues={{ drynessIntensity: -1, }}
                    onSubmit={handleNext}
                >
                    {() => (
                        <Form>
                            <MyformControl sx={{ marginTop: '15px' }}>
                                <InfectedAreaSecion name='rednessIntensity'>

                                    <ImageDiv>
                                        <img src={firstImage} />
                                        
                                    </ImageDiv>
                                    <ImageDiv>
                                        <img src={secondImage} />
                                    </ImageDiv>
                                    <ImageDiv>
                                        <img src={thirdImage} />
                                    </ImageDiv>
                                    <ImageDiv>
                                        <img src={fourthImage} />
                                    </ImageDiv>

                                </InfectedAreaSecion>
                            </MyformControl>
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
export default DrynessIntensity