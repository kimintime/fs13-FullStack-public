import { CssBaseline } from "@mui/material"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Notifications from "../components/Notifications"
import { useAppDispatch } from "../hooks/reduxHooks"
import { useEffect } from "react"
import { addNotification } from "../redux/reducers/notificationReducer"

const Root = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(addNotification(
            {
                message: "To test Admin features, login as admin@mail.com, password: admin123.", 
                timeInSec: 60, 
                type: "warning"
            }
        ))

    }, [dispatch])

    return (
        <CssBaseline>
            <Header />
            <Outlet/>
            <Notifications />
        </CssBaseline>
    )
}

export default Root