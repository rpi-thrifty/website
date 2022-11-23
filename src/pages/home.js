import { Sidebar } from "../components/sidebar/sidebar";
import { Header } from "../components/header/header";
import { Box, Typography } from "@mui/material";
import { writeData, setData } from "../utilities/firebase";
import { Upload_button } from "../components/upload_but/upload_button";
import "./home.css"

export const HomePage = () => {

    class Item {
        constructor(price, desc, img_path, url) {
            this.price = price;
            this.desc = desc;
            this.img_path = img_path;
            this.url = url;
        }
    }

    // some definitions
    const it1 = new Item(12, "This this an example item", "images/logo.jpg", "https://www.google.com");
    const it2 = new Item(43, "This this an example item", "images/a2.jpg", "https://www.google.com");
    const it3 = new Item("free", "This this an example item", "images/a3.jpg", "https://www.google.com");
    const it4 = new Item(9230, "This this an example item", "images/a4.jpg", "https://www.google.com");
    const it5 = new Item(19923, "This this an example item", "images/a5.jpg", "https://www.google.com");
    const it6 = new Item(82, "This this an example item", "images/a6.jpg", "https://www.google.com");
    const it7 = new Item("free", "This this an example item", "images/a7.jpg", "https://www.google.com");


    const insert_image = (item_) => {
        return (
            <Box className="img-div">
                <a href={item_.url} className="link">
                    {/* image */}
                    <Box sx={{display: "flex", justifyContent: "center", marginTop: "1vh"}}>
                        <img className="item" src={item_.img_path}/>
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
                                {typeof item_.price == "number" ? <>$</> : <></>}
                                {item_.price}
                            </Typography>

                        }
                        
                        <Typography sx={{fontSize: "11px", fontFamily: "Helvetica Neue", lineHeight: "1"}}>{item_.desc}</Typography>
                    </Box>
                </a>
            </Box>
        )
    }

    const insert_text = (title, urlToAll) => {
        return (
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography sx={{fontSize: "25px"}} textTransform={"uppercase"}>{title}</Typography>
                <a className="link see_all" href={urlToAll}>See all</a>
            </Box>
        )
    }

    return (
        // outside box
        <Box>
            
            <Upload_button/>
            <Box><Sidebar/></Box>
            

            <Box className="main_div">
                <Header/>
                {/* block 1 */}
                <Box className="block">
                    {insert_text("today's picks", "https://www.google.com")}
                    {/* images for the block */}
                    <Box sx={{display: "flex", flexWrap: "wrap"}}>
                        <>{insert_image(it1)}</>
                        <>{insert_image(it2)}</>
                        <>{insert_image(it3)}</>
                        <>{insert_image(it4)}</>
                        <>{insert_image(it5)}</>
                    </Box>
                    <hr/>
                </Box>
                
                
                {/* blocks 2 */}
                <Box className="block">
                    {/* title of the block */}
                    {insert_text("discounted", "https://www.google.com")}
                    {/* images for the block */}
                    <Box sx={{display: "flex", flexWrap: "wrap"}}>
                        <>{insert_image(it3)}</>
                        <>{insert_image(it4)}</>
                    </Box>
                    <hr/>
                </Box>
                
                {/* blocks 2 */}
                <Box className="block">
                    {/* title of the block */}
                    {insert_text("miscellaneous", "https://www.google.com")}
                    {/* images for the block */}
                    {/* <Button onClick={writeData("thisisdescription", 20, {phone: "500", email: "wuj22"})}>hi</Button> */}
                    <Box sx={{display: "flex", flexWrap: "wrap"}}>
                        <>{insert_image(it6)}</>
                        <>{insert_image(it7)}</>
                    </Box>
                </Box>
                {/* add footer here */}
            </Box>  
        </Box>
    )
};