import { Container, Typography } from "@mui/material"
import SignUpForm from "../components/auth/SignUpForm";
import ImageHeading from "../components/common/ImageHeading"

const SignUp: React.FC = () => {
    return <>
        <Container sx={{
            maxWidth: {
                xs: "100%",
                sm: '402px',
                lg: "616px"

            }, mt: 3
        }}>

            <SignUpForm />
        </Container>
    </>
}
export default SignUp;
