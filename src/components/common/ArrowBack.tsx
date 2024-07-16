import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const ArrowBack: React.FC<{ handlePrevious: () => void, renderHeading: () => string }> = ({ handlePrevious, renderHeading }) => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return <>
        <Box display={isLargeScreen ? 'flex' : "none"} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
            
            <IconButton
                sx={{ borderRadius: '50%', ":hover"  :{backgroundColor  : 'transparent'} }}
                onClick={handlePrevious}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >
                <ArrowBackIosNewRoundedIcon sx={{ color: '#A3A3A3', width: '16px' }} />
                <Typography ml={1.5} color='primary.main'>{renderHeading()}</Typography>
            </IconButton>
            
        </Box>
    </>
}
export default ArrowBack;