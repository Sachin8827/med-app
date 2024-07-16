import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material"
import Navbar from "../components/common/Navbar"
import FormNavBar from "../components/HealthForm/FormNavBar"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomAccrodion } from "../assets/styles/styled";

const HelpCenter = () => {
    return <>
        <Container>
            <FormNavBar text="Home" onclick={() => { }} />
            <Box mt={3} >
                <Typography variant="h4">Help center</Typography>
                <Typography mt={1} variant="body2">Find the answers to your questions in the help center</Typography>
            </Box>
            <Box mt={3} >
                <Typography variant="h6">Answers to questions</Typography>
                <Box>
                    <CustomAccrodion sx={{mt : 2}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography fontWeight={600}>How do I know it's atopic dermatitis?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </CustomAccrodion>
                </Box>
            </Box>
        </Container>
    </>
}
export default HelpCenter