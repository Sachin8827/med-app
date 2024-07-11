import * as React from "react"
import { Box, Container, useMediaQuery, useTheme } from "@mui/material"
import { Home, HomePageDiv } from "../assets/styles/styled";
import { NavList } from "../components/common/NavList";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/HeroSection";
import RemainingHome from "../components/RemainingHome";

const HomePage: React.FC = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    return <>

        <Home>
            <Navbar />
            <HomePageDiv>
                <HeroSection />
                <RemainingHome />
            </HomePageDiv>
        </Home>
    </>
}
export default HomePage;