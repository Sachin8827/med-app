import { Box, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { useState } from "react";
import { AdditonalSymptomSection, MultilineInput, MyformControl } from "../../assets/styles/styled";
import { SubmitButton } from "../../assets/styles/styled";
import { ValdationHealth } from "../../Validations/ValidationHealth";
import DisplayHealthStatus from "./common-components/DisplayHealthStatus";
import RatingDisease from "./common-components/Rating";
import FormNavBar from "./FormNavBar";

const AdditionalSymptoms: React.FC<{ handleNext: (values: any) => void }> = ({ handleNext }) => {

    const [psychologicalState, setPsychologicalState] = useState(0);
    const [sleepState, setSleepState] = useState(0);
    const [itchingState, setItchingState] = useState(0);
    const [isFormValid, setFormValid] = useState(false);
    const validationStep = ValdationHealth[7]

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.psychologicalState || !values.sleepState || !values.itchingState) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
        return errors;
    }

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
                validationSchema={validationStep}
                onSubmit={handleNext}
                validate={validate}
            >
                {({ setFieldValue, isValid }) => (
                    <Form >
                        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
                            <Typography mt={2} variant="subtitle1" sx={{ fontWeight: 600 }}>Assess your psychological state</Typography>
                            <MyformControl sx={{ height: "48px", borderRadius: '12px', }}>
                                <RatingDisease setFieldValue={setFieldValue} value={psychologicalState} setValue={setPsychologicalState} name="psychologicalState" />
                            </MyformControl>
                            <DisplayHealthStatus goodHealth="I feel great" badHealth="I feel depressed" />
                            <Typography mt={2} variant="subtitle1" sx={{ fontWeight: 600 }}>Evaluate the state of your sleep</Typography>
                            <MyformControl sx={{ mt: 1, height: "48px", borderRadius: '12px', }}>
                                <RatingDisease setFieldValue={setFieldValue} value={sleepState} setValue={setSleepState} name="sleepState" />
                            </MyformControl>
                            <DisplayHealthStatus goodHealth="I sleep well" badHealth="I sleep very uneasy" />
                            <Typography mt={2} variant="subtitle1" sx={{ fontWeight: 600 }}>Evaluate the state of your sleep</Typography>
                            <MyformControl sx={{ mt: 1, height: "48px", borderRadius: '12px', }}>
                                <RatingDisease setFieldValue={setFieldValue} value={itchingState} setValue={setItchingState} name="itchingState" />
                            </MyformControl>
                            <DisplayHealthStatus goodHealth="No itching" badHealth="Unbearable itching" />
                            <Typography mt={3} variant="subtitle1" sx={{ fontWeight: 600 }}>Describe additional symptoms that you think are important, if you have them</Typography>
                            <MyformControl sx={{ mt: 1, borderRadius: '12px', }}>
                                <MultilineInput onChange={(e) => setFieldValue('additionalSymptoms', e.target.value)} name="additionalSymptoms" multiline rows={3} placeholder='Drowsiness, dizziness, etc.' />
                            </MyformControl>
                            <SubmitButton variant="contained" fullWidth type='submit' disabled={!isValid || !isFormValid} >Calculate</SubmitButton>
                        </Box>
                    </Form>
                )}
            </Formik>
        </AdditonalSymptomSection>
    </>
}
export default AdditionalSymptoms;