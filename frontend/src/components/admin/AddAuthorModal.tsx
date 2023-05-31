import { useState, useEffect } from "react"
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { User } from "../../types/user"
import { AdminProps } from "../../types/adminProps"
import { addAuthor } from "../../redux/reducers/authorReducer"
import { useNavigate } from "react-router-dom"

const AddAuthorModal: React.FC<AdminProps> = ({open, onClose}) => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)

    useEffect(() => {
        if (!isUserDataLoaded && user) {
            dispatch(getOwnProfile(user)).then((response) => {
                const userProfile = response.payload as User;
                dispatch(setUser(userProfile));

                setIsUserDataLoaded(true);
            });

            if (user?.roles && user.roles.includes("Admin")) {
                setIsUserAdmin(true)

            }
        }

    }, [dispatch, user, isUserDataLoaded]);

    const handleClose = () => {
        onClose()
        setFirstName("")
        setLastName("")
    }

    const createAuthor = () => {
        dispatch(addAuthor({
            firstName: firstName,
            lastName: lastName,
        }))

        onClose()

        navigate(`/authors`)

        setFirstName("")
        setLastName("")
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {isUserAdmin ?
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{
                            margin: " 0 auto",
                            marginTop: 20,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: "white",
                            maxWidth: 400,
                            padding: 5,
                            borderRadius: 5,
                        }}>
                        <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                            Add Author
                        </Typography>
                        <TextField
                            sx={{ marginTop: 1, minWidth: 300 }}
                            required
                            label="First name"
                            type="firstName"
                            value={firstName}
                            placeholder="Enter first name"
                            variant="standard"
                            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
                                event.stopPropagation();
                            }}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <TextField
                            sx={{ marginTop: 1, minWidth: 300 }}
                            required
                            label="Last name"
                            type="lastName"
                            value={lastName}
                            placeholder="Enter last name"
                            variant="standard"
                            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
                                event.stopPropagation();
                            }}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ marginTop: 2 }}
                            onClick={createAuthor}
                        >
                            Add Author
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ marginTop: 2 }}
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </Box>
                </Modal >
                : <p>Access denied</p>
            }
        </Box >
    )
}

export default AddAuthorModal