import { Container, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { FlexBox, LoginTextMessage } from "../assets/styles/styled";
import ImageHeading from "../components/common/ImageHeading";

const CheckEmail: React.FC = () => {
    const params = useParams();

    return <>
        <Container maxWidth='sm' sx={{
            height: '90vh', maxWidth: {
                xs: "100%",
                sm: '402px',
                lg: "508px"

            },
            mt: 3
        }}>
            <FlexBox>
                <ImageHeading heading="Check your email" />
                <Typography variant="body2" >We'll send an email <Typography color='primary' display={'inline'} margin='0 5px'>{params.email}</Typography>if it's associated with your account.</Typography>
                <Typography variant="body2" sx={{ mt: 3 }} > Bear in mind it will be valid for {"<24 hours>"} only</Typography>
                <Link to={'/reset'}>Reset</Link>
                <LoginTextMessage>
                    <Typography variant="body2">Take me back to<Link to={'/'} className="anchor" color="primary" >login</Link></Typography>
                </LoginTextMessage>
            </FlexBox>
        </Container>
    </>
}
export default CheckEmail;