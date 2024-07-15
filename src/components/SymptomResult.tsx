import { Box, Typography } from "@mui/material"
import { SymptomsWrapper } from "../assets/styles/styled"
import { SymptomsData } from "../Types/Types";
import SymptomsCard from "./common/SymptomCard";
import AdditionalSymptomsCard from "./common/AdditionalSymptomsCard";

const SymptomsResult: React.FC<{ symptoms: SymptomsData }> = ({ symptoms }) => {

    const { drynessIntensity, rednessIntensity, swellingIntensity, crustsIntensity, scratchMarksIntensity, skinThickening, psychologicalState, sleepState, itchingState, additionalSymptoms} = symptoms
    
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
                <Typography mt={4} variant="h6">Additional symptoms</Typography>
                <Box mt={2} display={'flex'} sx={{ flexDirection: 'column', rowGap: 1 }}>
                    <AdditionalSymptomsCard heading="Psychological state" intensity={`${psychologicalState} of 10` } />
                    <AdditionalSymptomsCard heading="Sleep" intensity={`${sleepState} of 10`} />
                    <AdditionalSymptomsCard heading="Itching" intensity={`${itchingState} of 10`} />
                    <AdditionalSymptomsCard heading="Additionally" intensity={additionalSymptoms} />
                </Box>
            </Box>
        </SymptomsWrapper>
    </>
}
export default SymptomsResult