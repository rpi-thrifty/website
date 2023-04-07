import React from 'react'
import { Box } from '@mui/material'
import "./items.css"

const Card = ( {content} ) => {
    return (
        <a href={content.url} className="link clickable-div">
            <Box>
                {/* image */}
                <Box className='img-block'>
                    <img className="item" src={content.img_path} alt={content.url}/>
                </Box>
                
                {/* text */}
                <Box className='img-text-block'>
                    {/* price here */}
                    <Box>
                        {
                            <text className='img-title'>
                                {content.price === "0" ? <>Free</> :<>${content.price}</>}
                            </text>
                        }
                    </Box>
                    {/* description here */}
                    <Box className='desc-box'>
                        <p className='desc-text' title={content.desc}>{content.desc}</p>
                    </Box>
                </Box>
            </Box>
        </a>
    )
}

export default Card;