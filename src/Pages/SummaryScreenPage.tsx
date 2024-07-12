import { Box, Container, } from "@mui/material"
import SummarySection from "../components/common/SummarySection"
import SymptomsResult from "../components/SymptomResult"

const SummaryScreenPage = () => {

    const SymptomsData = {
        "additionalSymptoms": "dfghefb",
        "bodyParts": [
            "frontHead",
            "neck",
            "chest",
            "rightBicep",
            "core",
            "leftThigh",
            "lowerBack",
            "hamstring",
            "back",
            "leftBackKnee",
            "rightBackKnee",
            "leftKnee",
            "rightKnee"
        ],
        "crustsIntensity": 3,
        "drynessIntensity": 1,
        "itchingState": 6,
        "psychologicalState": 8,
        "rednessIntensity": 0,
        "scratchMarksIntensity": 0,
        "skinThickening": 3,
        "sleepState": 8,
        "swellingIntensity": 1
    }

    return <>
        <Box sx={{ backgroundColor: '#F0F1F4' }}>
            <SummarySection bodyParts={SymptomsData.bodyParts} />
            <Container sx={{
                mt: 1, maxWidth: {
                    xs: '100%',
                    lg: '852px',
                    xl: '1032px'
                }
            }}
            >
                <SymptomsResult symptoms={SymptomsData} />
            </Container>
        </Box>
    </>
}
export default SummaryScreenPage