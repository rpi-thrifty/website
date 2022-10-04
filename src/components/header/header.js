import * as React from 'react';
import { Box } from '@mui/system';
import "./header.css";

export const Header = () => {
    return(

        <Box className="bar">
            <a className="header-item" href='/about'>ABOUT</a>
            <a className="header-item" href='/'>HOME</a>
            <a className="header-item link" target="_blank" href='https://github.com/Thrifty'>GITHUB</a>
        </Box>
        
    )
}
