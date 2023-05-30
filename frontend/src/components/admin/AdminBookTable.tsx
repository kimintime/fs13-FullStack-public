import { useEffect, useState } from "react"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { getAllBooks } from "../../redux/reducers/bookReducer"
import { Book } from "../../types/book";
import SitePagination from "../SitePagination";
import SearchBar from "../SearchBar"
import { AdminBookTableProps } from "../../types/adminProps"

const AdminBookTable = ({ onBookSelection }: AdminBookTableProps) => {
    const books = useAppSelector(state => state.book)
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    useEffect(() => {
        dispatch(getAllBooks({ page, pageSize }));
    }, [dispatch, page, pageSize])

    const handleBookSelection = (book: Book) => {
        setSelectedBook(book);
        onBookSelection(book)
    };

    const bookList = Array.isArray(books) ? books : [];

    return (
        <Grid container justifyContent="center" alignItems="center" marginTop={5}>
            <Grid item md={8}>
                <SearchBar />
            </Grid>
            <Grid item md={8} marginBottom={2}>
                <Divider variant="middle" />
            </Grid>
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
                                <TableRow
                                    key={book.id}
                                    sx={{
                                        cursor: "pointer",
                                        "&:hover": { backgroundColor: 'lightgray' },
                                        backgroundColor: book === selectedBook ? 'lightgray' : 'transparent'
                                    }}
                                    onClick={() => handleBookSelection(book)}
                                >
                                    <TableCell align="left">
                                        {book.title}
                                    </TableCell>
                                    <TableCell>
                                        {book.authors?.map(author => (
                                            <Typography component="span" key={author.id} variant="subtitle2" color="text.secondary">
                                                {author.firstName} {" "} {author.lastName}
                                            </Typography>
                                        ))
                                        }
                                    </TableCell>
                                    <TableCell align="center">{book.copiesAvailable}</TableCell>
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
                        total={books.length}
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