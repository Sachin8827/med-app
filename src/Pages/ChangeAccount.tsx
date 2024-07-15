import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { SubmitButton, UserProfileDiv } from "../assets/styles/styled"
import ProfileInfo from "../components/common/ProfileInfo"
import FormNavBar from "../components/HealthForm/FormNavBar"

const ChangeAccount: React.FC = () => {

    const [userState, setUserState] = useState({
        name: 'John Doe',
        email: 'infowind@gmail.com'
    })
    const [showProfiles, setShowProfiles] = useState(false);
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
        <Container sx={{
            maxWidth: {
                sx: '100%',
                sm: '376px',
                lg: '508px',
                xl: '616px'
            }
        }}>
            <FormNavBar text="PO-SCORAD account" onclick={handleClick} />
            <Box display={!showProfiles ? 'block' : 'none'}>
                <Typography mt={isLargerScreen ? 4 : 0} variant='h4'>PO-SCORAD account</Typography>
                <ProfileInfo heading='Profile' text={name} />
                <SubmitButton onClick={() => setShowProfiles(true)} sx={{ mt: 1.5 }} variant="outlined" fullWidth>Change profile</SubmitButton>
                <ProfileInfo heading='Email' text={email} />
                <ProfileInfo heading='Password' text="Last change at 2024/10/20" />
                <SubmitButton onClick={() => navigate('/changepassword')} sx={{ mt: 1.5 }} fullWidth variant="outlined">Change password</SubmitButton>
            </Box>
            <Box display={showProfiles ? 'block' : 'none'}>
                <Typography mt={isLargerScreen ? 4 : 0} variant='h4'>Profiles</Typography>
                <UserProfileDiv mt={3} isSelected={true} onClick={() => navigate('/edit')}>
                    <Typography variant="h6" fontSize={'16px'}>{name}</Typography>
                    <Typography variant="caption">Latest PO-SCORAD - 2024/05/12</Typography>
                </UserProfileDiv>
                <UserProfileDiv mt={3} isSelected={false}  >
                    <Typography variant="h6" fontSize={'16px'}>{"Dora Doe"}</Typography>
                    <Typography variant="caption">No previously passed tests</Typography>
                </UserProfileDiv>
                <SubmitButton variant="outlined" fullWidth onClick={() => navigate('/signup')}>Add a new profile</SubmitButton>
            </Box>
        </Container>
    </>
}
export default ChangeAccount