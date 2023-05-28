import { Box } from "@mui/material"
import AddCopyForm from "../components/admin/AddCopyForm"

const AddCopy = () => {

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
        }}>
            <AddCopyForm />
        </Box>
    )
}

export default AddCopy