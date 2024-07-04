import { DateProp, InputFieldProps } from '../../Types/Types';
import { useField } from 'formik';
import { DateInput, EmailField, ErrorMsg, PasswordField } from '../../assets/styles/styled';
import { ToggleButton } from '@mui/material';

export const InputField: React.FC<InputFieldProps> = ({ emailfound, label, ...props }) => {
    const [field, meta, helpers] = useField(props)
    return <>
        <EmailField fullWidth {...field} {...props} color='secondary' size='medium' error={!!meta.error && meta.touched} />
        {emailfound === false && meta.touched && !meta.error ? <ErrorMsg variant='body2' color='error'>Email Not  Found</ErrorMsg> : meta.error && meta.touched ? <ErrorMsg variant='body2' color='error'>{meta.error}</ErrorMsg> : ""}
    </>
}
export const PasswordFormInputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)

    return <>
        <PasswordField fullWidth {...field} {...props} color='secondary' size='medium' endAdornment={props.endadornment} error={!!meta.error && meta.touched} />
        {meta.error && meta.touched ? <ErrorMsg variant='body2' color='error'>{meta.error}</ErrorMsg> : ""}
    </>
}
export const DateInputField: React.FC<DateProp> = ({ label, ...props }) => {
    // props.value = props.value.toString();
    // const [field, meta, helpers] = useField(props)


    return <>
        <DateInput disableFuture format="YYYY/MM/DD" />
        {/* {meta.error && meta.touched ? <ErrorMsg variant='body2' color='error'>{meta.error}</ErrorMsg> : ""} */}
    </>
}
export const GenderInput: React.FC<InputFieldProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)
    return <>

        {meta.error && meta.touched ? <ErrorMsg variant='body2' color='error'>{meta.error}</ErrorMsg> : ""}
    </>
}
