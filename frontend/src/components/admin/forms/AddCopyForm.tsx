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
import { Publisher } from "../../../types/publisher"
import { AddCopyFormProps } from "../../../types/adminProps"
import { getPublisherById } from "../../../redux/reducers/publisherReducer"
import { addCopy } from "../../../redux/reducers/copiesReducer"

const AddCopyForm = ({ selectedBook, selectedPublisher, clearSelected }: AddCopyFormProps) => {
    const dispatch = useAppDispatch()
    const [book, setBook] = useState({} as Book)
    const [publisher, setPublisher] = useState({} as Publisher)
    
    useEffect(() => {
        if (selectedBook)
            dispatch(getBookById(selectedBook.id)).then((data) => {
                const bookItemData = data.payload
                setBook(bookItemData as Book)
            })

        if (selectedPublisher)
            dispatch(getPublisherById(selectedPublisher.id)).then((data) => {
                const publisherData = data.payload
                setPublisher(publisherData as Publisher)
            })
    }, [dispatch, selectedBook, selectedPublisher])

    const createCopy = () => {
        if (book && publisher)
        {
            dispatch(addCopy({
                bookId: book.id,
                publisherId: publisher.id
            }))

            clearForm()

        } else {
            alert("Please select both book and publisher.")
        }
    }

    const clearForm = () => {
        setBook({} as Book)
        setPublisher({} as Publisher)
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
            <Typography variant="subtitle1">Add Copy</Typography>
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
                            {book.publishers && (
                                book.publishers.map(publisher => (
                                    <TableRow key={publisher.id}>
                                        <TableCell>
                                            <Typography variant="subtitle2">Current Publisher: </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography>{publisher.publisherName}</Typography>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                            <TableRow>
                                <TableCell align="right">
                                    <Typography variant="subtitle2">Add Publisher:</Typography>
                                </TableCell>
                                <TableCell>
                                    {publisher &&
                                    <Typography>{publisher.publisherName}</Typography>
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={createCopy}>Add Copy</Button>
            <Button color="error" onClick={clearForm}>Clear</Button>
            <Divider flexItem />
        </Box>
    )
}

export default AddCopyForm