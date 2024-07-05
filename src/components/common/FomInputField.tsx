import { DateProp, InputFieldProps } from '../../Types/Types';
import { useField } from 'formik';
import { Input, ErrorMsg, } from '../../assets/styles/styled';

export const InputField: React.FC<InputFieldProps> = ({ emailfound, label, ...props }) => {
    const [field, meta, helpers] = useField(props)
    return <>
        <Input fullWidth {...field} {...props} color='secondary' size='medium' error={!!meta.error && meta.touched} />
        {emailfound === false && meta.touched && !meta.error ? <ErrorMsg variant='body2' color='error'>Email Not  Found</ErrorMsg> : meta.error && meta.touched ? <ErrorMsg variant='body2' color='error'>{meta.error}</ErrorMsg> : ""}
    </>
}
export const PasswordFormInputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)

    return <>
        <Input fullWidth {...field} {...props} color='secondary' size='medium' endAdornment={props.endadornment} error={!!meta.error && meta.touched} />
        {meta.error && meta.touched ? <ErrorMsg variant='body2' color='error'>{meta.error}</ErrorMsg> : ""}
    </>
}
export const DateInputField: React.FC<DateProp> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)


    return <>
        <Input inputProps={{ max: new Date().toISOString().split('T')[0] }} type='date' error={!!meta.error && meta.touched} {...field} {...props} />
        {meta.error && meta.touched ? <ErrorMsg variant='body2' color='error'>{meta.error}</ErrorMsg> : ""}
    </>
}

