import { Box, Typography } from "@mui/material"
import { HomePageInfo, SiteInfo, Statistics } from '../assets/styles/styled'
import HelpCenter from "./common/HelpCenter"
const RemainingHome: React.FC = () => {
    return <>
        <HomePageInfo >
            <HelpCenter heading="Statistics" content="Track your PO-SCORAD over different time periods" />
            <Statistics mt={2} sx={{ columnGap: 2 }} >
                <HelpCenter heading="Help center" content="Guidance and FAQ " />
                <HelpCenter heading="Account" content="Profiles and settings" />
            </Statistics>

        </HomePageInfo>
    </>
}
export default RemainingHome