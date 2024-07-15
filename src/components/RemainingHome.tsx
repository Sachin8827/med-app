import { useNavigate } from 'react-router-dom'
import { HomeSectionCardWrapper, CardWrapper } from '../assets/styles/styled'
import HomePageCard from "./common/HomePageCard"

const RemainingHome: React.FC = () => {
    const navigate = useNavigate()

    return <>
        <HomeSectionCardWrapper >
            <HomePageCard onclick={() => navigate('/statistics')} heading="Statistics" content="Track your PO-SCORAD over different time periods" />
            <CardWrapper mt={2} sx={{ columnGap: 2 }} >
                <HomePageCard onclick={() => navigate('/helpcenter')} heading="Help center" content="Guidance and FAQ " />
                <HomePageCard onclick={() => navigate('/account')} heading="Account" content="Profiles and settings" />
            </CardWrapper>
        </HomeSectionCardWrapper>
    </>
}
export default RemainingHome