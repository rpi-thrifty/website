import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header/header";
import { Box, Button, Typography } from "@mui/material";
import "./home.css"

export const HomePage = () => {

    // some definitions
    const jose = "https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU"
    const muhammad = "https://media-exp1.licdn.com/dms/image/C4D03AQF37qOhWVsKxA/profile-displayphoto-shrink_800_800/0/1642638013594?e=1670457600&v=beta&t=9abbtlgwLakweVEnENpG16cEyU6hQW-R9lCpgtCj1-E"
    const adrian = "https://media-exp1.licdn.com/dms/image/C4E03AQERK42PhIDyzA/profile-displayphoto-shrink_800_800/0/1636426986476?e=1670457600&v=beta&t=i844v3lhApOK1MahjqP790O-zPbRnqJpsefdm082xjA"
    const stockIMG = "https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg"
    const sampleIMG = "../images/logo.jpg"

    // use this to insert an image
    const insert_image = (path_to_image, price, desc, url) => {
        return (
            <Box sx={{justifyContent: "center", borderRadius: "10px", backgroundColor: "#E4D6D4", width: "225px", height: "325px", margin: "10px 17.5px 10px 17.5px"}}>
                <a href={url} className="link">
                    {/* image */}
                    <Box sx={{display: "flex", justifyContent: "center", marginTop: "1vh"}}>
                        <img className="item" src={path_to_image}/>
                    </Box>
                    {/* text */}
                    <Box sx={{display: "block", width: "200px", height: "70px", margin: "10px 0 0 12.5px", overflow: "hidden"}}>
                        <Typography sx={{fontWeight: "bold", fontSize:"h6.fontSize", fontFamily: "Helvetica Neue", textTransform:"uppercase"}}>{price}</Typography>
                        <Typography sx={{fontSize: "11px", fontFamily: "Helvetica Neue", lineHeight: "1"}}>{desc}</Typography>
                    </Box>
                </a>
            </Box>
        )
    }

    return (
        // outside box
        <Box sx = {{
            display: "flex",
            justifyContent: "space-between",
            margin: "9vh 0 0 20vw"
        }}>
            <Box sx = {{
                width: "100vw", 
                left: "0",
                top: "0",
                height: "7vh", 
                backgroundColor: "#C8AFAB", 
                position: "fixed"
            }}>
                {/* sidebar */}
                <Box sx = {{ display: "inline-block", 
                    position: "fixed",
                    left: "1vw",
                    top: "8vh",
                    width: "18vw",}}>
                    <Sidebar/>
                </Box>

                {/* insert header behind sidebar */}
                <Header/>
            </Box>

            <Box sx={{ display: "block" } }>
                {/* block 1 */}
                <Box sx={{ display: "block", marginBottom: "50px"}}>
                    {/* title of the block */}
                    <Typography sx={{marginLeft: "10px"}} variant="h4" textTransform={"uppercase"}>Today's picks</Typography>
                    {/* images for the block */}
                    <Box sx={{display: "flex", flexWrap: "wrap"}}>
                        <>{insert_image(jose, "free", "first photo of Jose", "https://www.google.com")}</>
                        <>{insert_image(sampleIMG, "$20", "trying to link", "https://www.google.com")}</>
                        <>{insert_image(muhammad, "free", "this guy uses lots of useless acronyms", "https://www.google.com")}</>
                        <>{insert_image(adrian, "free", "LAPIS LUPIS", "https://www.google.com")}</>
                        <>{insert_image(stockIMG, "$890", "this is a sample stock image and I'm filling up more text to see how it holds upppppajsod jaiojdoiasjdoi jasiod jasoid jaiosdjoas jasoid jasioj diosajd oiasjdo imasoidm asoidj oiasjd oisja", "https://www.google.com")}</>
                    </Box>
                </Box>

                {/* blocks 2 */}
                <Box sx={{ display: "block", marginBottom: "50px"}}>
                    {/* title of the block */}
                    <Typography sx={{marginLeft: "10px"}} variant="h4" textTransform={"uppercase"}>recommended for you</Typography>
                    {/* images for the block */}
                    <Box sx={{display: "flex", flexWrap: "wrap"}}>
                        <>{insert_image(jose, "free", "this is a photo of Jose", "https://www.google.com")}</>
                        <>{insert_image(sampleIMG, "$10", "trying to link this image", "https://www.google.com")}</>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    )
};