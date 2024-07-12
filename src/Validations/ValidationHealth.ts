import * as Yup from 'yup'
export const ValdationHealth = [
    Yup.object().shape({
        bodyParts: Yup.array()
        .min(1, 'Please select at least one Body Part')
        .required('Please select Body Parts'),
    }),
    Yup.object().shape({
        drynessIntensity  :Yup.number().min(0, "Dryness Intensity required")
    }),
    Yup.object().shape({
        rednessIntensity  :Yup.number().min(0, "Redness Intensity required")
    }),
    Yup.object().shape({
        swellingIntensity  :Yup.number().min(0, "Swelling Intensity required")
    }),
    Yup.object().shape({
        crustsIntensity  :Yup.number().min(0, "Crusts Intensity required")
    }),
    Yup.object().shape({
        scratchMarksIntensity  :Yup.number().min(0, "Scratch marks Intensity required")
    }),
    Yup.object().shape({
        skinThickening  :Yup.number().min(0, "Skin thickening Intensity required")
    }),
    Yup.object().shape({
        psychologicalState: Yup.number().min(1, 'Required'),
        sleepState: Yup.number().min(1, 'Required'),
        itchingState: Yup.number().min(1, 'Required'),
        additionalSymptoms: Yup.string().required("Required"),
      })
]

