import { SkinToneBox, SkinToneButton, SkinToneHeading } from "../../assets/styles/styled";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ImageList, Typography } from "@mui/material";
import { SkinToneProps } from "../../Types/Types";
const SkinToneComponent: React.FC<SkinToneProps> = ({ heading, firstImage, secondImage, thirdImage, isSelected, handleSkinTone }) => {
    return <>
        <SkinToneBox onClick={() => handleSkinTone(heading)} sx={{ backgroundColor: isSelected ? '#c5e1a5' : "#F0F1F4" }}>
            <SkinToneHeading>
                <Typography>{heading}</Typography>
                {isSelected && <CheckCircleIcon color="success" />}

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
