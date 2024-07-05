import { Box, Container } from "@mui/material"
import * as React from "react"
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/HeroSection";
import RemainingHome from "../components/RemainingHome";

const HomePage: React.FC = () => {
    return <>
        <Container>
            <Navbar />
            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
                <HeroSection />
                <RemainingHome />
            </Box>
        </Container>
    </>
}
export default HomePage;