import * as React from 'react'
import { Box, Button, Typography, TextField, MenuItem, FormControl, InputLabel, OutlinedInput } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react'
import "./upload_button.css"
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';


export const UPLOAD_BUTTON = () => {

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
            label: "Furniture"
        },
        {
            value: 3,
            label: "Miscellaneous"
        }
    ]

    const text = (t) => {
        return(
            <Typography sx={{textTransform: "capitalize", marginBottom: "1vh", fontWeight: 'bold'}}>{t}</Typography>
        )
    }

    const CATEGORY_DROPDOWN = () => {
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
    // -------------------- USER INFORMATION --------------------
    const NAME = () => {
        return (
            <Box sx={{margin: "2vh", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Box>
                    {text("first name:")}
                    <FormControl halfWidth>
                        <InputLabel>optional</InputLabel>
                        <OutlinedInput label="optional" id='first_name'/>
                    </FormControl>
                </Box>
                <Box>
                    {text("last name:")}
                    <FormControl halfWidth>
                        <InputLabel>optional</InputLabel>
                        <OutlinedInput label="optional" id='last_name'/>
                    </FormControl>
                </Box>
            </Box>
        )
    }

    const CONTACT = () => {
        return (
            <Box sx={{margin: "2vh", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Box>
                    {text("email:")}
                    <FormControl halfWidth>
                        <InputLabel>required*</InputLabel>
                        <OutlinedInput label="required*" id='email'/>
                    </FormControl>
                </Box>
                <Box>
                    {text("phone number:")}
                    <FormControl halfWidth>
                        <InputLabel>optional</InputLabel>
                        <OutlinedInput label="optional" id='phone'/>
                    </FormControl>
                </Box>
            </Box>
        )
    }
    // -------------------- ITEM INFORMATION --------------------
    const TITLE = () => {
        return (
        <Box sx={{margin: "2vh"}}>
            {text("Title:")}
            <FormControl fullWidth>
                <InputLabel>required*</InputLabel>
                <OutlinedInput label="required*" id='input_title'/>
            </FormControl>
        </Box>
        )
    }

    const PRICE_QUANTITY = () => {
        return (
            <Box sx={{margin: "2vh", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Box>
                    {text("price (0 if free):")}
                    <FormControl halfWidth>
                        <InputLabel>required*</InputLabel>
                        <OutlinedInput label="required*" 
                            startAdornment=
                                {<InputAdornment position="start">$</InputAdornment>} 
                            type="number"
                            id='input_price'
                            defaultValue={0}
                        />
                    </FormControl>
                </Box>

                <Box>
                    {text("quantity:")}
                    <FormControl halfWidth>
                        <InputLabel>required*</InputLabel>
                        <OutlinedInput label="required*" 
                            type="number"
                            id='quantity'
                            defaultValue={0}
                        />
                    </FormControl>
                </Box>
            </Box>
        
        )
    }

    const DESCRIPTION = () => {
        return (
        <Box sx={{margin: "2vh"}}>
            {text("Description:")}
            <TextField
                label="optional"
                id='input_description'
                multiline
                fullWidth
                minRows={4}
            />
        </Box>
        )
    }

    const SUBMIT = () => {
        return (
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Button>
                    <Box className="but_inside">
                        <a className="but_inside_text" href="/submitfield">submit</a>
                    </Box>
                </Button>
            </Box>
        )
    }

    const text_box = () => {
        return (
        <Box className="submit_box">
            <CATEGORY_DROPDOWN/>
            {/* -------------------USER------------------- */}
            <Typography align="center"> USER INFORMATION </Typography>
            <hr className='bold_black'/>
            <NAME/>
            <CONTACT/>
            {/* -------------------ITEM------------------- */}
            <Typography align="center"> ITEM INFORMATION </Typography>
            <hr className='bold_black'/>
            <TITLE/>
            <PRICE_QUANTITY/>
            <DESCRIPTION/>
            <SUBMIT/>

            <Box sx={{margin:"2vh"}}>

            </Box>
        </Box>
        )
    }

    const button = (button_text) => {
        return (
        <Button onClick={() => setUpload(!upload)}>            
            <Collapse orientation="horizontal" in={upload} collapsedSize={40}>
                <Box className="but">
                    <text className="butText">{button_text}</text>
                    {upload
                        ? <CloseFullscreenOutlinedIcon className='butText'/>
                        : <SellOutlinedIcon className='butText'/>
                    }
                </Box>
            </Collapse>
        </Button>
        )
    }

    const obscure_background = () => {
        return (
            <div className='black_bg' onClick={() => setUpload(!upload)}/>
        )
    }
    

    return (
    <Box>
        {
            upload ?
            <>
            {obscure_background()}
            {button('collapse')}
            {text_box()}
            </>
            :
            <>
            {button("Sell")}
            </>
        }
    </Box>
    )
}