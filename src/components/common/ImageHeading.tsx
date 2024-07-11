import { ImageList, Typography } from "@mui/material";
import { LoginSection } from "../../styled";
import logo from '../../../public/images/logo.svg';

const ImageHeading: React.FC<{ heading: string, text?: string }> = ({ heading, text }) => {

    return <>
        <LoginSection >
            <ImageList >
                <img src={logo} alt="Logo" />
            </ImageList>
            <Typography variant="h5" component="h5" >
                {heading}
            </Typography>
            {text && <Typography variant='body2' >{text}</Typography>}
        </LoginSection>
    </>
}
export default ImageHeading;