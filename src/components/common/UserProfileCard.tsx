import { Typography } from "@mui/material";
import { UserProfileDiv } from "../../assets/styles/styled";
import { UserProfileCardProps } from '../../Types/Types'
const UserProfileCard: React.FC<UserProfileCardProps> = ({ name, onclick, caption, isActive }) => {
    return <>
        <UserProfileDiv mt={3} isSelected={isActive} onClick={onclick} sx={{ cursor: "pointer" }}>
            <Typography variant="pbold" fontSize={'16px'} component={'p'}>{name}</Typography>
            <Typography variant="caption">{caption}</Typography>
        </UserProfileDiv>
    </>
}
export default UserProfileCard;