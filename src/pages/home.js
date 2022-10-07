import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header/header";
import { Box, Button, Typography } from "@mui/material";
import ITEM_ENTRY from "../components/entry";
import "./home.css"


export const HomePage = () => {

    const insert_image = (path_to_image) => {
        return (
            <Box sx={{justifyContent: "center", backgroundColor: "pink", margin: "10px"}}>
                <img className="item" src={path_to_image}/>
                <Typography variant="h6">$ FREE</Typography>
                <Typography variant="caption">Description</Typography>
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

            <Box sx={{ display: "flex", flexWrap: "wrap"} }>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>
                <>{insert_image("https://media-exp1.licdn.com/dms/image/D4E35AQEzMvlhzem4qg/profile-framedphoto-shrink_800_800/0/1664162625148?e=1665187200&v=beta&t=eNcqwqw9IGj097dQuwk5bBEuvESp3n0Qj1twSxGTNIU")}</>

            </Box>
            
        </Box>
    )
};