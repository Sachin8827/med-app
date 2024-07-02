import { CircularProgress } from "@mui/material";
import { SubmitButton } from "../../assets/styles/styled";

const FormInputButton: React.FC<{ isLoading: boolean, text: string }> = ({ isLoading, text }) => {
    return <>
        <SubmitButton fullWidth variant='contained' type="submit" >{isLoading ? <CircularProgress sx={{ p: 0.6 }} color='inherit' /> : text}</SubmitButton>
    </>
}
export default FormInputButton;