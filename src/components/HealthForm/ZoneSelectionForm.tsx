import { useState } from "react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { Formik, Form } from "formik"
import { ValdationHealth } from "../../Validations/ValidationHealth"
import FormNavBar from "./FormNavBar"
import rotateIcon from '../../../public/images/Button Turn.svg'
import { SubmitButton } from "../../assets/styles/styled"
import { BodySection, BodySectionForm, ErrorMsg, NextButtonDiv, SvgBox } from "../../assets/styles/styled"
import AdultFrontBody from "../humanBody/adult/FrontBody"
import AdultBackBody from "../humanBody/adult/BackBody"
import KidFrontBody from "../humanBody/kid/FrontBody"
import KidBackBody from "../humanBody/kid/BackBody"
import BabyFrontBody from "../humanBody/baby/FrontBody"
import BabyBodyBack from "../humanBody/baby/BodyBack"
import '../../assets/styles/styles.css'

const ZoneSelectionForm: React.FC<{ handleNext: (values: any) => void, parts: string[] }> = ({ handleNext, parts }) => {

	const [bodyParts, setBodyParts] = useState<string[]>(parts)
	const currentValidationStep = ValdationHealth[0];
	const [isFront, setFront] = useState(true);
	const isLandscape = useMediaQuery('(orientation: landscape)');
	const age = 25

	const handleBodyParts = (partName: string, setFieldValue: (name: string, value: string[]) => void) => {
		const newBodyParts = bodyParts.includes(partName) ? bodyParts.filter(part => part != partName) : [...bodyParts, partName]
		setBodyParts(newBodyParts)
		setFieldValue('bodyParts', newBodyParts)
	}
	const handleClick = () => {
		setFront(!isFront)
	}
	const isPartSelected = (value: string) => {
		return bodyParts.some(part => part === value)
	}
	const RenderBody = (bodySide: string, setFieldValue: (name: string, value: string[]) => void) => {
		if (age <= 5) {
			if (bodySide == 'front') return <BabyFrontBody onclick={(e: any) => handleBodyParts(e.target.id, setFieldValue)} isPartSelected={isPartSelected} />
			else return <BabyBodyBack onclick={(e: any) => handleBodyParts(e.target.id, setFieldValue)} isPartSelected={isPartSelected} />
		}
		else if (age <= 17) {
			if (bodySide == 'front') return <KidFrontBody onclick={(e: any) => handleBodyParts(e.target.id, setFieldValue)} isPartSelected={isPartSelected} />
			else return <KidBackBody onclick={(e: any) => handleBodyParts(e.target.id, setFieldValue)} isPartSelected={isPartSelected} />
		}
		else {
			if (bodySide == 'front') return <AdultFrontBody onclick={(e: any) => handleBodyParts(e.target.id, setFieldValue)} isPartSelected={isPartSelected} />
			else return <AdultBackBody onclick={(e: any) => handleBodyParts(e.target.id, setFieldValue)} isPartSelected={isPartSelected} />
		}
	}

	return <>
		<FormNavBar text='Home' />
		<BodySection>
			<Box>
				<Typography variant="h5">Affected Areas</Typography>
				<Typography variant="body2" mt={1} mb={1}>Press the zones that are affected by eczema</Typography>
			</Box>
			<Formik
				initialValues={{ bodyParts: bodyParts }}
				validationSchema={currentValidationStep}
				onSubmit={handleNext}
			>
				{({ setFieldValue, errors, touched }) => (
					< Form >
						<BodySectionForm >
							<img style={{ display: isLandscape ? 'none' : 'block' }} src={rotateIcon} onClick={handleClick} />
							<SvgBox sx={{ display: isLandscape ? "block" : isFront ? 'block' : 'none' }}>
								{RenderBody('front', setFieldValue)}
							</SvgBox>
							<SvgBox sx={{ display: isLandscape ? "block" : !isFront ? 'block' : 'none' }}>
								{RenderBody('back', setFieldValue)}
							</SvgBox>
							<NextButtonDiv>
								<SubmitButton variant='contained' type='submit'>Next</SubmitButton>
							</NextButtonDiv>
						</BodySectionForm>
						{errors.bodyParts && touched.bodyParts ? <ErrorMsg variant='body2' color='error'>{errors.bodyParts}</ErrorMsg> : ""}
					</Form>
				)}
			</Formik>
		</BodySection>
	</>
}
export default ZoneSelectionForm