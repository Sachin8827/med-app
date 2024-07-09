import { Box, Button, ImageList, Typography } from "@mui/material";
import { HeroImage, HeroText, ImageSection, PlusIcon, SubmitButton } from "../assets/styles/styled";
import ora from '../../public/images/bg_ellipses.svg'
import body from '../../public/images/body.svg'

import AddIcon from '@mui/icons-material/Add';
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const HeroSection: React.FC = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('healthform')
    }

    return <>

        <HeroImage style={{ overflow: 'hidden', position: 'relative' }} >
            <ImageSection sx={{ height: '100%' }} >
                <ImageList className={'bodyCircle'}>
                    <img src={ora} style={{ position: 'absolute', bottom: "1px", imageRendering: 'pixelated' }} />
                    <img src={body} style={{ marginRight: '15px', imageRendering: 'pixelated' }} />
                </ImageList>
            </ImageSection>
            <HeroText>
                <Typography variant="h5" color='white' >Calculate your PO-SCORAD</Typography>
                <PlusIcon variant='outlined' onClick={handleClick}  > <AddIcon fontSize="large" /><Typography className="test">Take Test</Typography>  </PlusIcon>
            </HeroText>
        </HeroImage>

    </>
}
export default HeroSection;