import { Box, Typography } from "@mui/material"
import SelectedDots from "./SelectedDots";

const SymptomsCard: React.FC<{ heading: string, intensity: number }> = ({ heading, intensity }) => {

    const numbers = Array.from({ length: 4 }, (_, i) => i);

    return <>
        <Box bgcolor={'white'} sx={{ borderRadius: '12px', padding: '12px 16px 12px 16px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color={'black'}>{heading}</Typography>
            <Box width={'76px'} display='flex' sx={{ alignItems: "center", justifyContent: 'space-between' }}>{numbers.map((item) => <SelectedDots isSelected={item == intensity} />)}</Box>
        </Box>
    </>
}
export default SymptomsCard;