import { Typography } from "@mui/material";
import { HomePageCardWrapper } from "../../assets/styles/styled";
import { HomePageCardProps } from "../../Types/Types";


const HomePageCard: React.FC<HomePageCardProps> = ({ heading, content, onclick }) => {

    return <>
        <HomePageCardWrapper py={3.2} px={2.5} onClick={onclick} >
            <Typography variant="subtitle2">{heading}</Typography>
            <Typography mt={0.5} variant="body2">{content}</Typography>
        </HomePageCardWrapper>
    </>
}
export default HomePageCard;