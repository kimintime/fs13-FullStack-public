import {Box } from "@mui/material"
import CopiesList from "../components/CopiesList";

const Copies = () => {

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",

        }}>
            <CopiesList />
        </Box>
    )
}

export default Copies