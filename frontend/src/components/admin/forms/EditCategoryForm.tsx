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
import { EditCategoryFormProps } from "../../../types/adminProps"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Category } from "../../../types/category";
import { deleteCategory, getCategoryById, updateCategory } from "../../../redux/reducers/categoryReducer";

const EditCategoryForm = ({ selectedCategory, clearSelected }: EditCategoryFormProps) => {
    const dispatch = useAppDispatch()
    const [category, setCategory] = useState<Category | null>(null);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    

    useEffect(() => {
        if (selectedCategory)
            dispatch(getCategoryById(selectedCategory.id)).then((data) => {
                const categoryData = data.payload as Category
                setCategory(categoryData)
                setName(categoryData.name);
                setDescription(categoryData.description);
            })

    }, [dispatch, selectedCategory])

    const editCategory = () => {
        if (category) {
            const updatedCategory = {
                ...category,
                name: name,
                description: description
            }

            dispatch(updateCategory(updatedCategory))

            clearForm()
            setName("")
            setDescription("")
        }
    }

    const removeCategory = (category: Category) => {
        if (category)
            dispatch(deleteCategory(category))

        clearForm()
    }

    const clearForm = () => {
        setCategory(null)
        setName("")
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
                marginTop: 5,
            }}
        >
            <Typography variant="subtitle1">Edit Category</Typography>
            {category &&
                <Tooltip title="Delete Category">
                    <IconButton
                        sx={{
                            '&:hover': {
                                color: 'red',
                            },
                        }}
                        onClick={() => removeCategory(category)}
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
                                    <Typography variant="subtitle2">Name: </Typography>
                                </TableCell>
                                <TableCell>
                                    {category &&
                                        <TextField
                                            sx={{ marginTop: 1, minWidth: 300 }}
                                            required
                                            type="name"
                                            value={name}
                                            variant="standard"
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Description: </Typography>
                                </TableCell>
                                <TableCell>
                                    {category &&
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
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={editCategory}>Update</Button>
            <Button color="error" onClick={clearForm}>Clear</Button>
            <Divider flexItem />
        </Box>
    )
}

export default EditCategoryForm