import { Box, ImageList, useMediaQuery, useTheme } from "@mui/material"
import { ButtonSection, LogoutButton, LogoWrapper, Nav, NavButton, NavButtonDiv } from "../../assets/styles/styled"
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../../public/images/logo.svg'
export const NavList = ({ setDrawer }: { setDrawer: (status: boolean) => void }) => {

    const theme = useTheme();
    const navigate = useNavigate()
    const location = useLocation();
    const route = location.pathname;
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return <>
        <Nav role="presentation">
            <LogoWrapper >
                <ImageList > <img src={logo} alt="Logo" /></ImageList>
                {!isLargeScreen && <CloseIcon onClick={() => setDrawer(false)} />}
            </LogoWrapper>
            <NavButtonDiv >
                <NavButton onClick={() => navigate('/home')} sx={{ backgroundColor: route == '/home' || route == '/' ? '#E6F4F9' : 'transparent', color: route == '/home' || route == '/' ? '#076EB0' : 'black' }} >Home</NavButton>
                <NavButton onClick={() => navigate('/statistics')} sx={{ backgroundColor: route == '/statistics' ? '#E6F4F9' : 'transparent', color: route == '/statistics' ? '#076EB0' : 'black' }}>Statistics</NavButton>
                <NavButton onClick={() => navigate('/helpcenter')} sx={{ backgroundColor: route == '/helpcenter' ? '#E6F4F9' : 'transparent', color: route == '/helpcenter' ? '#076EB0' : 'black' }}>Help center</NavButton>
                <NavButton onClick={() => navigate('/account')} sx={{ backgroundColor: route == '/account' ? '#E6F4F9' : 'transparent', color: route == '/account' ? '#076EB0' : 'black' }}>Account</NavButton>
            </NavButtonDiv>
            <ButtonSection  >
                <LogoutButton onClick={() => navigate('/login')} variant="outlined" fullWidth className="logout">Log out</LogoutButton>
            </ButtonSection>
        </Nav>

    </>
}
export default NavList