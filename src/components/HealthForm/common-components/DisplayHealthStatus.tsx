import { Box, Typography } from "@mui/material"

const DisplayHealthStatus: React.FC<{ goodHealth: string, badHealth: string }> = ({ goodHealth, badHealth }) => {
    return <>
        <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
            <Typography variant="body2">{goodHealth}</Typography>
            <Typography variant="body2">{badHealth}</Typography>
        </Box>
    </>
}
export default DisplayHealthStatus;