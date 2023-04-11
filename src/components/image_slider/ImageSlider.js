import React, { useState } from 'react';
import { Button, Box, Typography } from "@mui/material";

export const ImageSlider = ({ slides }) => {
    const[currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative",
    }

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "16px",
        fontSize: "75px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    }

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "16px",
        fontSize: "75px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <Box style = {sliderStyles}>
            <Box style = {leftArrowStyles} onClick = {goToPrevious}> ❮ </Box>
            <Box style = {rightArrowStyles} onClick = {goToNext}> ❯ </Box>
            <Box style = {slideStyles}> </Box>
        </Box>
    )
};