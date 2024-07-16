import { Container } from "@mui/material"
import { ReactNode } from "react";

const ResponsiveContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <>
        <Container sx={{
            maxWidth: {
                sx: '100%',
                sm: '376px',
                lg: '508px',
                xl: '616px'
            }
        }}>{children}</Container>
    </>
}
export default ResponsiveContainer;