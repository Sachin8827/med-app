import { Box, ImageList, useMediaQuery, useTheme } from "@mui/material"
import { LoginTextMessage, LogoutButton, Nav, NavButton, NavButtonDiv } from "../../assets/styles/styled"
import logo from '../../../public/images/logo.svg'
import CloseIcon from '@mui/icons-material/Close';
export const List = ({ setDrawer }: { setDrawer: (status: boolean) => void }) => {
    const theme = useTheme();
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
                <LoginTextMessage>
                    <LogoutButton variant="outlined" fullWidth className="logout">Log out</LogoutButton>
                </LoginTextMessage>
            </NavButtonDiv>
        </Nav>

    </>
}