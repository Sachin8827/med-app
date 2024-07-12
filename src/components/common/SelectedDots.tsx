import { Box } from "@mui/material"

const SelectedDots: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
    return <>
        <Box width='16px' height='16px' sx={{ borderRadius: '50%', backgroundColor: isSelected ? "#076EB0" : '#E1EDF6' }}></Box>
    </>
}
export default SelectedDots