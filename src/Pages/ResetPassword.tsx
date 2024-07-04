
import { Container, Typography } from "@mui/material";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AlertSuccess, FlexBox, FlexSuccess } from "../assets/styles/styled"
import ResetPasswordForm from "../components/auth/ResetPasswordForm";


import ImageHeading from "../components/common/ImageHeading"


const ResetPassword = () => {


    const [showAlert, setAlert] = useState(false);

    return <>
        <Container sx={{
            height: '90vh', maxWidth: {
                xs: "100%",
                sm: '402px',
                lg: "508px"

            }
        }}>

            <FlexBox sx={{ position: 'relative' }}>
                {showAlert ? <FlexSuccess >
                    <AlertSuccess error={false} severity="success" onClose={() => { }}>
                        <Typography variant="caption"> Password has been changed</Typography>
                    </AlertSuccess>
                </FlexSuccess> : ""}

                <ImageHeading heading="Reset Password" />
                <Typography variant="body2" >Please enter a new password</Typography>
                <ResetPasswordForm setAlert={setAlert} />
            </FlexBox>
        </Container >
    </>
}
export default ResetPassword