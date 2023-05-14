import { Box } from "@mui/material"
import PublisherList from "../components/PublisherList"

const Publishers = () => {

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",

        }}
        >
           <PublisherList />
        </Box>
    )
}

export default Publishers