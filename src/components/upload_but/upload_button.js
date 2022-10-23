import { Box, Typography } from "@mui/material"
import { useState } from "react"
import "./upload_button.css"

// const [upload, setUpload] = useState(false);

export const upload_button = () => {
    return <a href="https://www.google.come" className="hrefnohighlight">
        <div className="but">
            <a style={{marginTop: "3vh"}}>SUBMIT</a>
        </div>
    </a>
}