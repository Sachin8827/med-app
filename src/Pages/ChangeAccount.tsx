import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { SubmitButton } from "../assets/styles/styled"
import ArrowBack from "../components/common/ArrowBack"
import ProfileInfo from "../components/common/ProfileInfo"
import UserProfileCard from "../components/common/UserProfileCard"
import FormNavBar from "../components/HealthForm/FormNavBar"
import ResponsiveContainer from "../components/common/ResponsiveContainer"
const ChangeAccount: React.FC = () => {

    const [showProfiles, setShowProfiles] = useState(false);
    const [userState, setUserState] = useState({
        name: 'John Doe',
        email: 'infowind@gmail.com'
    })
    const theme = useTheme();
    const isLargerScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const navigate = useNavigate()
    const { name, email } = userState;

    const handleClick = () => {
        if (showProfiles)
            setShowProfiles(false)
        else
            navigate(-1)
    }

    return <>
        <Box width={'-webkit-fill-available'}>
            <FormNavBar text="PO-SCORAD account" onclick={handleClick} />
            <ArrowBack handlePrevious={handleClick} renderHeading={() => 'Home'} />
            <ResponsiveContainer >
                <Box display={!showProfiles ? 'block' : 'none'}>
                    <Typography mt={isLargerScreen ? 3 : 0} variant='h4'>PO-SCORAD account</Typography>
                    <ProfileInfo heading='Profile' text={name} />
                    <SubmitButton onClick={() => setShowProfiles(true)} sx={{ mt: 1.5 }} variant="outlined" fullWidth>Change profile</SubmitButton>
                    <ProfileInfo heading='Email' text={email} />
                    <ProfileInfo heading='Password' text="Last change at 2024/10/20" />
                    <SubmitButton onClick={() => navigate('/changepassword')} sx={{ mt: 1.5 }} fullWidth variant="outlined">Change password</SubmitButton>
                </Box>
                <Box display={showProfiles ? 'block' : 'none'}>
                    <Typography mt={isLargerScreen ? 4 : 0} variant='h4'>Profiles</Typography>
                    <UserProfileCard name="John Doe" caption="Latest PO-SCORAD - 2024/05/12" isActive={true} onclick={() => navigate('/edit')} />
                    <UserProfileCard name="Dora Doe" caption="No previously passed tests" isActive={false} onclick={() => { }} />
                    <SubmitButton variant="outlined" fullWidth onClick={() => navigate('/signup')}>Add a new profile</SubmitButton>
                </Box>
            </ResponsiveContainer>
        </Box>
    </>
}
export default ChangeAccount