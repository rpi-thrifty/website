import { React, useState} from 'react';
import { SIDEBAR } from "../components/sidebar/sidebar";
import { Header } from "../components/header/header";
import { Box } from "@mui/material"

export const ItemPage = () => {

    const [leftMargin, setLeftMargin] = useState("17vw");
    const [mainWidth, setMainWidth] = useState("82vw");
    const handleShift = (value) => {
        // console.log("LeftMargin before:" + leftMargin);
        setLeftMargin(value);
        // console.log("value: " + value + "\nLeftMargin after:" + leftMargin + "\n-\n");

        if(leftMargin === "17vw")
            setMainWidth("93vw");
        else
            setMainWidth("82vw");
    };

    return(
        
        <Box className='everything'>
            <Box><SIDEBAR handleShift={handleShift}/></Box>
            <Box className="main_div" sx={{marginLeft: leftMargin, width: mainWidth}}>
                <Header/>
            </Box>
        </Box>
        
        
    )
}