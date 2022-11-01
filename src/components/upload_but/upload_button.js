import * as React from 'react'
import { Box, Button, Typography, TextField, MenuItem } from "@mui/material"
import { useState } from 'react'
import "./upload_button.css"



export const Upload_button = () => {

    const [upload, setUpload] = useState(false);

    const [category, setCategory] = useState(0);

    const changeCategory = (e) => {
        setCategory(e.target.value);
    };

    const categories = [
        {
            value: 0,
            label: "yes"
        },
        {
            value: 1,
            label: "bhe"
        },
        {
            value: 2,
            label: "jasdoi"
        }
    ]

    const text = (t) => {
        return(
            <Typography sx={{textTransform: "uppercase", marginBottom: "1vh"}}>{t}</Typography>
        )
    }

    const Category_dropdown = () => {
        return (
        <Box sx={{margin: "2vh"}}>
            {text("please select your category:")}
            {/* drop down menu */}
            <TextField
                select
                label="Select"
                onChange={changeCategory}
                value={category}
                helperText="Please select your category">
                    {/* loop to access values*/}
                    {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
            </TextField>
        </Box>
        )
    }

    const Title = () => {
        return (
        <Box sx={{margin: "2vh"}}>
            {text("please enter a title for your post:")}
            <TextField
                required
                label="Title"
                helperText="Please be specific!"
            />
            
        </Box>
        )
    }



    const text_box = () => {
        return (
        <Box className="submit_box">
            {/* category */}
            <Category_dropdown/>
            {/* title */}
            <Title/>

            <Box sx={{margin:"2vh"}}>

            </Box>
        </Box>
        )
    }

    const button = () => {
        return (
        <Button onClick={() => setUpload(!upload)}>
            <Box className="but">
                <a className="butText">Upload</a>
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