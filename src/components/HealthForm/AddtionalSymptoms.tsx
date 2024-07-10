import { Box, Rating, Slider, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { useState } from "react";
import { AdditonalSymptomSection, CustomRating, Input, MultilineInput, MyformControl, RateValue } from "../../assets/styles/styled";
import { SubmitButton } from "../../styled";
import RatingDisease from "./common-components/Rating";
import FormNavBar from "./FormNavBar";


const AdditionalSymptoms: React.FC<{ handleNext: (values: any) => void }> = ({ handleNext }) => {
    const [psychologicalState, setPsychologicalState] = useState(1);
    const [sleepState, setSleepState] = useState(1);
    const [itchingState, setItchingState] = useState(1)

    return <>
        <FormNavBar text='Intensity of your symptoms' />

        <AdditonalSymptomSection mt={3}>
            <Typography variant='h5'>Additional symptoms</Typography>
            <Formik
                initialValues={{
                    psychologicalState: psychologicalState,
                    sleepState: sleepState,
                    itchingState: itchingState,
                    additionalSymptoms: ''
                }}
                onSubmit={handleNext}
            >
                {({ values, setFieldValue }) => (

                    <Form >
                        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
                            <Typography mt={2} variant="subtitle1" sx={{ fontWeight: 600 }}>Assess your psychological state</Typography>
                            <MyformControl sx={{ height: "48px", borderRadius: '12px', }}>
                                <RatingDisease setFieldValue={setFieldValue} value={psychologicalState} setValue={setPsychologicalState} name="psychologicalState" />
                            </MyformControl>
                            <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                                <Typography variant="body2">I feel great</Typography>
                                <Typography variant="body2">I feel depressed</Typography>
                            </Box>


                            <Typography mt={2} variant="subtitle1" sx={{ fontWeight: 600 }}>Evaluate the state of your sleep</Typography>
                            <MyformControl sx={{ mt: 1, height: "48px", borderRadius: '12px', }}>
                                <RatingDisease setFieldValue={setFieldValue} value={sleepState} setValue={setSleepState} name="sleepState" />
                            </MyformControl>
                            <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                                <Typography variant="body2">I sleep well</Typography>
                                <Typography variant="body2">I sleep very uneasy</Typography>
                            </Box>

                            <Typography mt={2} variant="subtitle1" sx={{ fontWeight: 600 }}>Evaluate the state of your sleep</Typography>
                            <MyformControl sx={{ mt: 1, height: "48px", borderRadius: '12px', }}>
                                <RatingDisease setFieldValue={setFieldValue} value={itchingState} setValue={setItchingState} name="itchingState" />
                            </MyformControl>
                            <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                                <Typography variant="body2">No itching</Typography>
                                <Typography variant="body2">Unbearable itching</Typography>
                            </Box>

                            <Typography mt={3} variant="subtitle1" sx={{ fontWeight: 600 }}>Describe additional symptoms that you think are important, if you have them</Typography>
                            <MyformControl sx={{ mt: 1, borderRadius: '12px', }}>
                                <MultilineInput name="additionalSymptoms" multiline rows={3} placeholder='Drowsiness, dizziness, etc.' />
                            </MyformControl>
                            <SubmitButton variant="contained" fullWidth type='submit'>Next</SubmitButton>
                        </Box>
                    </Form>
                )}
            </Formik>
        </AdditonalSymptomSection>


    </>
}
export default AdditionalSymptoms;