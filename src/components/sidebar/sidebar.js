import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ListIcon from '@mui/icons-material/List'
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';

export const Sidebar = () => {

    const button_sidebar = (name) => {
        if (name == "home") {
            return <Button sx = {{ display: "block", margin: "2vh 0vw 2vh 1vw", color: "#57201B", fontSize: "1.5vh" }}>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <HomeIcon sx={{fontSize: "2.5vh", color:"#57201B"}}/>
                    <Typography variant="h5" sx={{marginLeft:"10px"}}>
                        {name}
                    </Typography>
                </Box>
                
            </Button>;
        }
        else if (name == "categories") {
            return <Button sx = {{ display: "block", margin: "2vh 0vw 2vh 1vw", color: "#57201B", fontSize: "1.5vh" }}>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <CategoryIcon sx={{fontSize: "2.5vh", color:"#57201B"}}/>
                    <Typography variant="h5" sx={{marginLeft:"10px"}}>
                        {name}
                    </Typography>
                </Box>
            </Button>
        }
    }

    const Sidebar = () => {
        return <Box sx = {{
            height: "95vh", 
            top: "5",
            width: "15vw", 
            display: "block", 
            position: "fixed",
            borderRight: "solid 1px"
            }}>
            
            <ListIcon sx = {{margin:"8px 0 0 8px", fontSize: "4vh", color: "#57201B"}}/>

            <>{button_sidebar("home")}</>
            <>{button_sidebar("categories")}</>
        </Box>
    }

    return <Sidebar/>
}
