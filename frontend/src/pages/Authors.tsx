import { Box } from "@mui/material"
import AuthorList from "../components/AuthorList"

const Authors = () => {

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",

        }}
        >
          <AuthorList />
        </Box>
    )
}

export default Authors