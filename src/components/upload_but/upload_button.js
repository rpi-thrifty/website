import { Box, Typography } from "@mui/material"
import { useState } from "react"
import "./upload_button.css"

// const [upload, setUpload] = useState(false);

export const upload_button = () => {
    return <a href="https://www.google.com" className="hrefnohighlight">
        <Box className="but">
            <Typography sx={{margin: "auto", textAlign: "center", fontSize: "30px"}}>Upload</Typography>
        </Box>
    </a>
}