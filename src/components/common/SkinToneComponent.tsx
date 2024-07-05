import { SkinToneBox, SkinToneButton, SkinToneHeading } from "../../assets/styles/styled";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ImageList, Typography } from "@mui/material";
import { SkinToneProps } from "../../Types/Types";
const SkinToneComponent: React.FC<SkinToneProps> = ({ isError, name, heading, firstImage, secondImage, thirdImage, isSelected, handleSkinTone }) => {
    return <>
        <SkinToneBox name={name} onClick={() => handleSkinTone(heading)} sx={{ boxSizing: 'border-box', backgroundColor: isError ? '#C5141414' : isSelected ? '#E2F2C8' : "#F0F1F4", border: isError ? '1px solid red' : isSelected ? "1px solid #87C81A" : '1px solid #F0F1F4' }}>
            <SkinToneHeading >
                <Typography>{heading}</Typography>
                {isSelected && <CheckCircleIcon sx={{ color: '#87C81A' }} />}

            </SkinToneHeading>
            <SkinToneButton >
                <ImageList sx={{ width: 'auto' }} >
                    <img src={firstImage} alt="Logo" style={{ borderRadius: '12px' }} />
                </ImageList>
                <ImageList >
                    <img src={secondImage} alt="Logo" style={{ borderRadius: '12px' }} />
                </ImageList>
                <ImageList >
                    <img src={thirdImage} alt="Logo" style={{ borderRadius: '12px' }} />
                </ImageList>

            </SkinToneButton>
        </SkinToneBox>
    </>
}
export default SkinToneComponent;
