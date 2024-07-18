import { Typography } from "@mui/material";
import { HomePageCardWrapper } from "../../assets/styles/styled";
import { HomePageCardProps } from "../../Types/Types";


const HomePageCard: React.FC<HomePageCardProps> = ({ heading, content, onclick }) => {

    return <>
        <HomePageCardWrapper py={3.2} px={2.5} onClick={onclick} >
            <Typography variant="h3">{heading}</Typography>
            <Typography mt={1} variant="p3" component='p'>{content}</Typography>
        </HomePageCardWrapper>
    </>
}
export default HomePageCard;