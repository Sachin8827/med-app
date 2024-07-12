import * as React from "react"
import { Container } from "@mui/material"
import { HomePageWrapper } from "../assets/styles/styled";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/HeroSection";
import RemainingHome from "../components/RemainingHome";

const HomePage: React.FC = () => {

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
                <HeroSection />
                <RemainingHome />
            </HomePageWrapper>
        </Container>
    </>
}
export default HomePage;