import * as React from 'react';
import { Box } from '@mui/system';
import "./header.css";

export const Header = () => {
    return(

        <Box className="bar">
            <div className="header-item">ABOUT</div>
            <div className="header-item">HOME</div>
            <div className="header-item">GITHUB</div>
        </Box>
        
    )
}
