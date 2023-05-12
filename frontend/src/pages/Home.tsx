
import { Typography, Box, Divider } from "@mui/material"
import Books from "../components/Books";
import Navbar from "../components/Navbar";

const Home = () => {

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",

        }}>
            <Typography variant="h2">Welcome to the Fake Library</Typography>
            <Typography variant="subtitle1">Where you can checkout anytime you like, but you can never read.</Typography>
            <Divider flexItem />
            <Navbar/>
            <Books />
        </Box>
    )
}

export default Home