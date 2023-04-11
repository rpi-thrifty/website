import * as React from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';

import "./header.css";


export const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return(
        <Box className="bar">
            {/* left */}
            <Box className='group' marginLeft={"20vw"}>
                <a href='/' className='header-logo'>
                    <img src={process.env.PUBLIC_URL + 'thrifty_logos/NEW_Thrifty_Mini_Logo.png'} className="header-logo the-logo" title='Home_page' alt=""/>
                </a>
                <Box className='header-text'>
                    <a className='header_link' href='/about'>About</a>
                    <a className="dropdown">
                        <button className="dropbtn">Categories</button>
                        <div className="dropdown-content">
                            <a href="#">Electronics</a>
                            <a href="#">Clothing</a>
                            <a href="#">Furniture</a>
                            <a href="#">Miscellaneous</a>
                        </div>
                    </a>
                    <a className='header_link' href='https://github.com/rpi-thrifty'>Github</a>
                    <a className='header_link' href='https://discord.gg/PFqRbcPq'>Discord</a>
                </Box>
                
            </Box>

            {/* right */}
            <Box className='group' marginRight={"20vw"}>
                <Box className="header-text">
                    <LoginIcon/>
                </Box>
            </Box>
        </Box>
    )
}