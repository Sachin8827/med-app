import { Box, Typography } from "@mui/material"

const ProfileInfo: React.FC<{ heading: string, text: string }> = ({ heading, text }) => {
    return <>
        <Box mt={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h6' fontSize={'18px'}>{heading}</Typography>
            <Typography variant="body2">{text}</Typography>
        </Box>
    </>
}
export default ProfileInfo