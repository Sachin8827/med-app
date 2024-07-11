import { Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import FormInputButton from "../components/common/Button"

const ErrorComponent = () => {

    return <>
        <Container sx={{
            maxWidth: {
                xs: "100%",
                sm: '402px',
                lg: "508px"
            },
            mt: 3
        }}>
            <Typography variant="h1" component="h2" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1">
                Sorry, the page you are looking for does not exist.
            </Typography>
            <Link to={'/'} style={{ textDecoration: 'none' }} >
                <FormInputButton isLoading={false} text='Back To Home' />
            </Link>
        </Container>
    </>
}
export default ErrorComponent