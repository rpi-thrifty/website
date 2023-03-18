import React from 'react';
import { Header } from "../components/header/header";
import { Box, Typography } from "@mui/material";
import { UPLOAD_BUTTON } from "../components/upload_but/upload_button";
import { Card } from "../components/items/item_card";
import { Banner } from '../components/banner/banner';
import "./home.css"

export const HomePage = () => {

    document.title = 'Why not buy the world!'; // New title :)

    class Item {
        constructor(price, desc, img_path, url) {
            this.price = price;
            this.desc = desc;
            this.img_path = img_path;
            this.url = url;
        }
    }

    // some definitions
    const it1 = new Item("12", "This this an example item", "images/logo.jpg", "/itempage");
    const it2 = new Item("43", "This this an example item", "images/a2.jpg", "/itempage");
    const it3 = new Item("0", "This this an example item with an endless description so that I can determine how to cut off", "images/a3.jpg", "https://www.google.com");
    const it4 = new Item("9230", "This this an example item", "images/a4.jpg", "https://www.google.com");
    const it5 = new Item("19923", "This this an example item", "images/a5.jpg", "https://www.google.com");
    const it6 = new Item("82", "This this an example item", "images/a6.jpg", "https://www.google.com");
    const it7 = new Item("0", "This this an example item", "images/a7.jpg", "https://www.google.com");


    const insert_image = (item_) => {
        return Card(item_)
    }

    const insert_text = (title, urlToAll) => {
        return (
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography sx={{fontSize: "25px"}} textTransform={"uppercase"}>{title}</Typography>
                <a className="link see_all" href={urlToAll}>See all</a>
            </Box>
        )
    }

    return (
        // outside box
        <Box className='outside_div'>
            <Header/>
            <Box className='banner_div'>
                <Banner/>
            </Box>
            <UPLOAD_BUTTON/>
            <Box className="main_div">
                <Box className="block">
                    <Box className='row'>
                        {insert_text("today's picks", "https://www.google.com")}
                        {/* images for the block */}
                        <Box className='img-row'>
                            <>{insert_image(it1)}</>
                            <>{insert_image(it6)}</>
                            <>{insert_image(it2)}</>
                            <>{insert_image(it3)}</>
                            <>{insert_image(it4)}</>
                            {/* <>{insert_image(it5)}</>
                            <>{insert_image(it7)}</> */}
                        </Box>
                        <hr/>
                    </Box>
                </Box>
                
                
                {/* blocks 2 */}
                <Box className="block">
                    <Box className='row'>
                        {/* title of the block */}
                        {insert_text("discounted", "https://www.google.com")}
                        {/* images for the block */}
                        <Box className='img-row'>
                            <>{insert_image(it3)}</>
                            <>{insert_image(it4)}</>
                        </Box>
                        <hr/>
                    </Box>
                    
                </Box>
                
                {/* blocks 2 */}
                <Box className="block">
                    <Box className="row">
                        {/* title of the block */}
                        {insert_text("miscellaneous", "https://www.google.com")}
                        {/* images for the block */}
                        <Box className="img-row">
                            <>{insert_image(it7)}</>
                        </Box>
                    </Box>
                </Box>
                {/* add footer here */}
            </Box>  
        </Box>
    )
};