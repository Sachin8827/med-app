import { DateProp, GenderProps, InputFieldProps } from '../../Types/Types';
import { useField } from 'formik';
import { Input, ErrorMsg, CustomRadioButton, } from '../../assets/styles/styled';
import { Radio } from '@mui/material';

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

export const GenderInputField: React.FC<GenderProps> = ({ label, ...props }) => {

    const [field, meta, helper] = useField('gender');
    const isError = meta.error && meta.touched;

    return <>
        <CustomRadioButton label={label} {...field} {...props} isError={isError} control={<Radio />} />
    </>
}




