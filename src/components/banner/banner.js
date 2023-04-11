import React from "react"
import { Box } from "@mui/material"
import "./banner.css"

export const Banner = () => {
    return (
        <Box className="banner-main">
            <a href="www.google.com">
                <img src="thrifty_logos/NEW_Thrifty_Logo.png" className="banner-img"></img>
            </a>
        </Box>
    )
}