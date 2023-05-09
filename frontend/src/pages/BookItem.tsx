import { useParams } from "react-router-dom"
import { useAppDispatch } from "../hooks/reduxHooks"
import { useEffect, useState } from "react"
import { Book } from "../types/book";
import { CartItem } from "../types/cart";
import { addToCart } from "../redux/reducers/cartReducer";
import { getBookById } from "../redux/reducers/bookReducer";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

const BookItem = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const [bookItem, setBookItem] = useState({} as Book)
    const [addedToCart, setAddedToCart] = useState<string[]>([])

    useEffect(() => {
        if (id) {
            const bookId = parseInt(id)
            dispatch(getBookById(bookId)).then((data) => {
                const bookItemData = data.payload
                setBookItem(bookItemData as Book)
            })
        }

    }, [dispatch, id])

    console.log(bookItem.copies)

    const handleAddToCart = (bookItem: Book) => {
        const availableCopy = bookItem?.copies?.find((copy) => copy.isAvailable);

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
                author: bookItem?.authors?.map(author => `${author.firstName} ${author.lastName}`) || [],
                publisher: availableCopy.publisher,
                isAvailable: availableCopy.isAvailable,
                amount: 1,
            }

            dispatch(addToCart(cartItem))
            setAddedToCart(prevState => [...prevState, bookItem.id.toString()]);
            localStorage.setItem('cartItems', JSON.stringify([...cartItems, cartItem]));

        } else {

            alert("No available copies of this book")
        }
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" >
            <Grid container justifyContent="center" alignItems="center" maxWidth="md">
                <Grid item md={6} mr={10} mt={5}>
                    <Typography variant="h4" textAlign="center">{bookItem.title}</Typography>
                    <Typography variant="h6" textAlign="center">{bookItem.authors?.map(author => `${author.firstName} ${author.lastName}`).join(", ")}</Typography>
                    <Typography variant="subtitle1" mt={2} textAlign="center">{bookItem.publishers?.map(publisher => publisher.publisherName).join(", ")}</Typography>
                    <Divider variant="middle" />
                    <Typography variant="body1" mt={5}>{bookItem.description}</Typography>
                    <Typography variant="subtitle1" mt={5} textAlign="center">Categories: {bookItem.categories?.map(category => category.name).join(", ")}</Typography>
                    <Typography variant="subtitle2" mt={2} textAlign="center">
                        Copies Available: {bookItem.copiesAvailable}
                        {(bookItem.copiesAvailable !== null && bookItem.copiesAvailable >= 1) && (!addedToCart.includes(bookItem.id.toString())) ?
                            <Button
                                variant="contained"
                                color="success"
                                endIcon={<AddShoppingCartIcon />}
                                style={{ marginLeft: "10px" }}
                                onClick={() => handleAddToCart(bookItem)}
                            >
                                Add to Cart
                            </Button>
                            :
                            <Button
                                variant="contained"
                                
                                endIcon={<DoNotDisturbIcon />}
                                style={{ marginLeft: "10px" }}
                            >
                                Added to Cart
                            </Button>
                        }
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BookItem