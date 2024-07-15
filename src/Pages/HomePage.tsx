import * as React from "react"
import { Container, useMediaQuery } from "@mui/material"
import { HomePageWrapper } from "../assets/styles/styled";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/HeroSection";
import RemainingHome from "../components/RemainingHome";
import HomeScoreSection from "../components/HomeScoreSection";

const HomePage: React.FC = () => {

    const isLandscape = useMediaQuery('(orientation: landscape)');
    console.log(isLandscape)
    return <>
        <Container sx={{
            mt: 1, maxWidth: {
                xs: '100%',
                lg: '852px',
                xl: '1032px'
            }
        }}>
            <Navbar />
            <HomePageWrapper>
                {/* <HeroSection /> */}
                <HomeScoreSection />
                <RemainingHome />
            </HomePageWrapper>
        </Container>
    </>
}
export default HomePage;