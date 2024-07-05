import { Box, Button, ImageList, Typography } from "@mui/material";
import { HeroImage, HeroText, ImageSection, SubmitButton } from "../assets/styles/styled";
import ora from '../../public/images/bg_ellipses.svg'
import body from '../../public/images/body.svg'

import AddIcon from '@mui/icons-material/Add';
import { Add } from "@mui/icons-material";
const HeroSection: React.FC = () => {
    return <>

        <HeroImage style={{ overflow: 'hidden', position: 'relative' }} >
            <ImageSection >
                <ImageList className={'bodyCircle'}>
                    <img src={ora} style={{ position: 'absolute', bottom: "1px" }} />
                    <img src={body} style={{ marginRight: '15px' }} />
                </ImageList>
            </ImageSection>
            <HeroText>
                <Typography variant="h5" color='white'>Calculate your PO-SCORAD</Typography>
                <SubmitButton variant='outlined' sx={{ backgroundColor: 'white', minWidth: '48px', height: '48px', width: '48px' }} > <AddIcon fontSize="large" />  </SubmitButton>
            </HeroText>
        </HeroImage>

    </>
}
export default HeroSection;