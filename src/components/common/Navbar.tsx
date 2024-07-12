import { AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import userIcon from '../../../public/images/user.svg'
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { CustomDrawer, CustomToolBar } from "../../assets/styles/styled";
import { NavList } from "./NavList";

const Navbar: React.FC = () => {
    const [auth, setAuth] = useState(true);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const [isDrawerOpen, setDrawer] = useState(false);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setDrawer(true)
    };

    return <>
        <Box sx={{ flexGrow: 1, display: isLargeScreen ? 'none' : 'block' }} >
            <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 'none' }}>
                <CustomToolBar>
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
                                anchor={isLargeScreen ? 'left' : 'top'}
                                open={isLargeScreen ? false : isDrawerOpen}
                            >
                                {<NavList setDrawer={setDrawer} />}
                            </CustomDrawer>
                        </div>
                    )}
                </CustomToolBar>
            </AppBar>
        </Box>
    </>
}
export default Navbar;