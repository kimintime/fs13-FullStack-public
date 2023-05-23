import { useState, useEffect } from "react"
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { addBook } from "../../redux/reducers/bookReducer"
import { User } from "../../types/user"
import { AdminProps } from "../../types/adminProps"

const AddBookModal: React.FC<AdminProps> = ({open, onClose}) => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
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
    }

    const createBook = () => {
        dispatch(addBook({
            title: title,
            description: description,
        }))

        onClose()
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
                            Add Book
                        </Typography>
                        <TextField
                            sx={{ marginTop: 1, minWidth: 300 }}
                            required
                            label="Title"
                            type="title"
                            value={title}
                            placeholder="Enter title"
                            variant="standard"
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <TextField
                            sx={{ marginTop: 1, minWidth: 300 }}
                            required
                            label="Description"
                            type="description"
                            value={description}
                            placeholder="Enter description"
                            variant="standard"
                            multiline
                            rows={4}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ marginTop: 2 }}
                            onClick={createBook}
                        >
                            Add Book
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

export default AddBookModal