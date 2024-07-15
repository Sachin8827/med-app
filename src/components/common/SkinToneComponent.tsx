import { SkinToneBox, SkinToneButton, SkinToneHeading, SkintoneImage } from "../../assets/styles/styled";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ImageList, Typography, useTheme } from "@mui/material";
import { SkinToneProps } from "../../Types/Types";
const SkinToneComponent: React.FC<SkinToneProps> = ({ isError, name, heading, firstImage, secondImage, thirdImage, isSelected, handleSkinTone }) => {

    return <>
        <SkinToneBox name={name} onClick={() => handleSkinTone(heading)} sx={{ boxSizing: 'border-box', backgroundColor: isError ? '#C5141414' : isSelected ? '#E2F2C8' : "#F0F1F4", border: isError ? '1px solid red' : isSelected ? "1px solid #87C81A" : '1px solid #F0F1F4' }}>
            <SkinToneHeading >
                <Typography>{heading}</Typography>
                {isSelected && <CheckCircleIcon sx={{ color: '#87C81A' }} />}
            </SkinToneHeading>
            <SkinToneButton >
                <SkintoneImage >
                    <img src={firstImage} width='100%' height={'100%'} alt="Logo" style={{ borderRadius: '12px' }} />
                </SkintoneImage>
                <SkintoneImage >
                    <img src={secondImage} width='100%' height={'100%'} alt="Logo" style={{ borderRadius: '12px' }} />
                </SkintoneImage>
                <SkintoneImage >
                    <img src={thirdImage} width='100%' height={'100%'} alt="Logo" style={{ borderRadius: '12px' }} />
                </SkintoneImage>
            </SkinToneButton>
        </SkinToneBox>
    </>
}
export default SkinToneComponent;
