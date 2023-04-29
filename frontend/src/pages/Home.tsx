import { Box, Typography } from "@mui/material"


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
        </Box>
    )
}

export default Home;