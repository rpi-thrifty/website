import React from 'react';
import { Header } from "../components/header/header";
import { Box, Button } from "@mui/material"
import "./about.css"

export const AboutPage = () => {
    return(
        <Box sx={{marginLeft:"2.55%"}}> 
            <Header/>
            
            <div class = "row " id = "sell-section">
                <div class = "sell-section-left">
                    <img class="sell-image-left" src="/images/sell.jpg" alt="Sell"/>
                </div>
                <div class = "sell-section-right-wrapper">
                    <div class = "sell-section-right">
                        <h2 id="sell text"> Sell an Item! </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis elit et vehicula ullamcorper. Nulla id metus scelerisque, vestibulum sem eu, feugiat ante.</p>
                        <Button class="sell-button">Sell</Button>
                    </div>
                </div>
            </div>
            <div class = "row" id = "buy-section">
                <div class="buy-section-left-wrapper">
                    <div class = "buy-section-left">
                        <h2 id="buy text"> Buy an Item! </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis elit et vehicula ullamcorper. Nulla id metus scelerisque, vestibulum sem eu, feugiat ante.</p>
                        <Button class="buy-button">Buy</Button>
                    </div>
                </div>
                <div class ="buy-section-right">
                    <img class="buy-image-right" src="/images/buy.jpg" alt="Buy"/>
                </div>
            </div>
            <div class = "row" id = "project-description">
                <div class = "project-wrapper">
                <p><b>  Welcome to Thrifty! We are an ecommerce website created 
                    to facilitate the many transactions made between RPI students 
                    annually. Our vision this year is to create a 
                    platform where students can post miscellaneous 
                    items and find interested buyers. This project 
                    creates a solution for graduating 
                    students who have extra school supplies and little storage space
                    as well as freshmen with a tight budget. This allows freshmen to 
                    save money by buying second hand products at a discounted price, 
                    sort of like a permanent online garage sale.
                </b></p>
                </div>
            </div>
            <div class = "row" id = "about-section">
                <div class = "members-box">
                    <h3 id="team-members-title">Team Members: </h3>
                    <ul>
                        <li>Alex Rougebec</li>
                        <li>Jiawei Wu</li>
                        <li>Nikhil Belgaonkar</li>
                        <li>Jericho Dizon</li>
                        <li>Andrew Hua</li>
                    </ul>
                </div>
                <div class="contact-wrapper">
                    <div class = "contact-box">
                        <a href = "https://github.com/rpi-thrifty/website">
                            <img class="aboutimg" src="/images/GitHub-Mark.png" alt="github"/>
                        </a>
                        <a href = "https://google.com">
                            <img class="aboutimg" src="/images/discord.png" alt="discord"/>
                        </a>
                    </div>
                </div>
            </div>
        </Box>
            
    )
}

/*
circle image
keep aspect ratio
enlarge image to half the page
make 3-4 lines of custom text with a title
make background white

*/