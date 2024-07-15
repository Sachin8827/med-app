import { Box, Typography } from "@mui/material"

const AdditionalSymptomsCard: React.FC<{ heading: string, intensity: string }> = ({ heading, intensity }) => {
    
return <>
 <Box bgcolor={'white'} sx={{ borderRadius: '12px', padding: '12px 16px 12px 16px', display: 'flex', flexDirection : 'column' }}>
    <Typography variant='subtitle1'>{intensity}     </Typography>
    <Typography variant="body1">{heading}</Typography>
 </Box>
</>
}
export default AdditionalSymptomsCard
