import { Container } from "@mui/material";
import { FlexBox } from "../assets/styles/styled";
import SendEmailForm from "../components/auth/SendEmailForm";
import ImageHeading from "../components/common/ImageHeading";


const ForgotPassword: React.FC = () => {

    return <>
        <Container sx={{
            height: '90vh', maxWidth: {
                xs: "100%",
                sm: '402px',
                lg: "508px"

            }
        }}>
            <FlexBox>
                <ImageHeading heading="Reset password" text="Type the email you used to sign up and we'll send you a password reset email" />
                <SendEmailForm />
            </FlexBox>
        </Container>
    </>
}
export default ForgotPassword;