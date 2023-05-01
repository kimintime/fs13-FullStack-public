import { CssBaseline } from "@mui/material"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Notifications from "../components/Notifications"

const Root = () => {
    return (
        <CssBaseline>
            <Header />
            <Outlet/>
            <Notifications />
        </CssBaseline>
    )
}

export default Root