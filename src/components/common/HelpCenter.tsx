import { Typography } from "@mui/material";
import { SiteInfo } from "../../assets/styles/styled";

interface HelpCenterProps {
    heading: string,
    content: string
}
const HelpCenter: React.FC<HelpCenterProps> = ({ heading, content }) => {
    return <>
        <SiteInfo py={3.2} px={2.5} >
            <Typography variant="subtitle2">{heading}</Typography>
            <Typography mt={0.5} variant="body2">{content}</Typography>
        </SiteInfo>
    </>
}
export default HelpCenter;