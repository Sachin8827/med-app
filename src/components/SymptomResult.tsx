import { Box, Typography } from "@mui/material"
import { SymptomsWrapper } from "../assets/styles/styled"
import { SymptomsData } from "../Types/Types";
import SelectedDots from "./common/SelectedDots";
import SymptomsCard from "./common/SymptomCard";

const SymptomsResult: React.FC<{ symptoms: SymptomsData }> = ({ symptoms }) => {

    const { drynessIntensity, rednessIntensity, swellingIntensity, crustsIntensity, scratchMarksIntensity, skinThickening } = symptoms
    return <>
        <SymptomsWrapper>
            <Box mt={4}>
                <Typography variant="h6">Symptom intensity</Typography>
                <Box mt={2} display={'flex'} sx={{ flexDirection: 'column', rowGap: 1 }}>
                    <SymptomsCard heading="Dryness" intensity={drynessIntensity} />
                    <SymptomsCard heading="Redness" intensity={rednessIntensity} />
                    <SymptomsCard heading="Swelling" intensity={swellingIntensity} />
                    <SymptomsCard heading="Crusts & Oozing" intensity={crustsIntensity} />
                    <SymptomsCard heading="Scratch marks" intensity={scratchMarksIntensity} />
                    <SymptomsCard heading="Skin thickening" intensity={skinThickening} />
                </Box>
                <Typography variant="h6">Additional symptoms</Typography>
                <Box mt={2} display={'flex'} sx={{ flexDirection: 'column', rowGap: 1 }}>

                </Box>

            </Box>
        </SymptomsWrapper>
    </>
}
export default SymptomsResult