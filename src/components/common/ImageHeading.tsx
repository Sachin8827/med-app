import { ImageList, Typography } from "@mui/material";
import { LoginSection } from "../../styled";
import logo from '../../../public/images/logo.svg';
import { Para } from "../../assets/styles/styled";
const ImageHeading: React.FC<{ heading: string, text?: string }> = ({ heading, text }) => {
    return <>

        <LoginSection >
            <ImageList>
                <img src={logo} alt="Logo" />
            </ImageList>
            <Typography variant="h5" component="h5" className='text-heading'>
                {heading}
            </Typography>
            {text && <Para variant='subtitle1' component='subtitle1' className={'para'}>{text}</Para>}
        </LoginSection>

    </>
}
export default ImageHeading;