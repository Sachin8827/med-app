
import { Container, Typography } from '@mui/material';
import ImageHeading from '../components/common/ImageHeading';
import LoginForm from '../components/auth/LoginForm';
import { LoginTextMessage } from '../assets/styles/styled';
import { Link } from 'react-router-dom';

const Login = () => {


    return (
        <Container sx={{
            height: "35vh",
            maxWidth: {
                xs: "100%",
                sm: '402px',
                lg: "508px"

            },
            mt: 3

        }} > {/* Adjusted maxWidth for responsiveness */}
            <ImageHeading heading='Hi there! Have we met before?' />
            <LoginForm />
            <LoginTextMessage>
                <Typography variant="body2">Take me back to<Link to={'/signup'} className="anchor" color="primary" >SignUp</Link></Typography>
            </LoginTextMessage>
        </Container >
    );
};

export default Login;
