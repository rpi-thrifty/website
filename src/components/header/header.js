import * as React from 'react';
import { Box } from '@mui/system';
// import {logoLong} from "/images/logoLong.jpg";
import "./header.css";

export const Header = () => {
    return(

        <Box className="bar">
            {/* left side */}
            <div>
                
                <a href='/' className='header-logo'>
                    <div className='hl_bg'>
                        <img src={process.env.PUBLIC_URL + 'images/logo_transparent.png'} className="header-logo the-logo" title='Home page'/>
                    </div>
                </a>
            </div>

            {/* right side */}
            <div className='right-group header-text'>
                <a className='header_link' href='/about'>About</a>
                <a className='header_link' href='https://github.com/rpi-thrifty'>Github</a>
                <a className='header_link' href='https://discord.gg/PFqRbcPq'>Discord</a>
            </div>
        </Box>
        
    )
}
