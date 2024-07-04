import { Box, ImageList, Radio, RadioGroup, Typography } from "@mui/material"
import { useState } from "react"

import SkinToneComponent from "../common/SkinToneComponent";
import { MyformControl } from "../../assets/styles/styled";
import ImageHeading from "../common/ImageHeading"
import imageFirst from '../../../public/images/SkinToneAFirst.svg'
import secondImage from '../../../public/images/SkintoneSecond.svg'
import thirdImage from '../../../public/images/SkinToneThird.svg'
import fourthImage from '../../../public/images/SkinToneFourth.svg'
import fifthImage from '../../../public/images/SkinToneFifth.svg'
import sixthImage from '../../../public/images/SkinToneSixth.svg'
import seventhImage from '../../../public/images/SkinToneSeventh.svg'
import eighthImage from '../../../public/images/SkinToneEighth.svg'
import ninthImage from '../../../public/images/SkinToneNinth.svg'
const SkinTone: React.FC<{ skinTone: string, setFieldValue: any }> = ({ skinTone, setFieldValue }) => {
    const [skinToneInput, setSkinTone] = useState("Tone A");
    const a = '#87C81A'
    const handleSkinTone = (tone: string) => {
        setFieldValue('skinTone', skinToneInput);
        setSkinTone(tone);
    }
    return <>
        <ImageHeading heading="Select the option that matches your skin tone best" />
        <MyformControl sx={{ mt: '1.5rem' }}>
            <RadioGroup
                sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}
            >
                <SkinToneComponent heading='Tone A' firstImage={imageFirst} secondImage={secondImage} thirdImage={thirdImage} isSelected={skinTone == "Tone A"} handleSkinTone={handleSkinTone} />
                <SkinToneComponent heading='Tone B' firstImage={fourthImage} secondImage={fifthImage} thirdImage={sixthImage} isSelected={skinTone == "Tone B"} handleSkinTone={handleSkinTone} />
                <SkinToneComponent heading='Tone C' firstImage={seventhImage} secondImage={eighthImage} thirdImage={ninthImage} isSelected={skinTone == "Tone C"} handleSkinTone={handleSkinTone} />
            </RadioGroup>
        </MyformControl>
    </>
}
export default SkinTone 