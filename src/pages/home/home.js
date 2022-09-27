import { Sidebar } from "../../components/sidebar";
import { Header } from "../../components/header";
import { Box, Button } from "@mui/material";
import "./home.css";

export const HomePage = () => {
    return (
        <Box sx = {{ display: "inline-block", position: "fixed"}}>
            <Header/>
            <Sidebar/>
        </Box>
    )
};