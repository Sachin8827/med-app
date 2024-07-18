import { Box, Container, Typography, useMediaQuery } from "@mui/material"
import { useNavigate } from "react-router-dom";
import Accordion from "../components/common/Accordion"
import ArrowBack from "../components/common/ArrowBack";
import FormNavBar from "../components/HealthForm/FormNavBar"

const HelpCenter = () => {
    const navigate = useNavigate();
    const mt = useMediaQuery('(min-width:1280px)') ? 4 : 3;

    return <>
        <Box width={'-webkit-fill-available'} sx={{ backgroundColor: '#F0F1F4', pb: 3 }}>
            <FormNavBar text="Home" onclick={() => navigate(-1)} />
            <ArrowBack handlePrevious={() => navigate(-1)} renderHeading={() => 'Home'} />
            <Container sx={{
                maxWidth: {
                    xs: '100%',
                    sm: '376px',
                    lg: '508px',
                    xl: '616px'
                }
            }} >
                <Box mt={2}>
                    <Typography variant="h1">Help center</Typography>
                    <Typography mt={1} variant="body2">Find the answers to your questions in the help center</Typography>
                </Box>
                <Box mt={mt} >
                    <Typography variant="h6">Answers to questions</Typography>
                    <Box display={"flex"} sx={{ flexDirection: 'column', rowGap: '8px' }}>
                        <Accordion heading="How do I know it's atopic dermatitis?" text="Atopic dermatitis (or neurodermatitis) is one of the most common skin diseases. It is an inflammatory skin lesion of an allergic nature, which is caused by many different factors - allergens that enter the body with food, by contact (skin contact) or by inhalation" />
                        <Accordion heading="What could be the cause of atopic dermatitis?" text="Atopic dermatitis (or neurodermatitis) is one of the most common skin diseases. It is an inflammatory skin lesion of an allergic nature, which is caused by many different factors - allergens that enter the body with food, by contact (skin contact) or by inhalation" />
                        <Accordion heading="How do I know it's atopic dermatitis?" text="Atopic dermatitis (or neurodermatitis) is one of the most common skin diseases. It is an inflammatory skin lesion of an allergic nature, which is caused by many different factors - allergens that enter the body with food, by contact (skin contact) or by inhalation" />
                        <Accordion heading="How do I know it's atopic dermatitis?" text="Atopic dermatitis (or neurodermatitis) is one of the most common skin diseases. It is an inflammatory skin lesion of an allergic nature, which is caused by many different factors - allergens that enter the body with food, by contact (skin contact) or by inhalation" />
                    </Box>
                </Box>
                <Box mt={mt} >
                    <Typography variant="h6">Guidance</Typography>
                    <Box display={"flex"} sx={{ flexDirection: 'column', rowGap: '8px' }}>
                        <Accordion heading="How to use the service" text="Atopic dermatitis (or neurodermatitis) is one of the most common skin diseases. It is an inflammatory skin lesion of an allergic nature, which is caused by many different factors - allergens that enter the body with food, by contact (skin contact) or by inhalation" />
                    </Box>
                </Box>
            </Container>
        </Box>
    </>
}
export default HelpCenter