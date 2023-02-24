import * as React from 'react'
import { Box, Button, Typography, TextField, MenuItem, FormControl, InputLabel, OutlinedInput } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react'
import "./upload_button.css"
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import axios from 'axios';


export const UPLOAD_BUTTON = () => {
    // -------------------- HTTP REQ --------------------


    const [upload, setUpload] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [category, setCategory] = useState(0);

    // functions to retrieve value
    const getUserInfo = () => {
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        var data = [firstName, lastName, email, phone]

        // post data in the backend
        axios.post('localhost:3002/api/array', { data })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        return data
    }

    const getItemInfo = async () => {
        const title = document.getElementById('item_title').value;
        const price = document.getElementById('item_price').value;
        const quantity = document.getElementById('item_quantity').value;
        const description = document.getElementById('item_description').value;

        var data = [title, price, quantity, description]
        // wait for post to be done and then return the new data
        // frontend hostname add it to the list of whitelist/blacklist (accepted domains) -> if in that list, accept a request for it
        // post data in the backend
        console.log(data)
        try{
            let axiospost = await axios.post('localhost:3002/api/array', { data });
            return axiospost;
        }catch(e){
            console.error(e);
        }
        return "failed"
        
            // .then(response => {
            //     console.log(response.data);
            // })
            // .catch(error => {
            //     console.error(error);
            // });
        // return data
    }

    const changeCategory = (e) => {
        setCategory(e.target.value);
    };

    const categories = [
        {
            value: 0,
            label: "None"
        },
        {
            value: 1,
            label: "Electronics"
        },
        {
            value: 2,
            label: "Clothing"
        },
        {
            value: 3,
            label: "Furniture"
        },
        {
            value: 4,
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
            {text("category:")}
            {/* drop down menu */}
            <TextField
                select
                label="required"
                onChange={changeCategory}
                value={category}
                required
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
                <OutlinedInput label="required*" id='item_title'/>
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
                            id='item_price'
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
                            id='item_quantity'
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
                id='item_description'
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
                <Button onClick={() => setSubmitted(true)}>
                    <Box className="but_inside">
                        <text className="but_inside_text">submit</text>
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
            <Box sx={{marginBottom: "2vh"}}>
                {submitted ?
                    <Box>
                        <Typography className="textSubmitted">status: submitted</Typography>
                        <Button onClick={() => getUserInfo()}>Click to get User Info (console.log)</Button>
                        <Button onClick={() => getItemInfo()}>Click to get Item Info (console.log)</Button>
                    </Box>
                    :
                    <Typography className="textNotSubmitted">status: not submitted</Typography>
                }
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

