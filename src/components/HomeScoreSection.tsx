import { Box, Typography } from "@mui/material"
import { CustomProgressBar, HomeIcon, HomeScoreWrapper, PlusIcon, TestScoreWrapper } from "../assets/styles/styled"
import GradientSVG from "./common/GradientSvg"
import AddIcon from '@mui/icons-material/Add';
const HomeScoreSection: React.FC = () => {

    const idCSS = "hello";
    const percentage = 56;

    return <>
        <HomeScoreWrapper pt={3} pl={3} pb={3} >
            <TestScoreWrapper>
                <div  className="ring">
                    <GradientSVG />
                    <CustomProgressBar
                        strokeWidth={8}
                        value={percentage}
                        text={percentage + ''}
                        styles={{
                            path: { stroke: `url(#${idCSS})`, height: "100%" },
                            trail: {
                                stroke: "#076EB0"
                            }

                        }}
                    />
                </div>
                <Box>
                    <Typography variant="h5" color={'white'}>PO-SCORAD</Typography>
                    <Typography fontSize={14} variant='body1' color={'white'}>January 30, 2024</Typography>
                </Box>
            </TestScoreWrapper>
            <HomeIcon  variant='outlined' onClick={() =>{}}   > <AddIcon fontSize="large" /><Typography className="test">Take the new test</Typography>  </HomeIcon>
        </HomeScoreWrapper>
    </>
}
export default HomeScoreSection