import { HomeSectionCardWrapper, CardWrapper } from '../assets/styles/styled'
import HomePageCard from "./common/HomePageCard"

const RemainingHome: React.FC = () => {

    return <>
        <HomeSectionCardWrapper >
            <HomePageCard heading="Statistics" content="Track your PO-SCORAD over different time periods" />
            <CardWrapper mt={2} sx={{ columnGap: 2 }} >
                <HomePageCard heading="Help center" content="Guidance and FAQ " />
                <HomePageCard heading="Account" content="Profiles and settings" />
            </CardWrapper>
        </HomeSectionCardWrapper>
    </>
}
export default RemainingHome