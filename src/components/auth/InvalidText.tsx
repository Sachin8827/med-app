import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FlexBox } from "../../assets/styles/styled";
import FormInputButton from "../common/Button";

const InvalidText: React.FC = () => {
    return <>
        <FlexBox sx={{ mt: 2 }}>
            <Typography variant='h5' >Link is invalid</Typography>
            <Typography variant="body2">Unfortunately, your password reset link is invalid.</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>The link may have expired (valid for 24 hours). In this case, please try to go through the password recovery process again.</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>If you are using the clipboard, make sure the link is copied correctly</Typography>
            <Link to='/' style={{ textDecoration: 'none' }}><FormInputButton isLoading={false} text="Go to login" /></Link>
        </FlexBox>
    </>
}
export default InvalidText;
