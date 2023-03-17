import * as React from 'react';
import { Box } from '@mui/system';

import "./header.css";

export const Header = () => {
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
                <a className='header_link' href=''>Categories</a>
                <a className='header_link' href='https://github.com/rpi-thrifty'>Github</a>
                <a className='header_link' href='https://discord.gg/PFqRbcPq'>Discord</a>
            </Box>

            {/* right */}
            <Box>

            </Box>
            
        </Box>
        
    )
}
