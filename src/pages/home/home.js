import { Sidebar } from "../../components/sidebar";
import { Header } from "../../components/header";
import { Box, Button, Typography, borderRadius } from "@mui/material";
import ITEM_ENTRY from "../../components/entry";


export const HomePage = () => {

    const entryList = (entryL) => {
        for (let i = 0; i < entryL.length; i++){ 
            
        }
    }

    return (
        // outside box
        <Box sx = {{
            display: "flex",
            justifyContent: "space-between",
            margin: "9vh 0 0 20vw"
        }}>
            <Box sx = {{
                width: "100vw", 
                left: "0",
                top: "0",
                height: "7vh", 
                backgroundColor: "#E4D6D4", 
                position: "fixed"
            }}>
                {/* sidebar */}
                <Box sx = {{ display: "inline-block", 
                    position: "fixed",
                    left: "1vw",
                    top: "8vh",
                    width: "18vw",}}>
                    <Sidebar/>
                </Box>

                {/* insert header behind sidebar */}
                <Box>
                    <Typography> text for sidebar goes here </Typography>
                </Box>
            </Box>

            <Box>
                <img src="../../../images/1.jpg"></img>
            </Box>
            
        </Box>
    )
};