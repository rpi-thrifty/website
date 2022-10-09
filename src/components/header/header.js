import * as React from 'react';
import { Box } from '@mui/system';
// import {logoLong} from "/images/logoLong.jpg";
import "./header.css";

export const Header = () => {
    return(

        <Box className="bar">
            <a className="header-item" href='/about'>ABOUT</a>
            <a className="" href='/'><img src={process.env.PUBLIC_URL + 'images/logoH.jpg'} className="header-logo"/> </a>
            <a className="header-item link" target="_blank" href='https://github.com/rpi-thrifty'>GITHUB</a>
        </Box>
        
    )
}
