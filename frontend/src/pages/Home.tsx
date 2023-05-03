import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardActions, CardMedia, Button, Typography, Grid, CardContent, Box, Divider, List, ListItem, ListItemText, IconButton } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { getAllBooks } from "../redux/reducers/bookReducer"
import { CartItem } from "../types/cart"
import { addToCart } from "../redux/reducers/cartReducer"
import { Copy } from "../types/copy";
import { ShoppingCart } from "@mui/icons-material";
import { Book } from "../types/book";

const Home = () => {
    const books = useAppSelector(state => state.book)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)

    useEffect(() => {
        dispatch(getAllBooks({ page: page, pageSize: pageSize }))
    }, [dispatch])

    const handleAddToCart = (book: Book) => {
        const availableCopy = book?.copies?.find((copy) => copy.isAvailable);

        if (availableCopy) {
            const cartItem: CartItem = {
                id: availableCopy.id,
                title: availableCopy.title,
                publisher: availableCopy.publisher,
                isAvailable: availableCopy.isAvailable,
                amount: 1
            }

            dispatch(addToCart(cartItem))

        } else {
            alert("No available copies of this book")
        }
    }

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",

        }}>
            <Typography variant="h2">Welcome to the Fake Library</Typography>
            <Typography variant="subtitle1">Where you can checkout anytime you like, but you can never read.</Typography>
            <Divider flexItem />
            <List sx={{ width: '75%', bgcolor: 'background.paper' }}>
                {books.map((book) => (
                    <ListItem key={book.id}>
                        <ListItemText
                            primary={book.title}
                            secondary={
                                book.authors?.map(author => (
                                    <Typography component="span" key={author.id} variant="body2" color="text.secondary">
                                        {author.firstName} {" "} {author.lastName}
                                    </Typography>
                                ))
                            }
                        />
                        <ListItemText
                            secondary={
                                <Typography variant="body2" color="text.secondary">
                                    Copies Available: {book.copiesAvailable}
                                </Typography>
                            }
                        />
                        {book.copiesAvailable !== null && book.copiesAvailable >= 1  ?
                            <Button
                                variant="outlined"
                                color="success"
                                endIcon={<AddShoppingCartIcon />}
                                style={{ marginLeft: "10px" }}
                                onClick={() => handleAddToCart(book)}
                            >
                                Add to Cart
                            </Button>
                            : <ListItemText>Not Available</ListItemText>
                        }
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default Home