import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { CustomDrawer, CustomToolBar } from "../../assets/styles/styled";
import { NavList } from "../common/NavList";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useState } from 'react';
const FormNavBar: React.FC<{ text: string }> = ({ text }) => {

    const [isDrawerOpen, setDrawer] = useState(false);
    const [auth, setAuth] = useState(true);
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setDrawer(true)
    };

    return <>
        <Box sx={{ flexGrow: 1, display: isLargeScreen ? 'none' : 'block', height: '64px' }} >
            <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 'none' }}>
                <CustomToolBar>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <ArrowBackIosNewRoundedIcon sx={{ color: '#A3A3A3', width: '16px' }} />
                    </IconButton>
                    <Typography variant="subtitle1" color={'primary.main'} component="div" sx={{ flexGrow: 1 }}>
                        {text}
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
export default FormNavBar;