import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

import "./footer.css";

export const Footer = () => {
  return(
    <>
      <Box bgcolor="#74423B" height={2} />
      <Box bgcolor="black" color="white" className="footer">
        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
          <Box mx={2} my={1}>
            <Link href="/" color="inherit">Home</Link>
          </Box>
          <Box mx={2} my={1}>
            <Link href="/about" color="inherit">About Us</Link>
          </Box>
          <Box mx={2} my={1}>
            <Link href="/contact" color="inherit">Contact Us</Link>
          </Box>
          <Box mx={2} my={1}>
            <Link href="/faqs" color="inherit">FAQs</Link>
          </Box>
          <Box mx={2} my={1}>
            <Link href="/terms" color="inherit">Terms of Use</Link>
          </Box>
          <Box mx={2} my={1}>
            <Link href="/privacy" color="inherit">Privacy Policy</Link>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" my={2}>
          <Box mx={2}>
            <Typography variant="body2">
              © 2023 Thrifty - an RCOS project
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

