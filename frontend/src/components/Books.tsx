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

const Books = () => {
    const books = useAppSelector(state => state.book)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    const [addedToCart, setAddedToCart] = useState<number[]>([]);

    useEffect(() => {
        dispatch(getAllBooks({ page: page, pageSize: pageSize }))
    }, [dispatch, page, pageSize])

    const handleAddToCart = (book: Book) => {
        const availableCopy = book?.copies?.find((copy) => copy.isAvailable);

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
            setAddedToCart([...addedToCart, book.id])

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
                                {books.map(book =>
                                    <TableRow key={book.id}>
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
                                        <TableCell align="right">
                                            {(book.copiesAvailable !== null && book.copiesAvailable >= 1) && (!addedToCart.includes(book.id)) ?
                                                <IconButton
                                                    aria-label="Add to cart"
                                                    onClick={() => handleAddToCart(book)}
                                                >
                                                    <AddShoppingCartIcon />
                                                </IconButton>
                                                :
                                                <IconButton
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
            </Grid>
    )
}

export default Books;