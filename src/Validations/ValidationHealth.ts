import * as Yup from 'yup'
export const ValdationHealth = [
    Yup.object().shape({
        bodyParts  :Yup.array().required('please Select BodyParts')
    })
]