import { styled } from '@mui/material/styles';
import { FormControl, InputAdornment, InputBase, InputBaseProps, InputLabel } from '@mui/material';
import { InputFieldProps } from '../../Types/Types';
import { useField } from 'formik';

const FormInputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)

    console.log(props.value)
    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
            borderRadius: 10,
            position: 'relative',
            backgroundColor: theme.palette.mode === 'light' ? '#F0F1F4' : '#F0F1F4',
            borderColor: theme.palette.mode === 'light' ? 'none' : 'none',
            color: theme.palette.text.primary,
            lineHeight: '22px',
            fontWeight: 400,
            padding: '10px 12px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            // Use the system font instead of the default Roboto font.
            '&.outline-error': {
                border: '1px solid red',
            },
        },
    }));
    return <>
        <FormControl fullWidth variant="standard" style={{ marginTop: '5px' }}>
            <InputLabel shrink style={{ fontWeight: 400, color: '#2F2F32', fontSize: '18px' }}  >
                {label}
            </InputLabel>
            <BootstrapInput {...props} {...field} color="primary" size="medium" />
            {meta.touched && meta.error ? (
                <div className="error" style={{ color: 'red' }} >
                    {meta.error}
                </div>
            ) : null}
        </FormControl>
    </>
}
export default FormInputField;