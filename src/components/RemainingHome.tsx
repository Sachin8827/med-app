import { Box, Typography } from "@mui/material"
import { SiteInfo } from '../assets/styles/styled'
import HelpCenter from "./common/HelpCenter"
const RemainingHome: React.FC = () => {
    return <>
        <Box>
            <HelpCenter heading="Statistics" content="Track your PO-SCORAD over different time periods" />



            <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between', columnGap: 2 }}>
                <HelpCenter heading="Help center" content="Guidance and FAQ " />


                <HelpCenter heading="Account" content="Profiles and settings" />
            </Box>

        </Box>
    </>
}
export default RemainingHome