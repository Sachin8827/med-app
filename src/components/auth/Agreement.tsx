
import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material"
import { Field } from "formik"
import ImageHeading from "../common/ImageHeading"

const Agreement: React.FC<{ isChecked: boolean, handleChange: any }> = ({ isChecked, handleChange }) => {

    return <>
        <ImageHeading heading="Research Consent" />
        <Typography mt={.5} mb={1.5} variant="body1">By choosing to share your data and score, you can participate in Integrative Health Courses’ collaborative efforts to expand the knowledge base for eczema management and help end the eczema epidemic. Our mission is to heal eczema with less medication and by utilizing your data and score, we are able to validate our method to the wider medical community.</Typography>
        <FormGroup>
            <FormControlLabel
                control={
                    <Field
                        as={Checkbox}
                        color="success"
                        name="isChecked"
                        checked={isChecked}
                        onChange={handleChange}
                    />
                }
                label="I grant Integrative Health Courses permission to share my de-identified data for research or commercial activities:"
            />

        </FormGroup>
        <Typography mt={1.5} variant="body1">We assure you that no identifying data such as name or email will ever be shared as we are committed to protecting your privacy. By allowing us to use your data for research, you can assist us on our mission to improve the lives of eczema sufferers</Typography>
    </>
}
export default Agreement    