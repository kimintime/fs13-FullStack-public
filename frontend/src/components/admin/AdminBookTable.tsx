import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { getAllBooks } from "../../redux/reducers/bookReducer"
import { Book } from "../../types/book";
import SitePagination from "../SitePagination";

const AdminBookTable = () => {
    const books = useAppSelector(state => state.book)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)

    useEffect(() => {
        dispatch(getAllBooks({ page: page, pageSize: pageSize }))
    }, [dispatch, page, pageSize])

    const bookList = Array.isArray(books) ? books : [];

    return (
        <Grid container justifyContent="center" alignItems="center" marginTop={5}>
            <Grid item md={8}>
                <Typography variant="h6" textAlign="center">Books</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Book</TableCell>
                                <TableCell align="left">Author</TableCell>
                                <TableCell align="center">Copies</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookList.map((book: Book) =>
                                <TableRow key={book.id} sx={{ "cursor": "pointer", "&:hover": { backgroundColor: 'lightgray' } }}>
                                    <TableCell align="left" onClick={() => navigate(`/books/${book.id}`)}>
                                        {book.title}
                                    </TableCell>
                                    <TableCell onClick={() => navigate(`/books/${book.id}`)}>
                                        {book.authors?.map(author => (
                                            <Typography component="span" key={author.id} variant="subtitle2" color="text.secondary">
                                                {author.firstName} {" "} {author.lastName}
                                            </Typography>
                                        ))
                                        }
                                    </TableCell>
                                    <TableCell align="center" onClick={() => navigate(`/books/${book.id}`)}>{book.copiesAvailable}</TableCell>
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
                        total={bookList.length}
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

export default AdminBookTable;