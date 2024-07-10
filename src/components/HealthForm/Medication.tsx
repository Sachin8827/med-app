import { Typography } from "@mui/material"
import { Formik } from "formik"
import { AdditonalSymptomSection } from "../../assets/styles/styled"
import FormNavBar from "./FormNavBar"

const Medications: React.FC<{ handleSubmit: (values: any) => void }> = ({ handleSubmit }) => {
    return <>
        <FormNavBar text='Additional symptoms' />
        <AdditonalSymptomSection mt={3}>
            <Typography variant='h5'>Use of medications</Typography>
            <Formik
                initialValues={{
                    pyscholgicalState: -1,
                    sleepState: -1,
                    itchingState: -1,
                    additionalSymptoms: ''
                }}
                onSubmit={handleSubmit}
            ></Formik>
        </AdditonalSymptomSection>
    </>
}
export default Medications