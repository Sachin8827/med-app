import { Box, Typography } from "@mui/material"
import { SymptomsCardWrapper, SymptomsWrapper } from "../assets/styles/styled"
import { SymptomsData } from "../Types/Types";
import SymptomsCard from "./common/SymptomCard";
import AdditionalSymptomsCard from "./common/AdditionalSymptomsCard";

const SymptomsResult: React.FC<{ symptoms: SymptomsData }> = ({ symptoms }) => {

    const { drynessIntensity, rednessIntensity, swellingIntensity, crustsIntensity, scratchMarksIntensity, skinThickening, psychologicalState, sleepState, itchingState, additionalSymptoms } = symptoms

    return <>
        <SymptomsWrapper>
            <Box mt={4} width='100%'>
                <Typography variant="heading1">Symptom intensity</Typography>
                <SymptomsCardWrapper mt={2} >
                    <SymptomsCard heading="Dryness" intensity={drynessIntensity} />
                    <SymptomsCard heading="Redness" intensity={rednessIntensity} />
                    <SymptomsCard heading="Swelling" intensity={swellingIntensity} />
                    <SymptomsCard heading="Crusts & Oozing" intensity={crustsIntensity} />
                    <SymptomsCard heading="Scratch marks" intensity={scratchMarksIntensity} />
                    <SymptomsCard heading="Skin thickening" intensity={skinThickening} />
                </SymptomsCardWrapper>
            </Box>
            <Box mt={4} width='100%'>
                <Typography variant="heading1">Additional symptoms</Typography>
                <SymptomsCardWrapper mt={2} >
                    <AdditionalSymptomsCard heading="Psychological state" intensity={`${psychologicalState} of 10`} />
                    <AdditionalSymptomsCard heading="Sleep" intensity={`${sleepState} of 10`} />
                    <AdditionalSymptomsCard heading="Itching" intensity={`${itchingState} of 10`} />
                    <AdditionalSymptomsCard heading="Additionally" intensity={additionalSymptoms} />
                </SymptomsCardWrapper>
            </Box>
        </SymptomsWrapper >
    </>
}
export default SymptomsResult