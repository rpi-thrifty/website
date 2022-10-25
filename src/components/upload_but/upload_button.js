import { Box, Button, Typography, TextField } from "@mui/material"
import React, { useState } from 'react'
import "./upload_button.css"



export const Upload_button = () => {

    const [upload, setUpload] = useState(false);

    const text_box = () => {
        return (
        <Box className="submit_box">
            <Box sx={{margin: "2vh"}}>
                <TextField></TextField>
                <TextField></TextField>
                <TextField></TextField>
                <TextField></TextField>
            </Box>
        </Box>
        )
    }

    const button = () => {
        return (
        <Button onClick={() => setUpload(!upload)}>
            <Box className="but">
                <Typography className="butText">Upload</Typography>
            </Box>
        </Button>
        )
    }
    

    return (
    <Box>
        {
            upload ?
            <>
            {button()}
            {text_box()}
            </>
            :
            <>
            {button()}
            </>
            
        }
    </Box>
    )
}