import { Box, Container, useMediaQuery, useTheme } from "@mui/material"
import * as React from "react"
import { Home, HomePageDiv } from "../assets/styles/styled";
import { List } from "../components/common/List";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/HeroSection";
import RemainingHome from "../components/RemainingHome";

const HomePage: React.FC = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    return <>
        <Box sx={{ display: isLargeScreen ? 'flex' : 'block', width: "100%", pl: 1 }}>
            <Box sx={{
                pt: 2,
                display: isLargeScreen ? 'inline-block' : 'none', boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.06)"
            }}>
                <List setDrawer={() => { }} />
            </Box>
            <Container sx={{
                mt: 3, maxWidth: {
                    lg: '852px',
                    xl: '1032px'
                }
            }}>
                <Home >
                    <Navbar />
                    <HomePageDiv>
                        <HeroSection />
                        <RemainingHome />
                    </HomePageDiv>
                </Home>
            </Container>
        </Box>
    </>
}
export default HomePage;