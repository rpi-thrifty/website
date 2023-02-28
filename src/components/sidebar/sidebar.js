import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ListIcon from '@mui/icons-material/List'
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';


export const SIDEBAR = ({handleShift}) => {

    // make the categories slide down
    // allow for selections

    const button_sidebar = (name) => {
        let path = "/";
        if (name === "home") {
          path = "/home";
        } else if (name === "categories") {
          path = "/categories";
        } else if (name === "support") {
          path = "/support";
        } else if (name === "about") {
          path = "/about";
        }
      
        return (
          <Button
            sx={{
              display: "block",
              margin: "2vh 0vw 2vh 1vw",
              color: "#57201B",
              fontSize: "1.5vh",
            }}
            href={path}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {name === "home" ? (
                <HomeIcon sx={{ fontSize: "2.5vh", color: "#57201B" }} />
              ) : (
                <CategoryIcon
                  sx={{
                    fontSize: "2.5vh",
                    color: "#57201B",
                    verticalAlign: "center",
                  }}
                />
              )}
              {expand ? (
                <Typography variant="h5" sx={{ marginLeft: "5px", fontSize: "2.5vh", alignItems: "center", marginBottom: 0,  marginTop: "0px" }}>
                  {name}
                </Typography>
              ) : (
                <></>
              )}
            </Box>
          </Button>
        );
      };

    const [expand, setExpand] = useState(true);
    const [sidebarWidth, setSidebarWidth] = useState("15vw");
    var sidebar_width = "15vw";

    const expandSidebar = () => {
        setExpand(!expand);
        setSidebarWidth(expand ? "15vw" : "4vw");
    };
    
        return (
        <Box sx = 
            {{
            height: "95vh", 
            top: "5",
            width: {sidebar_width}, 
            display: "block", 
            position: "fixed",
            borderRight: "solid 1px"
            }}
        >
            
            <ListIcon sx = {{margin:"8px 0 0 8px", fontSize: "4vh", color: "#57201B"}} onClick={expandSidebar}/>

            <>{button_sidebar("home")}</>
            <>{button_sidebar("categories")}</>
            <>{button_sidebar("support")}</>
            <>{button_sidebar("about")}</>
        </Box>)
}