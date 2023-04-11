import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () =>
{
  return(
    <Box className={"main-footer"}>
        <Box className="footer">
                {/* column 1 */}
                  <Box className="column">
                  
                  <h4> Customer Service</h4>
                  <a className='footer_link' href='/'>Home </a>
                  <a className='footer_link' href='/help'>Contact Us </a>
                  <a className='footer_link' href='/terms-of-service'>Terms of Service </a>
                  <a className='footer_link' href='/privacy-policy'>Privacy Policy </a>
                  <a className='footer_link' href='/cookie-policy'>Cookie Policy </a>
                  </Box>  
                  
                {/* column 2 */}
                  <Box className="column">
                  <h4> Inside Thrifty</h4>
                  <a className='footer_link' href='/about'>About us </a>
                  <a className='footer_link' href='/testing'>something1 </a>
                  <a className='footer_link' href='/testing'>something2 </a>
                  <a className='footer_link' href='/testing'>something3 </a>
                  <a className='footer_link' href='/testing'>something4 </a>

                  </Box>

                {/* column 3 */}
                  <Box className="column">
                  <h4> My Account</h4>
                  <a className='footer_link' href='/login'>Login <GitHubIcon/></a> {/* links to login for now */}
                  <a className='footer_link' href='/sign-up'>Sign up <GitHubIcon/></a> {/* links to sign-up for now */}
                  <a className='footer_link' href='/'>something1</a>
                  </Box>

                {/* column 4 */}
                  <Box className="column">
                  <h4> Top Searches</h4>
                  <a className='footer_link' href='https://discord.com/com/PFqRbcPq'>FAQ</a> {/* links to discord*/}
                  <a className='footer_link' href='/categories1'>category1</a>
                  <a className='footer_link' href='/categories1'>category2</a>
                  <a className='footer_link' href='/categories1'>category3</a>
                  </Box>   


                  <Box className="column"> {/*newsletter signup */}
                      <h4>Social Media</h4>
                      <p>
                        <GoogleIcon></GoogleIcon> <InstagramIcon></InstagramIcon> <FacebookIcon></FacebookIcon> <TwitterIcon> </TwitterIcon> <GitHubIcon></GitHubIcon>
                      </p>
                  </Box>
        </Box>  

        <Box className="bottom-part">
          <p>Thrifty &copy; An RCOS project</p>
        </Box>

 

    </Box>
  )
}

export default Footer;