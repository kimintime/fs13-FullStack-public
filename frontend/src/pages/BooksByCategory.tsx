import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Typography, Grid, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, TableSortLabel } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { CartItem } from "../types/cart"
import { addToCart } from "../redux/reducers/cartReducer"
import { Book } from "../types/book";
import { getBooksByCategory, sortByCopies, sortByName, sortByTitle } from "../redux/reducers/bookReducer";


const BooksByCategory = () => {
    const books = useAppSelector(state => state.book)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const [addedToCart, setAddedToCart] = useState<string[]>([])
    const [sortOrderTitle, setSortOrderTitle] = useState<"asc" | "desc">("asc")
    const [sortOrderName, setSortOrderName] = useState<"asc" | "desc">("asc")
    const [sortOrderAvailable, setSortOrderAvailable] = useState<"asc" | "desc">("asc")

    useEffect(() => {
        if (id) {
            const categoryId = parseInt(id)
            dispatch(getBooksByCategory(categoryId))
        }
    }, [dispatch, id])

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

    const handleSortByTitle = () => {
        const actionType = sortOrderTitle === "asc" ? "asc" : "desc";
        dispatch(sortByTitle(actionType));
        setSortOrderTitle(actionType === "asc" ? "desc" : "asc");
    };

    const handleSortByName = () => {
        const actionType = sortOrderName === "asc" ? "asc" : "desc";
        dispatch(sortByName(actionType));
        setSortOrderName(actionType === "asc" ? "desc" : "asc");
    };

    const handleSortByAvailable = () => {
        const actionType = sortOrderAvailable === "asc" ? "asc" : "desc";
        dispatch(sortByCopies(actionType));
        setSortOrderAvailable(actionType === "asc" ? "desc" : "asc");
    };

    return (
        <Grid container justifyContent="center" alignItems="center" marginTop={5}>
            <Grid item md={8}>
                <Typography variant="h6" textAlign="center">Books by Category</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell onClick={handleSortByTitle} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortOrderTitle}>
                                        Title
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="left" onClick={handleSortByName} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortOrderName}>
                                        Author
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="center" onClick={handleSortByAvailable} style={{ cursor: "pointer" }}>
                                    <TableSortLabel active={true} direction={sortOrderAvailable}>
                                        Copies
                                    </TableSortLabel>
                                </TableCell>
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
                                        {book.authors?.map(author => `${author.firstName} ${author.lastName}`).join(", ")}
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
        </Grid>
    )
}

export default BooksByCategory;