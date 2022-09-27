import React, {useState} from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';

export const Sidebar = () => {
    // hide or show the sidebar
    const [showing, setShowing] = useState(false);
    const showSideBar = () => setShowing(!showing);

    const button_sidebar = (name) => {
        return <Button sx = {{ display: "block", margin: "2vh 0vw 2vh 2vw", color: "#57201B" }}>
            {name}
        </Button>
    }

    const showing_sidebar = () => {
        return <Box sx = {{height: "100%", component: "span", width: "18vw", display: "block"}}>
            <IconButton onClick = {showSideBar}>
                <ListIcon sx = {{fontSize: "4vh", color: "#57201B"}}/>
            </IconButton>
            <>{button_sidebar("hi")}</>
            <>{button_sidebar("bye")}</>
            <>{button_sidebar("hi")}</>
            <>{button_sidebar("bye")}</>
            <>{button_sidebar("hi")}</>
            <>{button_sidebar("bye")}</>
            <>{button_sidebar("hi")}</>
            <>{button_sidebar("bye")}</>
        </Box>
    }

    const hidden_sidebar = () => {
        return <Box sx = {{height: "100%", width: "18vw", backgroundColor: "pink"}}>
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
