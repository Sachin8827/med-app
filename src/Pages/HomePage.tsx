import * as React from "react"
import { Box, Container, useMediaQuery } from "@mui/material"
import { HomePageWrapper } from "../assets/styles/styled";
import RemainingHome from "../components/RemainingHome";
import HomeScoreSection from "../components/HomeScoreSection";

const HomePage: React.FC = () => {

    const isLandscape = useMediaQuery('(orientation: landscape)');

    return <>
        <Container sx={{
            maxWidth: {
                xs: '100%',
                lg: '852px',
                xl: '1032px',
            }
        }}>
            <HomePageWrapper>
                {/* <HeroSection /> */}
                <HomeScoreSection />
                <RemainingHome />
            </HomePageWrapper>
        </Container>
    </>
}
export default HomePage;