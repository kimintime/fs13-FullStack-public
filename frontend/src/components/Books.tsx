import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { getAllBooks } from "../redux/reducers/bookReducer"
import { CartItem } from "../types/cart"
import { addToCart } from "../redux/reducers/cartReducer"
import { Book } from "../types/book";
import SitePagination from "./SitePagination";

const Books = () => {
    const books = useAppSelector(state => state.book)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    const [addedToCart, setAddedToCart] = useState<string[]>([])

    useEffect(() => {
        dispatch(getAllBooks({ page: page, pageSize: pageSize }))
    }, [dispatch, page, pageSize])

    const bookList = Array.isArray(books) ? books : [];

    const handleAddToCart = (book: Book) => {
        const availableCopy = book?.copies?.find((copy) => copy.isAvailable);

        const cartItems: CartItem[] = JSON.parse(localStorage.getItem("cartItems") || "[]");

        const isAlreadyAdded = cartItems.some((item) => item.id === availableCopy?.id);

        if (isAlreadyAdded) {
            alert("This book is already in your cart.");
            return;
        }

        if (availableCopy) {
            const cartItem: CartItem = {
                id: availableCopy.id,
                title: availableCopy.title,
                author: book?.authors?.map(author => `${author.firstName} ${author.lastName}`) || [],
                publisher: availableCopy.publisher,
                isAvailable: availableCopy.isAvailable,
                amount: 1,
            }

            dispatch(addToCart(cartItem))
            setAddedToCart(prevState => [...prevState, book.id.toString()]);
            localStorage.setItem('cartItems', JSON.stringify([...cartItems, cartItem]));

        } else {

            alert("No available copies of this book")
        }
    }

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
                                <TableCell align="right">Reserve</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookList.map((book: Book) =>
                                <TableRow key={book.id} sx={{ "cursor": "pointer", "&:hover": { backgroundColor: 'lightgray' } }}>
                                    <TableCell align="left" onClick={() => navigate(`/books/${book.id}`)}>
                                        {book.title}
                                    </TableCell>
                                    <TableCell onClick={() => navigate(`/books/${book.id}`)}>
                                            <Typography component="span" variant="subtitle2" color="text.secondary">
                                            {book.authors?.map(author => `${author.firstName} ${author.lastName}`).join(", ")}
                                            </Typography>
                                    </TableCell>
                                    <TableCell align="center" onClick={() => navigate(`/books/${book.id}`)}>{book.copiesAvailable}</TableCell>
                                    <TableCell align="right">
                                        {(book.copiesAvailable !== null && book.copiesAvailable >= 1) && (!addedToCart.includes(book.id.toString())) ?
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: 'lightblue',
                                                    },
                                                }}
                                                aria-label="Add to cart"
                                                onClick={() => handleAddToCart(book)}
                                            >
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                            :
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: 'lightblue',
                                                    },
                                                }}
                                                aria-label="Not available"
                                            >
                                                <DoNotDisturbIcon />
                                            </IconButton>
                                        }
                                    </TableCell>
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

export default Books;