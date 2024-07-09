
import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material"
import { Field, Form, Formik } from "formik"
import { useState } from "react";
import { SignpuFlexBox, SubmitButton } from "../../assets/styles/styled";
import { validationSchema } from "../../Validations/SchemaValidations";
import ImageHeading from "../common/ImageHeading"

const Agreement: React.FC<{ isChecked: boolean, handleSubmit: any, handlePrevious: any }> = ({ isChecked, handleSubmit, handlePrevious }) => {
    const currentValidationStep = validationSchema[3];
    const [checked, setChecked] = useState(isChecked);
    const handleChange = (setFieldValue: (key: string, value: boolean) => void) => {
        setChecked(!checked)
        setFieldValue('isChecked', checked)
    }
    return <>
        <Formik
            initialValues={{ isChecked: false }}
            validationSchema={currentValidationStep}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue }) => (
                <Form>
                    <ImageHeading heading="Research Consent" />
                    <Typography mt={2} variant='h6'>Contribute to knowledge</Typography>
                    <Typography mt={.5} mb={1.5} variant="body1">By choosing to share your data and score, you can participate in Integrative Health Courses’ collaborative efforts to expand the knowledge base for eczema management and help end the eczema epidemic. Our mission is to heal eczema with less medication and by utilizing your data and score, we are able to validate our method to the wider medical community.</Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Field
                                    as={Checkbox}
                                    color="success"
                                    name="isChecked"
                                    checked={checked}
                                    onClick={() => handleChange(setFieldValue)}
                                />
                            }
                            label={<Typography><strong>I grant Integrative Health Courses permission to share my de-identified data for research or commercial activities</strong></Typography>}
                        />
                        <Typography mt={1.5} variant="body1">We assure you that no identifying data such as name or email will ever be shared as we are committed to protecting your privacy. By allowing us to use your data for research, you can assist us on our mission to improve the lives of eczema sufferers</Typography>

                    </FormGroup>
                    <SignpuFlexBox sx={{ justifyContent: 'space-between' }}>
                        <SubmitButton type='submit' variant="contained">
                            Continue
                        </SubmitButton>
                        <SubmitButton variant="outlined" onClick={handlePrevious}>
                            Previous
                        </SubmitButton>
                    </SignpuFlexBox>
                </Form>
            )}



        </Formik> </>
}
export default Agreement    