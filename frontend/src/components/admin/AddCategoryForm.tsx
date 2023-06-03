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

import { useAppDispatch } from "../../hooks/reduxHooks"
import { addCategoryToBook, getBookById } from "../../redux/reducers/bookReducer"
import { Book } from "../../types/book"
import { AddCategoryFormProps } from "../../types/adminProps"
import { Category } from "../../types/category"
import { getCategoryById } from "../../redux/reducers/categoryReducer"

const AddCategoryForm = ({ selectedBook, selectedCategory }: AddCategoryFormProps) => {
    const dispatch = useAppDispatch()
    const [book, setBook] = useState({} as Book)
    const [category, setCategory] = useState({} as Category)
    
    useEffect(() => {
        if (selectedBook)
            dispatch(getBookById(selectedBook.id)).then((data) => {
                const bookItemData = data.payload
                setBook(bookItemData as Book)
            })

        if (selectedCategory)
            dispatch(getCategoryById(selectedCategory.id)).then((data) => {
                const categoryData = data.payload
                setCategory(categoryData as Category)
            })

    }, [dispatch, selectedBook, selectedCategory])

    const createCopy = () => {
        if (book && category)
        {
            dispatch(addCategoryToBook({
                id: book.id,
                addId: category.id
            }))

            clearForm()

        } else {
            alert("Please select both book and category.")
        }
    }

    const clearForm = () => {
        setBook({} as Book)
        setCategory({} as Category)
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
            <Typography variant="subtitle1">Add Category</Typography>
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
                                    <Typography variant="subtitle2">Book: </Typography>
                                </TableCell>
                                <TableCell>
                                    {book &&
                                        <Typography>{book.title}</Typography>
                                    }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Category:</Typography>
                                </TableCell>
                                <TableCell>
                                    {category &&
                                    <Typography>{category.name}</Typography>
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={createCopy}>Add Category to Book</Button>
            <Button color="error" onClick={clearForm}>Clear</Button>
            <Divider flexItem />
        </Box>
    )
}

export default AddCategoryForm