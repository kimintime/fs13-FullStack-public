import { Alert } from "@mui/material";
import { useAppSelector } from "../hooks/reduxHooks"
import { useEffect, useState } from "react";

const Notification = () => {
    const notification = useAppSelector(state => state.notifications);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (notification) {
            setShowAlert(true);
        }
    }, [notification]);

    if (!notification) {
        return null;
    }

    return (
        <div>
            {showAlert && (
                <Alert variant="filled" severity={notification.type} sx={{ width: "100%" }}>
                    {notification.message}
                </Alert>
            )}
        </div>
    )
}

export default Notification;
