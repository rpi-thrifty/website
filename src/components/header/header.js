import * as React from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
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
                    MenuListProps={{ style: { maxHeight: '50vh' } }}
                >
                    <MenuItem onClick={handleClose}>Category 1</MenuItem>
                    <MenuItem onClick={handleClose}>Category 2</MenuItem>
                    <MenuItem onClick={handleClose}>Category 3</MenuItem>
                </Menu>
                <a className='header_link' href='https://github.com/rpi-thrifty'>Github</a>
                <a className='header_link' href='https://discord.gg/PFqRbcPq'>Discord</a>
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