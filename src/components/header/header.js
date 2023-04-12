import * as React from 'react';
import { Box } from '@mui/material';

import "./header.css";
import "../../default.css"

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
                    <a className='default_but' href='/about'>About</a>
                    <a className="dropdown">
                        <button className="dropbtn default_but">Categories</button>
                        <div className="dropdown-content">
                            <a href="/categories/electronics">Electronics</a>
                            <a href="/categories/clothing">Clothing</a>
                            <a href="/categories/furniture">Furniture</a>
                            <a href="/categories/miscellaneous">Miscellaneous</a>
                        </div>
                    </a>
                    <a className='default_but' href='https://github.com/rpi-thrifty'>Github</a>
                    <a className='default_but' href='https://discord.gg/PFqRbcPq'>Discord</a>
                </Box>
                
            </Box>

            {/* right (search bar) */}
            <Box className='group search-form' marginRight={"10vw"}> {/* might change margins */}
            <a className='default_but' href='/submit'>Sell</a>
                <form onSubmit={handleSearch}>
                    <input type="text" name="searchInput" placeholder="Search..." className="search-input" />
                </form>
            </Box>

        </Box>
    )
}
