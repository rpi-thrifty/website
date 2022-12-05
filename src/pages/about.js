import { Header } from "../components/header/header";
import { Box } from "@mui/material"

export const AboutPage = () => {
    return(
        <div style={{background: 'rgb(255, 255, 245)', height: '100vh'}}>
            <Box sx={{marginLeft:"2.5%"}}>
                <Header/>
                <div>
                    Us.
                </div>
            </Box>
        </div>
    )
}