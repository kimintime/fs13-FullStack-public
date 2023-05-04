import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { removeFromCart, emptyCart } from "../redux/reducers/cartReducer";


const Cart = () => {
    const cart = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const [show, setShow] = useState(false)

    const total = cart.reduce((a, b) => a + b.amount, 0)

    const handleShow = () => {
        cart.forEach(item => {
            if (item.amount > 0) {
                setShow(true)
            }
        })
    }

    useEffect(() => {
        handleShow()
    })

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "15px"
        }}
        >
            <Grid container justifyContent="center" alignItems="center">
                <Grid item md={8}>
                    <Typography textAlign="center">Checkout</Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Book</TableCell>
                                    <TableCell align="center">Author</TableCell>
                                    <TableCell align="center">Publisher</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Remove Items</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map(item =>
                                    <TableRow key={item.id}>
                                        <TableCell align="left">{item.title}</TableCell>
                                        <TableCell align="left">
                                            {item.author.join(", ")}
                                        </TableCell>
                                        <TableCell align="center">{item.publisher.publisherName.toString()}</TableCell>
                                        <TableCell align="center">{item.amount}</TableCell>
                                        <TableCell align="center">
                                            <IconButton onClick={() => dispatch(removeFromCart(item))}>
                                                <RemoveCircleOutlineIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell align="center">{total} items</TableCell>
                                    <TableCell align="center">
                                        {show ?
                                            <Button color="success">Place order</Button>
                                            : null
                                        }
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                    <Divider variant="middle" />
                </Grid>
            </Grid>
            {show ?
                <Button color="warning" onClick={() => dispatch(emptyCart())}>Empty Cart</Button>
                : null
            }
        </Box>
    )
}

export default Cart