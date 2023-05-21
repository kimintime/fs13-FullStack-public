import { Alert, IconButton } from "@mui/material";
import { useAppSelector } from "../hooks/reduxHooks"
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

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
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10
            }}>
            {showAlert && (
                <Alert
                    variant="filled" severity={notification.type}
                    sx={{

                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 5
                    }}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setShowAlert(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {notification.message}
                </Alert>
            )}
        </div>
    )
}

export default Notification;
