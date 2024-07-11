import { Box, ImageList, useMediaQuery, useTheme } from "@mui/material"
import { LogoutButton, Nav, NavButton, NavButtonDiv } from "../../assets/styles/styled"
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../../public/images/logo.svg'
export const NavList = ({ setDrawer }: { setDrawer: (status: boolean) => void }) => {

    const theme = useTheme();
    const navigate = useNavigate()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return <>
        <Nav role="presentation">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ImageList > <img src={logo} alt="Logo" /></ImageList>
                {!isLargeScreen && <CloseIcon onClick={() => setDrawer(false)} />}
            </Box>
            <NavButtonDiv >
                <NavButton >Home</NavButton>
                <NavButton >Statistics</NavButton>
                <NavButton >Help center</NavButton>
                <NavButton >Account</NavButton>
            </NavButtonDiv>
            <Box sx={{ height: '-webkit-fill-available;', display: 'flex', justifyContent: "center", alignItems: 'end' }} >
                <LogoutButton variant="outlined" fullWidth className="logout">Log out</LogoutButton>
            </Box>
        </Nav>

    </>
}
export default NavList