import { AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomAccrodion } from "../../assets/styles/styled"

const Accordion: React.FC<{ heading: string, text: string }> = ({ heading, text }) => {
    return <>
        <CustomAccrodion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="pbold">{heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="plight">{text}</Typography>
            </AccordionDetails>
        </CustomAccrodion>
    </>
}
export default Accordion