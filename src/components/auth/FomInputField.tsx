import { InputFieldProps } from '../../Types/Types';
import { useField } from 'formik';
import { EmailField, ErrorMsg, PasswordField } from '../../assets/styles/styled';

export const EmailFormInputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)

    return <>
        <EmailField fullWidth {...field} {...props} error={meta.error && meta.touched} />
        {meta.error && meta.touched ? <ErrorMsg>{meta.error}</ErrorMsg> : ""}
    </>
}
export const PasswordFormInputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)

    return <>
        <PasswordField fullWidth {...field} {...props} endAdornment={props.endadornment} error={meta.error && meta.touched} />
        {meta.error && meta.touched ? <ErrorMsg>{meta.error}</ErrorMsg> : ""}
    </>
}
