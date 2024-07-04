import { Visibility, VisibilityOff } from "@mui/icons-material"
import { IconButton, InputAdornment, Typography } from "@mui/material"
import { useState } from "react"
import { Label, MyformControl } from "../../assets/styles/styled"
import { EmailFormProps } from "../../Types/Types"
import { InputField, PasswordFormInputField } from "../common/FomInputField"
import ImageHeading from "../common/ImageHeading"

const EmailForm: React.FC<EmailFormProps> = ({ email, password }) => {
    const [showPassword, setShowPassword] = useState(true);
    const handleClickShowPassword = () => setShowPassword((show: Boolean) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return <>
        <ImageHeading heading="Sign up" />
        <Typography variant="body2">Through an individual invitation</Typography>
        <MyformControl sx={{ mt: '2rem' }}>
            <Label shrink className='labelDesign' >Email</Label>
            <InputField name='email' className='email' label='' id='email' value={email} />
        </MyformControl>

        <MyformControl sx={{ mt: '1.5rem' }}>
            <Label shrink className='labelDesign'>Password</Label>
            <PasswordFormInputField
                value={password}
                className="password"
                label=''
                name='password'
                id="password"
                type={showPassword ? 'text' : 'password'}
                endadornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }

            />
        </MyformControl>
    </>
}
export default EmailForm    