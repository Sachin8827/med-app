
import { Container } from "@mui/system";
import { CloseCircleIcon } from "../assets/styles/styled";
import InvalidText from "../components/auth/InvalidText";
import ImageHeading from "../components/common/ImageHeading";


const InvalidLink = () => {
    return <>
        <Container sx={{
            maxWidth: {
                xs: "100%",
                sm: '402px',
                lg: "508px"

            }
        }}>
            <ImageHeading heading="" />
            <CloseCircleIcon />
            <InvalidText />
        </Container>
    </>
}
export default InvalidLink;