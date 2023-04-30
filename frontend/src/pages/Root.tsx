import { CssBaseline } from "@mui/material"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Root = () => {
    return (
        <CssBaseline>
            <Header />
            <Outlet/>
        </CssBaseline>
    )
}

export default Root