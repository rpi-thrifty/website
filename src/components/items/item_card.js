import React from 'react'

function Card(props) {
    return (
        <Box className="img-div">
            <a href={props.url} className="link">
                {/* image */}
                <Box sx={{display: "flex", justifyContent: "center", marginTop: "1vh"}}>
                    <img className="item" src={props.img_path}/>
                </Box>
                {/* text */}
                <Box sx={{display: "block", width: "200px", height: "70px", margin: "10px 0 0 12.5px", overflow: "hidden"}}>
                    {
                        <Typography sx={{
                            fontWeight: "bold", 
                            fontSize:"h6.fontSize", 
                            fontFamily: "Helvetica Neue", 
                            textTransform:"uppercase"
                        }}>
                            {typeof props.price == 0 ? <>${props.price}</> : <>FREE</>}
                        </Typography>
                    }
                    <Typography sx={{fontSize: "11px", fontFamily: "Helvetica Neue", lineHeight: "1"}}>{props.desc}</Typography>
                </Box>
            </a>
        </Box>
    )
}

export default Card