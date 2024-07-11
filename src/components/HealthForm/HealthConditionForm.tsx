import { useEffect, useState } from "react";
import { Box, Container, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ZoneSelectionForm from "./ZoneSelectionForm";
import DrynessIntensity from "./DrynessIntensity";
import RednessIntensity from "./RednessIntensity";
import Swelling from "./Swelling";
import Crusts from "./Crusts";
import ScratchMarks from "./ScratchMarks";
import SkinThickening from "./SkinThick";
import AdditionalSymptoms from "./AddtionalSymptoms";
import { NavList } from "../common/NavList";

const HealthCondtionForm: React.FC = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    let [formState, setFormState] = useState({
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

    const handlePrevious = () => {
        setCurrentStep(currentStep => currentStep - 1)
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
        }
    }

    useEffect(() => {
        if (currentStep == 8) {
            console.log(currentStep)
            handleSubmit()
        }
    }, [currentStep])

    return <>
        <Box sx={{
            display: isLargeScreen ? 'flex' : 'block', width: "100%", pl: 1,
            minHeight: "100vh", height: 'auto'
        }}>
            <Box sx={{
                pt: 2,
                display: isLargeScreen ? 'inline-block' : 'none', boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.06)"
            }}>
                <NavList setDrawer={() => { }} />
            </Box>
            <Box width={"100%"}>
                <Box display={isLargeScreen ? 'block' : "none"}>
                    <IconButton
                        sx={{ borderRadius: '12px' }}
                        onClick={handlePrevious}
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <ArrowBackIosNewRoundedIcon sx={{ color: '#A3A3A3', width: '16px' }} />
                        <Typography ml={1.5} color='primary.main'>{renderHeading()}</Typography>
                    </IconButton>
                </Box>
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
        </Box>
    </>
}
export default HealthCondtionForm