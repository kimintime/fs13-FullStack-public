import { CssBaseline } from "@mui/material"
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <CssBaseline>
            <Outlet/>
        </CssBaseline>
    )
}

export default Root