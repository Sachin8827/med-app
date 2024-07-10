import * as Yup from 'yup'
export const ValdationHealth = [
    Yup.object().shape({
        bodyParts  :Yup.array().required('please Select BodyParts')
    }),
    Yup.object().shape({
        drynessIntensity  :Yup.number().min(0, "Dryness Intensity required")
    })
]