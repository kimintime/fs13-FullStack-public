import { useState, useEffect } from "react"
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { getOwnProfile, setUser } from "../../redux/reducers/userReducer"
import { User } from "../../types/user"
import { AdminProps } from "../../types/adminProps"
import { addCategory } from "../../redux/reducers/categoryReducer"
import { useNavigate } from "react-router-dom"

const AddCategoryModal: React.FC<AdminProps> = ({open, onClose}) => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")
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
        setName("")
        setDescription("")
    }

    const createCategory = () => {
        dispatch(addCategory({
            name: name,
            description: description,
        }))

        onClose()
        navigate(`/categories`)

        setName("")
        setDescription("")
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
                            Add Category
                        </Typography>
                        <TextField
                            sx={{ marginTop: 1, minWidth: 300 }}
                            required
                            label="Name"
                            type="name"
                            value={name}
                            placeholder="Enter name"
                            variant="standard"
                            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
                                event.stopPropagation();
                            }}
                            onChange={(event) => setName(event.target.value)}
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
                            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
                                event.stopPropagation();
                            }}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ marginTop: 2 }}
                            onClick={createCategory}
                        >
                            Add Category
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

export default AddCategoryModal