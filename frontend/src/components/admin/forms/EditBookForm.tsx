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
import { deleteBook, getBookById, removeAuthorFromBook, removeCategoryFromBook, updateBook } from "../../../redux/reducers/bookReducer"
import { Book } from "../../../types/book"
import { EditBookFormProps } from "../../../types/adminProps"
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const EditBookForm = ({ selectedBook, clearSelected }: EditBookFormProps) => {
    const dispatch = useAppDispatch()
    const [book, setBook] = useState<Book | null>(null);
    const [title, setTitle] = useState("")
    const [isAuthorId, setIsAuthorId] = useState(0)
    const [isCategoryId, setIsCategoryId] = useState(0)
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (selectedBook)
            dispatch(getBookById(selectedBook.id)).then((data) => {
                const bookItemData = data.payload as Book
                setBook(bookItemData)
                setTitle(bookItemData.title);
                setDescription(bookItemData.description || "");
            })

    }, [dispatch, selectedBook])

    const editBook = () => {
        if (book) {
            const updatedBook = {
                ...book,
                title: title,
                description: description
            }

            dispatch(updateBook(updatedBook))

            clearForm()
            setTitle("")
            setDescription("")
        }
    }

    const deleteCategory = (categoryId: number) => {
        setIsCategoryId(categoryId)

        if (book)
            dispatch(removeCategoryFromBook({ id: book.id, addId: categoryId }))
        //clearForm()
    }

    const deleteAuthor = (authorId: number) => {
        setIsAuthorId(authorId)

        if (book)
            dispatch(removeAuthorFromBook({ id: book.id, addId: authorId }))
        // clearForm()
    }

    const removeBook = (book: Book) => {
        if (book)
            dispatch(deleteBook(book))

        clearForm()
    }

    const clearForm = () => {
        setBook(null)
        setTitle("")
        setDescription("")
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
            <Typography variant="subtitle1">Edit Book</Typography>
            {book &&
                <Tooltip title="Delete Book">
                    <IconButton
                        sx={{
                            '&:hover': {
                                color: 'red',
                            },
                        }}
                        onClick={() => removeBook(book)}
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
                                    <Typography variant="subtitle2">Title: </Typography>
                                </TableCell>
                                <TableCell>
                                    {book &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="title"
                                            value={title}
                                            variant="standard"
                                            onChange={(event) => setTitle(event.target.value)}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Description: </Typography>
                                </TableCell>
                                <TableCell>
                                    {book &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="description"
                                            value={description}
                                            variant="standard"
                                            multiline
                                            rows={4}
                                            onChange={(event) => setDescription(event.target.value)}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                            {book && (book.authors?.map(author => (
                                <>
                                    {isAuthorId !== author.id &&
                                        <TableRow key={author.id}>
                                            <TableCell>
                                                <Typography variant="subtitle2">Author: </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography>{author.firstName}{" "}{author.lastName}</Typography>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton
                                                    sx={{
                                                        '&:hover': {
                                                            color: 'red',
                                                        },
                                                    }}
                                                    onClick={() => deleteAuthor(author.id)}>
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    }
                                </>
                            )))}
                            {book && (book.categories?.map(category => (
                                <>
                                    {isCategoryId !== category.id &&
                                        <TableRow key={category.id} >
                                            <TableCell>
                                                <Typography variant="subtitle2">Category: </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography>{category.name}</Typography>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton
                                                    sx={{
                                                        '&:hover': {
                                                            color: 'red',
                                                        },
                                                    }}
                                                    onClick={() => deleteCategory(category.id)}>
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    }
                                </>
                            )))}
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={editBook}>Update</Button>
            <Button color="error" onClick={clearForm}>Clear</Button>
            <Divider flexItem />
        </Box>
    )
}

export default EditBookForm