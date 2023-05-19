import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { Category } from "../types/category";
import { getAllCategories, sortByName } from "../redux/reducers/categoryReducer"
import SitePagination from "./SitePagination";

const CategoryList = () => {
    const categories = useAppSelector(state => state.category)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    useEffect(() => {
        dispatch(getAllCategories({ page: page, pageSize: pageSize }))
    }, [dispatch, page, pageSize])

    const categoryList = Array.isArray(categories) ? categories : [];

    const handleSortByName = () => {
        const actionType = sortOrder === "asc" ? "asc" : "desc";
        dispatch(sortByName(actionType));
        setSortOrder(actionType === "asc" ? "desc" : "asc");
    };

    return (
        <Grid container justifyContent="center" alignItems="center" marginTop={5}>
            <Grid item md={4}>
                <Typography variant="h6" textAlign="center">Categories</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" onClick={handleSortByName} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortOrder}>
                                        Name
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="center">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {categoryList.map((category: Category) =>
                                <TableRow
                                    key={category.id}
                                    sx={{ "cursor": "pointer", "&:hover": { backgroundColor: 'lightgray' } }}
                                    onClick={() => navigate(`/categories/${category.id}/books`)}
                                >
                                    <TableCell align="right">
                                        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                    </TableCell>
                                    <TableCell>{category.description}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Divider variant="middle" />
            </Grid>
            <Grid container justifyContent="center" alignItems="center" marginTop={5}>
                <Grid item md={3}>
                    <SitePagination
                        total={categoryList.length}
                        page={page}
                        pageSize={pageSize}
                        setPage={setPage}
                        setPageSize={setPageSize}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CategoryList;