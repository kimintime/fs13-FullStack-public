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
    Tooltip,
    Typography
} from "@mui/material"

import { useAppDispatch } from "../../../hooks/reduxHooks"
import { Book } from "../../../types/book"
import { Publisher } from "../../../types/publisher"
import { EditCopyFormProps } from "../../../types/adminProps"
import { getPublisherById } from "../../../redux/reducers/publisherReducer"
import { deleteCopy, getCopyById, updateCopy } from "../../../redux/reducers/copiesReducer"
import { Copy } from "../../../types/copy"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getBooksByTitle } from "../../../redux/reducers/bookReducer"

const EditCopyForm = ({ selectedPublisher, selectedCopy, clearSelected }: EditCopyFormProps) => {
    const dispatch = useAppDispatch()
    const [book, setBook] = useState<Book | null>(null)
    const [publisher, setPublisher] = useState<Publisher | null>(null)
    const [copy, setCopy] = useState<Copy | null>(null)
    
    useEffect(() => {
        if (selectedCopy) {
            dispatch(getCopyById(selectedCopy.id)).then((data) => {
                const copyItemData = data.payload as Copy;
                setCopy(copyItemData);
            });
        }

        if (selectedPublisher) {
            dispatch(getPublisherById(selectedPublisher.id)).then((publisherData) => {
                const publisher = publisherData.payload as Publisher;
                setPublisher(publisher);
            });
        }

    }, [dispatch, selectedCopy, selectedPublisher]);

    useEffect(() => {
        if (copy) {
            dispatch(getBooksByTitle(copy.title)).then((bookData) => {
                const books = bookData.payload as Book[];
                if (books.length > 0) {
                    setBook(books[0] as Book)
                }
            })
        }
    }, [dispatch, copy, book?.title])

    const clearForm = () => {

        clearSelected();
        clearStates();
    }

    const clearStates = () => {
        setBook(null)
        setCopy(null)
        setPublisher(null)
    }

    const editCopy = () => {
        if (copy) {
            if (book && publisher) {
                dispatch(updateCopy({
                    id: copy.id,
                    bookId: book.id,
                    publisherId: publisher.id
                }))

                clearForm()

            } else {
                alert("Please select both book and publisher.")
            }
        }
    }

    const removeCopy = (copy: Copy) => {
        if (copy)
            dispatch(deleteCopy(copy))

        clearForm()
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
            <Typography variant="subtitle1">Edit Copy</Typography>
            {copy &&
                <Tooltip title="Delete Copy">
                    <IconButton
                        sx={{
                            '&:hover': {
                                color: 'red',
                            },
                        }}
                        onClick={() => removeCopy(copy)}
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
                                <TableCell align="right">
                                    <Typography variant="subtitle2">Title: </Typography>
                                </TableCell>
                                <TableCell>
                                    {copy &&  (
                                        <Typography>{copy.title}</Typography>
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    <Typography variant="subtitle2">Current Publisher: </Typography>
                                </TableCell>
                                <TableCell>
                                    {copy?.publisher && (
                                        <Typography>{copy.publisher.publisherName}</Typography>
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    <Typography variant="subtitle2">New Publisher: </Typography>
                                </TableCell>
                                <TableCell>
                                    {publisher && (
                                        <Typography>{publisher.publisherName}</Typography>
                                    )}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={editCopy}>Update Copy</Button>
            <Button color="error" onClick={clearForm}>Clear</Button>
            <Divider flexItem />
        </Box>
    )
}

export default EditCopyForm