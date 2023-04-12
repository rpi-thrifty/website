import React from "react"
import { Box } from "@mui/material"
import "./banner.css"

export const Banner = () => {
    return (
        <Box className="banner-main">
            <a href="/" className="banner-img">
                <img src="thrifty_logos/NEW_Thrifty_Logo.png" alt="banner of Thrifty"/>
            </a>
        </Box>
    )
}