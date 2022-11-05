import React, {useState} from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import ListIcon from '@mui/icons-material/List'
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';

export const Sidebar = () => {
    // hide or show the sidebar
    const [showing, setShowing] = useState(true);
    const showSideBar = () => setShowing(!showing);

    const button_sidebar = (name) => {
        if (name == "home") {
            return <Button sx = {{ display: "block", margin: "2vh 0vw 2vh 2vw", color: "#57201B", fontSize: "1.5vh" }}>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <HomeIcon sx={{fontSize: "3vh", color:"#57201B"}}/>
                    <Typography variant="h5" sx={{marginLeft:"10px"}}>
                        {name}
                    </Typography>
                </Box>
                
            </Button>;
        }
        else if (name == "categories") {
            return <Button sx = {{ display: "block", margin: "2vh 0vw 2vh 2vw", color: "#57201B", fontSize: "1.5vh" }}>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <CategoryIcon sx={{fontSize: "3vh", color:"#57201B"}}/>
                    <Typography variant="h5" sx={{marginLeft:"10px"}}>
                        {name}
                    </Typography>
                </Box>
            </Button>
        }
    }

    const showing_sidebar = () => {
        return <Box sx = {{
            height: "91vh", 
            component: "span", 
            width: "18vw", 
            display: "block", 
            backgroundColor: "#C8AFAB",
            borderRadius: "15px"}}>

            <IconButton sx={{margin:"7.5px 0 0 7.5px"}}onClick = {showSideBar}>
                <ListIcon sx = {{fontSize: "4vh", color: "#57201B"}}/>
            </IconButton>
            <>{button_sidebar("home")}</>
            <>{button_sidebar("categories")}</>
        </Box>
    }

    const hidden_sidebar = () => {
        return <Box sx = {{height: "100%", 
            width: "18vw", 
            backgroundColor: "#C8AFAB", 
            borderRadius: "15px"}}>

            <IconButton onClick = {showSideBar}>
                <ListIcon sx = {{fontSize: "4vh"}}/>
            </IconButton>
        </Box>
    }

    return (
        <>
            <Box>
                {
                    // if the sidebar is being shown
                    showing ? 
                    <>
                    {showing_sidebar()}
                    </>
                    :
                    // sidebar is not being shown
                    <>
                    {hidden_sidebar()}
                    </>

                }
            </Box>
        </>
    )
}
