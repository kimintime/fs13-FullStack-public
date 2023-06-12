import { useState, useEffect } from "react"
import {
    Box,
    Button,
    Divider,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    TextField,
    Tooltip,
    Typography
} from "@mui/material"

import { useAppDispatch } from "../../../hooks/reduxHooks"
import { EditAuthorFormProps } from "../../../types/adminProps"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Author } from "../../../types/author"
import { deleteAuthor, getAuthorById, updateAuthor } from "../../../redux/reducers/authorReducer"

const EditAuthorForm = ({ selectedAuthor, clearSelected }: EditAuthorFormProps) => {
    const dispatch = useAppDispatch()
    const [author, setAuthor] = useState<Author | null>(null);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    useEffect(() => {
        if (selectedAuthor)
            dispatch(getAuthorById(selectedAuthor.id)).then((data) => {
                const authorData = data.payload as Author
                setAuthor(authorData)
                setFirstName(authorData.firstName);
                setLastName(authorData.lastName);
            })

    }, [dispatch, selectedAuthor])

    const editAuthor = () => {
        if (author) {
            const updatedAuthor = {
                ...author,
                firstName: firstName,
                lastName: lastName
            }

            dispatch(updateAuthor(updatedAuthor))

            clearForm()
            setFirstName("")
            setLastName("")
        }
    }

    const removeAuthor = (author: Author) => {
        if (author)
            dispatch(deleteAuthor(author))

        clearForm()
    }

    const clearForm = () => {
        setAuthor(null)
        setFirstName("")
        setLastName("")
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
            <Typography variant="subtitle1">Edit Author</Typography>
            {author &&
                <Tooltip title="Delete Author">
                    <IconButton
                        sx={{
                            '&:hover': {
                                color: 'red',
                            },
                        }}
                        onClick={() => removeAuthor(author)}
                    >
                        <DeleteForeverIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            }
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
                                    {author &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="name"
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
                                    {author &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="name"
                                            value={lastName}
                                            variant="standard"
                                            onChange={(event) => setLastName(event.target.value)}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={editAuthor}>Update</Button>
            <Button color="error" onClick={clearForm}>Clear</Button>
            <Divider flexItem />
        </Box>
    )
}

export default EditAuthorForm