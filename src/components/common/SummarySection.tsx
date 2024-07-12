import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CloseIconWrapper, CustomProgressBar, ProgressBarWrapper, SummaryContainer, SummaryScreenWrapper, SvgBox } from "../../assets/styles/styled";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import BabyFrontBody from "../humanBody/baby/FrontBody";
import BabyBodyBack from "../humanBody/baby/BodyBack";
import KidBackBody from "../humanBody/kid/BackBody";
import AdultBackBody from "../humanBody/adult/BackBody";
import AdultFrontBody from "../humanBody/adult/FrontBody";
import KidFrontBody from "../humanBody/kid/FrontBody";
import rotateIcon from '../../../public/images/Button Turn.png'
import GradientSVG from "./GradientSvg";
import "react-circular-progressbar/dist/styles.css";

const SummarySection: React.FC<{ bodyParts: string[] }> = ({ bodyParts }) => {
    const idCSS = "hello";
    const percentage = 56;
    const age = 20;
    const [isFront, setFront] = useState(true)
    const theme = useTheme();
    const isLandscape = useMediaQuery('(orientation: landscape)');

    const isPartSelected = (value: string) => {
        return bodyParts.some((part: string) => part === value)
    }
    const handleClick = () => {
        setFront(!isFront)
    }
    const RenderBody = (bodySide: string) => {
        if (age <= 5) {
            if (bodySide == 'front') return <BabyFrontBody onclick={(e: any) => { }} isPartSelected={isPartSelected} />
            else return <BabyBodyBack onclick={(e: any) => { }} isPartSelected={isPartSelected} />
        }
        else if (age <= 17) {
            if (bodySide == 'front') return <KidFrontBody onclick={(e: any) => { }} isPartSelected={isPartSelected} />
            else return <KidBackBody onclick={(e: any) => { }} isPartSelected={isPartSelected} />
        }
        else {
            if (bodySide == 'front') return <AdultFrontBody onclick={(e: any) => { }} isPartSelected={isPartSelected} />
            else return <AdultBackBody onclick={(e: any) => { }} isPartSelected={isPartSelected} />
        }
    }

    return <>
        <SummaryScreenWrapper>

            <CloseIconWrapper >
                <CloseIcon sx={{ color: 'white', fontSize: '40px' }} />
            </CloseIconWrapper>
            <SummaryContainer>
                <ProgressBarWrapper >
                    <div style={{ width: '118px', height: '118px' }}>
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
                        <Typography variant='body2' color={'white'}>January 30, 2024</Typography>
                    </Box>
                    <img style={{ display: isLandscape ? 'none' : 'block', width: '48px' }} src={rotateIcon} onClick={handleClick} />
                </ProgressBarWrapper>
                <Box display={'flex'} sx={{ justifyContent: isLandscape ? 'space-between' : '   ' }}>
                    <Box display={isLandscape ? 'block' : isFront ? 'block' : 'none'} width='158px' height={'100%'}>
                        {RenderBody('front')}
                    </Box>
                    <Box display={isLandscape ? 'block' : !isFront ? "block" : 'none'} width='158px' height={'100%'}>
                        {RenderBody('back')}
                    </Box>
                </Box>
            </SummaryContainer>

        </SummaryScreenWrapper>
    </>
}
export default SummarySection;