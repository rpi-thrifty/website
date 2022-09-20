import { Sidebar } from "../../components/sidebar";
import { Header } from "../../components/header";
import { Box, Button } from "@mui/material";

export const HomePage = () => {
    return (
        
        <Box sx = {{ display: "flex", backgroundColor: "red"}}>
            {/* sidebar */}
            <Box sx = {{ display: "inline-block", position: "fixed"}}>
                {/* <Header/> */}
                <Sidebar/>
            </Box>
            
        </Box>
    )
};