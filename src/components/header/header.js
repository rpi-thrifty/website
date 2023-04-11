import * as React from 'react';
import { Box } from '@mui/material';

import "./header.css";

export const Header = () => {

    const handleSearch = (event) => { 
        event.preventDefault();
        const searchInput = event.target.elements.searchInput.value;
        window.location.href = `/search/${searchInput}`;
    }

    return(
        <Box className="bar">
            {/* left */}
            <Box className='group' marginLeft={"20vw"}>
                <a href='/' className='header-logo'>
                    <img src={process.env.PUBLIC_URL + 'images/logo_transparent.png'} className="header-logo the-logo" title='Home_page' alt=""/>
                </a>
                <Box className='header-text'>
                    <a className='header_link' href='/about'>About</a>
                    <a className='header_link' href=''>Categories</a>
                    <a className='header_link' href='https://github.com/rpi-thrifty'>Github</a>
                    <a className='header_link' href='https://discord.gg/PFqRbcPq'>Discord</a>
                </Box>
                
            </Box>

            {/* right (search bar) */}
            <Box className='group search-form' marginRight={"10vw"}> {/* might change margins */}
                <form onSubmit={handleSearch}>
                    <input type="text" name="searchInput" placeholder="Search..." className="search-input" />
                </form>
            </Box>

        </Box>
    )
}
