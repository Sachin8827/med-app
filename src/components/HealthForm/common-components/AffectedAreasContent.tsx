import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CustomStepper } from "../../../assets/styles/styled";

const AffectedAreas: React.FC<{ activeStep: number, diseaseName: string }> = ({ activeStep, diseaseName }) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    return <>
        <Typography variant='h5'>Intensity of your symptoms</Typography>
        {isLargeScreen && <Typography mt={1} variant="body2">Press the zones that are affected by eczema</Typography>}
        <Box mt={2} sx={{ display: 'flex', justifyContent: '', alignItems: 'center', columnGap: 1.5 }}>
            <Typography>{activeStep}/6</Typography>
            <CustomStepper
                variant="progress"
                steps={7}
                position="static"
                activeStep={activeStep} backButton={undefined} nextButton={undefined}

            />
        </Box>
        <Typography mt={1} variant='h6'>{diseaseName}</Typography>
        <Typography mt={1} variant="body2">Evaluate the symptom's intensity on the zone you selected, without regard to the location of the displayed image.</Typography>
    </>
}
export default AffectedAreas;