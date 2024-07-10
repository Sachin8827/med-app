import { useState } from "react";

import { AppBar, Box, Container, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import ZoneSelectionForm from "./ZoneSelectionForm";
import FormNavBar from "./FormNavBar";
import { List } from "../common/List";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import DrynessIntensity from "./DrynessIntensity";
const HealthCondtionForm: React.FC = () => {

    const [currentStep, setCurrentStep] = useState(0);


    let [formState, setFormState] = useState({
        bodyParts: [],
        drynessIntensity: -1,
        rednessIntensity: -1,
        swellingIntensity: -1,
        crustsIntensity: -1,
        scratchMarksIntenstity: -1,
        skinThickening: -1,
        pyscholgicalState: -1,
        sleepState: -1,
        itchingState: -1,
        additionalSymptoms: '',
        steroidsUsedStatus: false,
        oralSteroidsStatus: false,
        dupixentStatus: false,
        LDATherepyStatus: false,
    });

    const RenderPage = () => {
        switch (currentStep) {
            case 0: return <ZoneSelectionForm handleNext={handleNext} />
            case 1: return <DrynessIntensity handleNext={handleNext} handlePrevious={handlePrevious}/>
        }
    }
    const handlePrevious = () =>{
        console.log('Called')
        setCurrentStep(currentStep => currentStep - 1)
    }
    const handleNext = (values: any) =>{
        console.log("called")
        setFormState(prevFormData => ({
            ...prevFormData,
            ...values
        }));
        setCurrentStep(currentStep => currentStep + 1)
    }
    const renderHeading = () => {
        switch (currentStep) {
            case 0: return "Home";
            case 1: return "Affected areas"
        }
    }
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    return <>
        <Box sx={{ display: isLargeScreen ? 'flex' : 'block', width: "100%", pl: 1, height: '100vh' }}>
            <Box sx={{
                pt: 2,
                display: isLargeScreen ? 'inline-block' : 'none', boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.06)"
            }}>
                <List setDrawer={() => { }} />
            </Box>
            <Box width={"100%"}>
                <Box display={isLargeScreen ? 'block' : "none"}>
                    <IconButton
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