import React from 'react';
import { Header } from "../components/header/header";
import { Box, Typography } from "@mui/material";
import { ImageSlider } from "../components/image_slider/ImageSlider"
import "./itempage.css"

export const ItemPage = () => {

    const insert_itemName = (text) => {
        return (
            <Box>
                <Typography sx = {{wordBreak: "break-word", fontSize: "50px", fontWeight: "bold", fontFamily: "Comfortaa"}}> {text} </Typography>
            </Box>
        )
    }

    const insert_itemPrice = (text) => {
        return (
            <Box>
                <Typography sx = {{wordBreak: "break-word", fontSize: "30px", fontWeight: "bold", fontStyle: "italic", fontFamily: "Comfortaa"}}> {text} </Typography>
            </Box>
        )
    }

    const insert_itemDesc = (text) => {
        return (
            <Box sx = {{display: "block"}}>
                <Typography sx = {{wordBreak: "break-word", fontSize: "20px", fontWeight: "bold", fontFamily: "Comfortaa"}}> About This Item </Typography>
                <Typography sx = {{wordBreak: "break-word", fontSize: "15px"}}> {text} </Typography>
            </Box>
        )
    }

    const insert_itemContact = (text) => {
        return (
            <Box sx = {{display: "block"}}>
                <Typography sx = {{wordBreak: "break-word", fontSize: "20px", fontWeight: "bold", fontFamily: "Comfortaa"}}> Seller Contact Info </Typography>
                <Typography sx = {{wordBreak: "break-word", fontSize: "15px"}}> {text} </Typography>
            </Box>
        )
    }

    const slides = [ 
        {url: "images/item1/item1_1.jpg", title: "item1_img1"},
        {url: "images/item1/item1_2.jpg", title: "item1_img2"},
        {url: "images/item1/item1_3.jpg", title: "item1_img3"},
        {url: "images/item1/item1_4.jpg", title: "item1_img4"}
    ]

    return(
        <Box sx = {{ marginTop: "9vh"}}>
            <Header/>

            <Box className = "left">
                {/* <img className = "preview_img" src = {it4.img_path} alt = "Item_Name"/> */}
                <ImageSlider slides = {slides}/>
            </Box>

            <Box className = "right">
                {insert_itemName("Item_Name")}
                {insert_itemPrice("$Item_Price")}
                {insert_itemDesc("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At varius vel pharetra vel turpis nunc eget lorem dolor. Dictum non consectetur a erat. Nec sagittis aliquam malesuada bibendum arcu. Et netus et malesuada fames ac turpis egestas. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Egestas quis ipsum suspendisse ultrices gravida dictum. Vulputate odio ut enim blandit volutpat. Id neque aliquam vestibulum morbi. Proin sagittis nisl rhoncus mattis rhoncus. At auctor urna nunc id cursus metus aliquam eleifend. Id semper risus in hendrerit gravida rutrum quisque non. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Ultrices neque ornare aenean euismod elementum nisi quis. Leo integer malesuada nunc vel risus commodo. Morbi tristique senectus et netus et malesuada fames. Sit amet dictum sit amet justo donec enim diam vulputate. Justo nec ultrices dui sapien eget mi proin sed. \n Risus ultricies tristique nulla aliquet. In cursus turpis massa tincidunt dui ut ornare. Pellentesque elit eget gravida cum sociis. Arcu ac tortor dignissim convallis aenean et tortor. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Tempor id eu nisl nunc mi ipsum. Sit amet mattis vulputate enim nulla aliquet porttitor. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Auctor urna nunc id cursus metus. Faucibus et molestie ac feugiat sed lectus vestibulum. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Ornare aenean euismod elementum nisi quis eleifend quam. Vitae proin sagittis nisl rhoncus. Orci nulla pellentesque dignissim enim sit. Tellus elementum sagittis vitae et leo duis ut. Facilisi nullam vehicula ipsum a arcu cursus. Arcu non sodales neque sodales ut etiam sit amet nisl.")}
                <br></br>
                {insert_itemContact("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc aliquet bibendum enim facilisis gravida neque convallis. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Elit at imperdiet dui accumsan sit. Ultrices sagittis orci a scelerisque purus. Id faucibus nisl tincidunt eget nullam non nisi est sit. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Enim tortor at auctor urna nunc. Sed viverra tellus in hac habitasse platea dictumst. Proin sed libero enim sed faucibus turpis in eu mi. Etiam erat velit scelerisque in. Ut tristique et egestas quis ipsum suspendisse. Imperdiet sed euismod nisi porta lorem mollis. Enim facilisis gravida neque convallis a cras. Sed odio morbi quis commodo. Vel fringilla est ullamcorper eget nulla facilisi etiam. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Pellentesque habitant morbi tristique senectus et netus. Eget magna fermentum iaculis eu non diam phasellus. Donec enim diam vulputate ut pharetra sit amet aliquam.")}
            </Box>  
        </Box>
    )
    
}