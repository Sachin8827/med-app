import { Box, Typography } from "@mui/material"

const ProfileInfo: React.FC<{ heading: string, text: string }> = ({ heading, text }) => {
    return <>
        <Box mt={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='pbold' fontSize={'18px'} fontWeight='600'>{heading}</Typography>
            <Typography variant="body2">{text}</Typography>
        </Box>
    </>
}
export default ProfileInfo