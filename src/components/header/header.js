import * as React from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

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
            <Box>
                <a href='/' className='header-logo'>
                    <img src={process.env.PUBLIC_URL + 'images/logo_transparent.png'} className="header-logo the-logo" title='Home_page' alt=""/>
                </a>
            </Box>

            {/* middle */}
            <Box className='group header-text'>
                <a className='header_link' href='/about'>About</a>
                <a className='header_link' href='#' onMouseOver={handleClick}>Categories</a>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onMouseLeave={handleClose}>Category 1</MenuItem>
                    <MenuItem onMouseLeave={handleClose}>Category 2</MenuItem>
                    <MenuItem onMouseLeave={handleClose}>Category 3</MenuItem>
                </Menu>
                <a className='header_link' href='https://github.com/rpi-thrifty'>Github</a>
                <a className='header_link' href='https://discord.gg/PFqRbcPq'>Discord</a>
            </Box>

            {/* right */}
            <Box>

            </Box>
            
        </Box>
    )
}