import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import ZoneSelectionForm from "./ZoneSelectionForm";
import DrynessIntensity from "./DrynessIntensity";
import RednessIntensity from "./RednessIntensity";
import Swelling from "./Swelling";
import Crusts from "./Crusts";
import ScratchMarks from "./ScratchMarks";
import SkinThickening from "./SkinThick";
import AdditionalSymptoms from "./AddtionalSymptoms";
import ArrowBack from "../common/ArrowBack";
import FormNavBar from "./FormNavBar";

const HealthCondtionForm: React.FC = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [formState, setFormState] = useState({
        bodyParts: [],
        drynessIntensity: -1,
        rednessIntensity: -1,
        swellingIntensity: -1,
        crustsIntensity: -1,
        scratchMarksIntensity: -1,
        skinThickening: -1,
        psychologicalState: -1,
        sleepState: -1,
        itchingState: -1,
        additionalSymptoms: '',
    });

    const navigate = useNavigate()

    const handlePrevious = () => {
        if (currentStep > 0)
            setCurrentStep(currentStep => currentStep - 1)
        else
            navigate(-1);
    }

    const handleSubmit = () => {
        console.log(formState)
    }

    const handleNext = (values: any) => {
        console.log(values)
        setFormState(prevFormData => ({
            ...prevFormData,
            ...values
        }));
        setCurrentStep(currentStep => currentStep + 1)
    }

    const renderHeading = () => {
        if (currentStep == 0) return "Home";
        else if (currentStep <= 6) return "Affected areas"
        else return "Intensity of your symptoms"
    }

    const RenderPage = () => {
        const { bodyParts, drynessIntensity, rednessIntensity, swellingIntensity, crustsIntensity, scratchMarksIntensity, skinThickening } = formState
        switch (currentStep) {
            case 0: return <ZoneSelectionForm handleNext={handleNext} parts={bodyParts} />
            case 1: return <DrynessIntensity handleNext={handleNext} handlePrevious={handlePrevious} drynessIntensity={drynessIntensity} />
            case 2: return <RednessIntensity handleNext={handleNext} handlePrevious={handlePrevious} rednessIntensity={rednessIntensity} />
            case 3: return <Swelling handleNext={handleNext} handlePrevious={handlePrevious} swellingIntensity={swellingIntensity} />
            case 4: return <Crusts handleNext={handleNext} handlePrevious={handlePrevious} crustsIntensity={crustsIntensity} />
            case 5: return <ScratchMarks handleNext={handleNext} handlePrevious={handlePrevious} scratchMarksIntensity={scratchMarksIntensity} />
            case 6: return <SkinThickening handleNext={handleNext} handlePrevious={handlePrevious} skinThickening={skinThickening} />
            case 7: return <AdditionalSymptoms handleNext={handleNext} />
            // default: navigate(-1);
        }
    }

    useEffect(() => {
        if (currentStep == 8) {
            console.log(currentStep)
            handleSubmit()
            navigate('/summary')
        }
    }, [currentStep])

    return <>
        <Box width="100%">
            <FormNavBar onclick={handlePrevious} text={renderHeading()}/>
            <ArrowBack handlePrevious={handlePrevious} renderHeading={renderHeading} />
            <Container sx={{
                maxWidth: {
                    xs: '100%',
                    lg: "508px",
                    xl: '616px'
                }, paddingLeft: '12px', paddingRight: '12px'
            }}>
                {RenderPage()}
            </Container>
        </Box>
    </>
}
export default HealthCondtionForm