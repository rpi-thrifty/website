import React from 'react';
import { Header } from "../components/header/header";
import { Box, Button } from "@mui/material"
import "./about.css"


export const AboutPage = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

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
        <Box sx={{marginLeft:"2.5%"}}>
            <Header/>
            <div>
                Us.
            </div>
        </Box>
    )
}
