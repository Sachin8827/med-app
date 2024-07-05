import { Box, ImageList, Radio, RadioGroup, Typography } from "@mui/material"
import { useState } from "react"

import SkinToneComponent from "../common/SkinToneComponent";
import { ErrorMsg, MyformControl } from "../../assets/styles/styled";
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
import { useField } from "formik";
const SkinTone: React.FC<{ skinTone: string, setFieldValue: any }> = ({ skinTone, setFieldValue }) => {
    const [skinToneInput, setSkinTone] = useState(skinTone);
    const a = '#87C81A'
    const handleSkinTone = (tone: string) => {
        setSkinTone(tone);
        setFieldValue('skinTone', tone);
    }
    const [field, meta, helper] = useField('skinTone');
    return <>
        <ImageHeading heading="Select the option that matches your skin tone best" />
        <MyformControl sx={{ mt: '1.5rem' }}>
            <RadioGroup
                sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}
            >
                <SkinToneComponent isError={!!meta.error && meta.touched} name='skinTone' heading='Tone A' firstImage={imageFirst} secondImage={secondImage} thirdImage={thirdImage} isSelected={skinToneInput == "Tone A"} handleSkinTone={handleSkinTone} />
                <SkinToneComponent isError={!!meta.error && meta.touched} name='skinTone' heading='Tone B' firstImage={fourthImage} secondImage={fifthImage} thirdImage={sixthImage} isSelected={skinToneInput == "Tone B"} handleSkinTone={handleSkinTone} />
                <SkinToneComponent isError={!!meta.error && meta.touched} name='skinTone' heading='Tone C' firstImage={seventhImage} secondImage={eighthImage} thirdImage={ninthImage} isSelected={skinToneInput == "Tone C"} handleSkinTone={handleSkinTone} />
            </RadioGroup>
            {meta.error && meta.touched ? <ErrorMsg variant='body2' color='error'>{meta.error}</ErrorMsg> : ""}
        </MyformControl>

    </>
}
export default SkinTone 