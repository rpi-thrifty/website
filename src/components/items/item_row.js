import React, { useRef, useLayoutEffect, useState } from "react"
import { Box } from "@mui/material";
import RenderCard from "./render_card";
import "./item_row.css"

const Row = ( {cards, id} ) => {
    const boxRef = useRef(null);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        setWidth(boxRef.current.offsetWidth);
    }, []);
    
    return (
        <Box ref={boxRef} id={id} className="img-row">
            <RenderCard cards={cards} containerWidth={width}/>
        </Box>
    )
    
}

export default Row;