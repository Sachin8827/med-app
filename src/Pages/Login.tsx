
import { Container } from '@mui/material';
import ImageHeading from '../components/common/ImageHeading';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {


    return (
        <Container sx={{
            maxWidth: {
                xs: "100%",
                sm: '402px',
                lg: "508px"

            }
        }} > {/* Adjusted maxWidth for responsiveness */}
            <ImageHeading heading='Hi there! Have we met before?' />
            <LoginForm />

        </Container >
    );
};

export default Login;
