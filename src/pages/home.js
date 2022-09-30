import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header";
import { Box, Button, Typography, borderRadius, Avatar } from "@mui/material";
import ITEM_ENTRY from "../components/entry";


export const HomePage = () => {

    const insert_image = (path_to_image) => {
        return (
            <Box sx={{justifyContent: "center", backgroundColor: "pink", margin: "5px 10px 5px 10px"}}>
                <Typography variant="h6">SAMPLE ITEMSSSSS</Typography>
                <img src={path_to_image} width="300" height="300"/>
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
                backgroundColor: "#E4D6D4", 
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
                <Box>
                    <Typography> text for sidebar goes here </Typography>
                </Box>
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