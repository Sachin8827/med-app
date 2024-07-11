import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavList } from "./NavList";

const LayOut: React.FC = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return <>
        <Box sx={{ display: isLargeScreen ? 'flex' : 'block', width: "100%", pl: 1, minHeight: '100vh' }}>
            <Box sx={{
                pt: 2,
                display: isLargeScreen ? 'inline-block' : 'none', boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.06)"
            }}>
                <NavList setDrawer={() => { }} />
            </Box>
            <Container sx={{
                mt: 3, maxWidth: {
                    lg: '852px',
                    xl: '1032px'
                }
            }}>
                <Outlet />
            </Container>
        </Box>
    </>
}
export default LayOut;