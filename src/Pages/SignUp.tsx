import { Container } from "@mui/material"
import SignUpForm from "../components/auth/SignUpForm";

const SignUp: React.FC = () => {

    return <>
        <Container sx={{
            maxWidth: {
                xs: "100%",
                sm: '402px',
                lg: "508px"
            }, mt: 3
        }}>
            <SignUpForm />
        </Container>
    </>
}

export default SignUp;
