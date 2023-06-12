import { useState, useEffect } from "react"
import {
    Box,
    Button,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material"

import { useAppDispatch } from "../../../hooks/reduxHooks"
import { EditUserFormProps } from "../../../types/adminProps"
import { User } from "../../../types/user"
import { getUserById, updateUser } from "../../../redux/reducers/userReducer"

const EditUserForm = ({ selectedUser, clearSelected }: EditUserFormProps) => {
    const dispatch = useAppDispatch()
    const [user, setUser] = useState<User | null>(null);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        if (selectedUser)
            dispatch(getUserById(selectedUser.id)).then((data) => {
                const userItemData = data.payload as User
                setUser(userItemData)
                setFirstName(userItemData.firstName)
                setLastName(userItemData.lastName)
                setUsername(userItemData.userName)
                setEmail(userItemData.email)
            })

    }, [dispatch, selectedUser])

    const editUser = () => {
        if (user) {
            const updatedUser = {
                ...user,
                firstName: firstName,
                lastName: lastName,
                userName: username,
                email: email
            }

            dispatch(updateUser(updatedUser))

            clearForm()
        }
    }

    const clearForm = () => {
        setUser(null)
        setFirstName("")
        setLastName("")
        setUsername("")
        setEmail("")
        clearSelected()
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
            }}
        >
            <Typography variant="subtitle1">Edit User</Typography>
            <Paper
                sx={{ marginTop: 5, p: 2 }}
                component="form"
            >
                <TableContainer>
                    <Table>
                        <TableHead />
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">First Name: </Typography>
                                </TableCell>
                                <TableCell>
                                    {user &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="firstname"
                                            value={firstName}
                                            variant="standard"
                                            onChange={(event) => setFirstName(event.target.value)}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Last Name: </Typography>
                                </TableCell>
                                <TableCell>
                                    {user &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="lastname"
                                            value={lastName}
                                            variant="standard"
                                            onChange={(event) => setLastName(event.target.value)}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Username: </Typography>
                                </TableCell>
                                <TableCell>
                                    {user &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="username"
                                            value={username}
                                            variant="standard"
                                            onChange={(event) => setUsername(event.target.value)}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Email: </Typography>
                                </TableCell>
                                <TableCell>
                                    {user &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="email"
                                            value={email}
                                            variant="standard"
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={editUser}>Update</Button>
            <Button color="error" onClick={clearForm}>Clear</Button>
            <Divider flexItem />
        </Box>
    )
}

export default EditUserForm