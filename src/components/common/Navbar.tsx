import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, Container, FormControlLabel, FormGroup, IconButton, ImageList, Menu, MenuItem, Switch, Toolbar, Typography } from "@mui/material";
import userIcon from '../../../public/images/user.svg'
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { CustomDrawer, Nav, NavButton, SubmitButton } from "../../assets/styles/styled";
import logo from '../../../public/images/logo.svg'
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
const Navbar: React.FC = () => {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isDrawerOpen, setDrawer] = useState(false);


    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setDrawer(true)
    };

    const list = () => {
        return <>

            <Nav
                role="presentation"
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ImageList > <img src={logo} alt="Logo" /></ImageList>
                    <CloseIcon onClick={() => setDrawer(false)} />
                </Box>
                <Box     >
                    <NavButton >Home</NavButton>
                    <NavButton >Statistics</NavButton>
                    <NavButton >Help center</NavButton>
                    <NavButton >Account</NavButton>
                    <SubmitButton variant="outlined" fullWidth>Log out</SubmitButton>
                </Box>

            </Nav>

        </>
    }
    return <>
        <Box sx={{ flexGrow: 1, }} >

            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar>

                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <img src={userIcon} />
                    </IconButton>
                    <Typography variant="subtitle1" color={'black'} component="div" sx={{ flexGrow: 1 }}>
                        John Doe
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                edge="end"
                                color="default"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <CustomDrawer
                                anchor="top"
                                open={isDrawerOpen}
                            >
                                {list()}
                            </CustomDrawer>

                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    </>
}
export default Navbar;