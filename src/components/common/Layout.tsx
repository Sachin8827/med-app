import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import { NavList } from "./NavList";

const LayOut: React.FC<{ children?: any }> = ({ children }) => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const location = useLocation()
    console.log(location.pathname)
    return <>
        <Box sx={{ display: isLargeScreen ? 'flex' : 'block', width: "100%", minHeight: '100vh' }}>
            <Box sx={{
                display: isLargeScreen ? 'inline-block' : 'none', boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.06)"
            }}>
                <NavList setDrawer={() => { }} />
            </Box>
            {location.pathname == '/' ? <HomePage /> : children}
            <Outlet />
        </Box>
    </>
}
export default LayOut;