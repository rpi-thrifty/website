import React from 'react';
import { Header } from "../components/header/header";
import Footer from '../components/footer/footer';
import { Box } from "@mui/material";
import { UPLOAD_BUTTON } from "../components/upload_but/upload_button";
import { Banner } from '../components/banner/banner';
import "./home.css"
import Render_Card from '../components/items/render_card';
import Row from '../components/items/item_row';

export const HomePage = () => {

    document.title = 'Thrifty'; // New title :)

    class Item {
        constructor(price, desc, img_path, url) {
            this.price = price;
            this.desc = desc;
            this.img_path = img_path;
            this.url = url;
        }
    }

    // some definitions
    const it1 = new Item("12.00", "This this an example item", "images/logo.jpg", "/itempage");
    const it2 = new Item("43.00", "This this an example item", "images/a2.jpg", "/itempage");
    const it3 = new Item("0", "This this an example item with an endless description so that I can determine how to cut ajsid ioadj oiasjd iojasiod jasodj oiasjd oiasjd iajsoi aso jdioa js", "images/a3.jpg", "https://www.google.com");
    const it4 = new Item("9230.00", "This this an example item", "images/a4.jpg", "https://www.google.com");
    const it5 = new Item("19923.00", "This this an example item", "images/a5.jpg", "https://www.google.com");
    const it6 = new Item("82.00", "This this an example item", "images/a6.jpg", "https://www.google.com");
    const it7 = new Item("0", "This this an example item", "images/a7.jpg", "https://www.google.com");

    const today = [it1, it2, it3, it4, it5, it6, it7];

    const insert_text = (title, urlToAll) => {
        return (
            <Box className='title-line'>
                <text className='title'>{title}</text>
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
                    {insert_text("Highlight", "https://www.google.com")}
                    <Row cards={today} id={"block1"}/>
                </Box>
                
                <Box className="block">
                    {insert_text("Split", "https://www.google.com")}
                    <Row cards={today} id={"block2"}/>
                </Box>
                
            </Box>
            <Footer/>  
        </Box>
    )
};