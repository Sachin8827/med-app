import { useState } from "react"
import { Form, Formik } from "formik";
import { ErrorMsg, MyformControl, SignpuFlexBox, SkintoneGroup, SubmitButton } from "../../assets/styles/styled";
import SkinToneComponent from "../common/SkinToneComponent";
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
import { validationSchema } from "../../Validations/SchemaValidations";
const SkinTone: React.FC<{ skinTone: string, handleNext: any, handlePrevious: any }> = ({ skinTone, handleNext, handlePrevious }) => {
    const [skinToneInput, setSkinTone] = useState(skinTone);
    const currentValidationStep = validationSchema[2]

    const handleSkinTone = (tone: string, setFieldValue: any) => {
        setSkinTone(tone);
        setFieldValue('skinTone', tone);
    }

    return <>
        <ImageHeading heading="Select the option that matches your skin tone best" />
        <Formik
            initialValues={{ skinTone }}
            validationSchema={currentValidationStep}
            onSubmit={handleNext}
        >
            {({ setFieldValue, errors, touched }) => (
                <Form>
                    <MyformControl sx={{ mt: '1.5rem' }}>
                        <SkintoneGroup
                        >
                            <SkinToneComponent isError={!!errors.skinTone && !!touched.skinTone} name='skinTone' heading='Tone A' firstImage={imageFirst} secondImage={secondImage} thirdImage={thirdImage} isSelected={skinToneInput == "Tone A"} handleSkinTone={() => handleSkinTone("Tone A", setFieldValue)} />
                            <SkinToneComponent isError={!!errors.skinTone && !!touched.skinTone} name='skinTone' heading='Tone B' firstImage={fourthImage} secondImage={fifthImage} thirdImage={sixthImage} isSelected={skinToneInput == "Tone B"} handleSkinTone={() => handleSkinTone("Tone B", setFieldValue)} />
                            <SkinToneComponent isError={!!errors.skinTone && !!touched.skinTone} name='skinTone' heading='Tone C' firstImage={seventhImage} secondImage={eighthImage} thirdImage={ninthImage} isSelected={skinToneInput == "Tone C"} handleSkinTone={() => handleSkinTone("Tone C", setFieldValue)} />
                        </SkintoneGroup>
                        {errors.skinTone && touched.skinTone ? <ErrorMsg variant='body2' color='error'>{errors.skinTone}</ErrorMsg> : ""}
                    </MyformControl>
                    <SignpuFlexBox sx={{ justifyContent: 'space-between' }}>
                        <SubmitButton type='submit' variant="contained">
                            Continue
                        </SubmitButton>
                        <SubmitButton variant="outlined" onClick={handlePrevious}>
                            Previous
                        </SubmitButton>
                    </SignpuFlexBox>
                </Form>
            )}
        </Formik>
    </>
}
export default SkinTone 