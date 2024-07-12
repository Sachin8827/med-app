import { Box, ImageList, useMediaQuery, useTheme } from "@mui/material"
import { ButtonSection, LogoutButton, LogoWrapper, Nav, NavButton, NavButtonDiv } from "../../assets/styles/styled"
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../../public/images/logo.svg'
export const NavList = ({ setDrawer }: { setDrawer: (status: boolean) => void }) => {

    const theme = useTheme();
    const navigate = useNavigate()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return <>
        <Nav role="presentation">
            <LogoWrapper >
                <ImageList > <img src={logo} alt="Logo" /></ImageList>
                {!isLargeScreen && <CloseIcon onClick={() => setDrawer(false)} />}
            </LogoWrapper>
            <NavButtonDiv >
                <NavButton >Home</NavButton>
                <NavButton >Statistics</NavButton>
                <NavButton >Help center</NavButton>
                <NavButton >Account</NavButton>
            </NavButtonDiv>
            <ButtonSection  >
                <LogoutButton variant="outlined" fullWidth className="logout">Log out</LogoutButton>
            </ButtonSection>
        </Nav>

    </>
}
export default NavList