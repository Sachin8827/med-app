import { Box, Container } from "@mui/material";
import StatisticsChart from "../components/common/Chart";

const StatisticsPage = () => {
    return <>
        <Box sx={{ backgroundColor: '#F0F1F4' }}>
            <StatisticsChart />
            <Container sx={{
                mt: 1, maxWidth: {
                    xs: '100%',
                    lg: '852px',
                    xl: '1032px'
                }
            }}
            >

            </Container>
        </Box>
    </>
}
export default StatisticsPage;