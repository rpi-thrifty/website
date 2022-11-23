import * as React from 'react'
import { Box, Button, Typography, TextField, MenuItem, FormControl, InputLabel, OutlinedInput } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
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
            label: "Electronics"
        },
        {
            value: 1,
            label: "Clothing"
        },
        {
            value: 2,
            label: "Miscellaneous"
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
            <FormControl fullWidth>
                <InputLabel>Title</InputLabel>
                <OutlinedInput label="title"/>
            </FormControl>
            
        </Box>
        )
    }

    const Price = () => {
        return (
        <Box sx={{margin: "2vh"}}>
            {text("price you are willing to sell for:")}
            <FormControl fullWidth>
                <InputLabel>Price</InputLabel>
                <OutlinedInput label="Price" startAdornment={<InputAdornment position="start">$</InputAdornment>}/>
            </FormControl>
            
        </Box>
        )
    }

    const Description = () => {
        return (
        <Box sx={{margin: "2vh"}}>
            {text("describe your product")}
            <TextField
                label="Description"
                multiline
                fullWidth
                minRows={4}
            />
        </Box>
        )
    }

    const Submit = () => {
        return (
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Button>
                    <Box className="but_inside">
                        <a className="but_inside_text">submit</a>
                    </Box>
                </Button>
            </Box>
        )
    }

    const text_box = () => {
        return (
        <Box className="submit_box">
            <Category_dropdown/>
            <Title/>
            <Price/>
            <Description/>
            <Submit/>

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