import { Box } from "@mui/material"
import CategoryList from "../components/CategoryList"

const Categories = () => {

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",

        }}
        >
            <CategoryList />
        </Box>
    )
}

export default Categories