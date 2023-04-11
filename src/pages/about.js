import React from 'react';
import { Header } from "../components/header/header";
import { Box, Button } from "@mui/material"
import "./about.css"
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export const AboutPage = () => {
    document.addEventListener("DOMContentLoaded", function(){
        observe('.description');
        observe('.a');
    });
    
    function observe(selector){
        const myElement = document.querySelector(selector);
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if(myElement.innerText.length < 20){
                    hackereffectslow(selector);
                    setTimeout(() => {
                        hackereffectslow('.b');
                    }, 750);
                    setTimeout(() => {
                        hackereffectslow('.c');
                    }, 1300);
                    setTimeout(() => {
                        hackereffectslow('.d');
                    }, 2300);
                    setTimeout(() => {
                        hackereffectslow('.e');
                    }, 3050);
                    observer.disconnect();
                }
                else{
                    hackereffectfast(selector);  
                    observer.disconnect();
                }  
            }
        });
        });
        observer.observe(myElement);
    }
    
    function hackereffectfast(selector){
            const target = document.querySelector(selector);
            if(target){
                let iterations = 0;
    
                const interval = setInterval(() => {
                    target.innerText = target.innerText.split("")
                    .map((letter, index) => {
                        if(target.dataset.value[index] == " "){
                            return target.dataset.value[index];
                        }
                        if(index < iterations){ 
                            return target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
    
                    if(iterations >= 550){
                        clearInterval(interval);
                        iterations = 0;
                    }
    
                    iterations += 1;
                }, 10);   
        }
    };
    
    function hackereffectslow(selector){
        const target = document.querySelector(selector);
        if(target){
            let iterations = 0;
    
            const interval = setInterval(() => {
                target.innerText = target.innerText.split("")
                .map((letter, index) => {
                    if(target.dataset.value[index] == " "){
                        return target.dataset.value[index];
                    }
                    if(index < iterations){ 
                        return target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("")
    
                if(iterations >= 550){
                    clearInterval(interval);
                    iterations = 0;
                }
    
                iterations += 1;
            }, 50);   
    }
    };
    
    return(
        <Box sx={{marginLeft:"2.55%"}}> 
            <Header/>
            <div class="parallax"/>
                <div class = "row " id = "sell-section">
                    <div class = "sell-section-left">
                        <img class="sell-image-left" src="/images/sell.jpg" alt="Sell"/>
                    </div>
                    <div class = "sell-section-right-wrapper">
                        <div class = "sell-section-right">
                            <h2 id="sell text"> Sell an Item! </h2>
                            <h4 data-value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis elit et vehicula ullamcorper. Nulla id metus scelerisque, vestibulum sem eu, feugiat ante.'class='selltext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis elit et vehicula ullamcorper. Nulla id metus scelerisque, vestibulum sem eu, feugiat ante.</h4>
                            <Button class="sell-button">Sell</Button>
                        </div>
                    </div>
                </div>
                <div class = "row" id = "buy-section">
                    <div class="buy-section-left-wrapper">
                        <div class = "buy-section-left">
                            <h2 id="buy text"> Buy an Item! </h2>
                            <h4 data-value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis elit et vehicula ullamcorper. Nulla id metus scelerisque, vestibulum sem eu, feugiat ante.'class='buytext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis elit et vehicula ullamcorper. Nulla id metus scelerisque, vestibulum sem eu, feugiat ante.</h4>
                            <Button class="buy-button">Buy</Button>
                        </div>
                    </div>
                    <div class ="buy-section-right">
                        <img class="buy-image-right" src="/images/buy.jpg" alt="Buy"/>
                    </div>
                </div>
                <div class = "row" id = "project-description">
                    <div class = "project-wrapper">
                    <h4 data-value = 'Welcome to Thrifty! We are an ecommerce website created to facilitate the many transactions made between RPI students annually. Our vision this year is to create a platform where students can post miscellaneous items and find interested buyers. This project creates a solution for graduating students who have extra school supplies and little storage space as well as freshmen with a tight budget. This allows freshmen to save money by buying second hand products at a discounted price, sort of like a permanent online garage sale.' class = 'description'>
                        Welcome to Thrifty! We are an ecommerce website created 
                        to facilitate the many transactions made between RPI students 
                        annually. Our vision this year is to create a 
                        platform where students can post miscellaneous 
                        items and find interested buyers. This project 
                        creates a solution for graduating 
                        students who have extra school supplies and little storage space
                        as well as freshmen with a tight budget. This allows freshmen to 
                        save money by buying second hand products at a discounted price, 
                        sort of like a permanent online garage sale.
                    </h4>
                    </div>
                </div>
                <div class = "row" id = "about-section">
                    <div id = "team-members-title-box">
                        <h1 id='team'>Meet The Team</h1>
                    </div>
                    <div id = "team-members">
                        <h5 data-value = 'Alex Rougebec' class = 'a'>AAAA AAAAAAAA</h5>
                        <h5 data-value = 'Jiawei Wu' class = 'b'> AAAAAA AA</h5>
                        <h5 data-value = 'Nikhil Belgaonkar' class = 'c'>AAAAAA AAAAAAAAAA</h5>
                        <h5 data-value = 'Jericho Dizon' class = 'd'>AAAAAAA AAAAA</h5>
                        <h5 data-value = 'Andrew Hua' class = 'e'>AAAAAA AAA</h5>
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
