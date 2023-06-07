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
    Typography
} from "@mui/material"

import { useAppDispatch } from "../../../hooks/reduxHooks"
import { getBookById } from "../../../redux/reducers/bookReducer"
import { Book } from "../../../types/book"
import { AddAuthorFormProps } from "../../../types/adminProps"
import { Author } from "../../../types/author"
import { addAuthorToBook } from "../../../redux/reducers/bookReducer"
import { getAuthorById } from "../../../redux/reducers/authorReducer"

const AddAuthorForm = ({ selectedBook, selectedAuthor, clearSelected }: AddAuthorFormProps) => {
    const dispatch = useAppDispatch()
    const [book, setBook] = useState({} as Book)
    const [author, setAuthor] = useState({} as Author)
    
    useEffect(() => {
        if (selectedBook)
            dispatch(getBookById(selectedBook.id)).then((data) => {
                const bookItemData = data.payload
                setBook(bookItemData as Book)
            })

        if (selectedAuthor)
            dispatch(getAuthorById(selectedAuthor.id)).then((data) => {
                const authorData = data.payload
                setAuthor(authorData as Author)
            })

    }, [dispatch, selectedBook, selectedAuthor])

    const createCopy = () => {
        if (book && author)
        {
            dispatch(addAuthorToBook({
                id: book.id,
                addId: author.id
            }))

            clearForm()

        } else {
            alert("Please select both book and author.")
        }
    }

    const clearForm = () => {
        setBook({} as Book)
        setAuthor({} as Author)
        clearSelected()
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
            }}
        >
            <Typography variant="subtitle1">Add Author</Typography>
            <Paper
                sx={{ marginTop: 5, p: 2 }}
                component="form"
            >
                <TableContainer>
                    <Table>
                        <TableHead />
                        <TableBody>
                            <TableRow>
                                <TableCell align="right">
                                    <Typography variant="subtitle2">Book: </Typography>
                                </TableCell>
                                <TableCell>
                                    {book &&
                                        <Typography>{book.title}</Typography>
                                    }
                                </TableCell>
                            </TableRow>
                            {book.authors && (
                                book.authors.map(author => (
                                    <TableRow key={author.id}>
                                        <TableCell>
                                            <Typography variant="subtitle2">Current Author: </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography>{author.firstName}{" "}{author.lastName}</Typography>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                            <TableRow>
                                <TableCell align="right">
                                    <Typography variant="subtitle2">Add Author:</Typography>
                                </TableCell>
                                <TableCell>
                                    {author &&
                                    <Typography>{author.firstName}{" "}{author.lastName}</Typography>
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={createCopy}>Add Author to Book</Button>
            <Button color="error" onClick={clearForm}>Clear</Button>
            <Divider flexItem />
        </Box>
    )
}

export default AddAuthorForm