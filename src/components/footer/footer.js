import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import "./footer.css";

const Footer = () =>
{
  return(
    <Box className={"main-footer"}>
    
    {/* column 1 */}
      <Box className="column">
      <a className='footer_link' href='/home'>Home</a>
      </Box>  
      
    {/* column 2 */}
      <Box className="column">
      <a className='footer_link' href='/about'>About</a>
      </Box>

    {/* column 3 */}
      <Box className="column">
      <a className='footer_link' href='https://github.com/rpi-thrifty'>Github<GitHubIcon/></a> {/* links to github for now */}
      </Box>

    {/* column 4 */}
      <Box className="column">
      <a className='footer_link' href='https://discord.com/com/PFqRbcPq'>FAQ<LinkIcon/></a> {/* links to discord for now */}
      
      </Box>      
    {/* column 5 */}
      <Box className="column">
        
      </Box>
    
    </Box>
  )
}


export default Footer;