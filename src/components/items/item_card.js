import React from 'react'
import { Box } from '@mui/material'
import "./items.css"

export function Card(props) {
    return (
        <a href={props.url} className="link clickable-div">
            <Box>
                {/* image */}
                <Box className='img-block'>
                    <img className="item" src={props.img_path} alt={props.url}/>
                </Box>
                
                {/* text */}
                <Box className='img-text-block'>
                    {/* price here */}
                    <Box>
                        {
                            <text className='img-title'>
                                {props.price === "0" ? <>Free</> :<>${props.price}</>}
                            </text>
                        }
                    </Box>
                    {/* description here */}
                    <Box className='img-desc'>
                        <text>{props.desc}</text>
                    </Box>
                </Box>
            </Box>
        </a>
    )
}

export default Card