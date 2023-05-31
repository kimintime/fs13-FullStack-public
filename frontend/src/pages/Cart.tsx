import React, { useEffect, useState } from "react";
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
import { CreateLoan } from "../types/loan";
import { CartItem } from "../types/cart";
import { User } from "../types/user";
import { addLoan, getOwnLoans } from "../redux/reducers/loanReducer";
import { NavLink } from "react-router-dom";
import { getOwnProfile, setUser } from "../redux/reducers/userReducer";


const Cart = () => {
    const cart = useAppSelector(state => state.cart)
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const [show, setShow] = useState(false)
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false)
    //const [username, setUsername] = useState(user?.userName || '')

    useEffect(() => {
        if (!isUserDataLoaded && user) {
            dispatch(getOwnProfile(user)).then((response) => {
                const userProfile = response.payload as User;
                dispatch(setUser(userProfile));
                setIsUserDataLoaded(true);
            });
        }
    }, [dispatch, user, isUserDataLoaded]);

    const cartList = Array.isArray(cart) ? cart : [];

    const total = cart.reduce((a, b) => a + b.amount, 0)

    const handleShow = () => {
        cartList.forEach(item => {
            if (item.amount > 0) {
                setShow(true)
            }
        })
    }

    const handleLoan = (cart: CartItem[], user: User) => {

        cartList.forEach(item => {
            const newLoan: CreateLoan = {
                copyId: item.id,
                userId: user.id
            }

            dispatch(addLoan(newLoan))
                .then(() => {
                    dispatch(removeFromCart(item));
                    setShow(false);
                    dispatch(getOwnLoans({
                        pagination: {
                            page: 1,
                            pageSize: 25
                        },
                        filter: null
                    }))
                })
        });
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
                                    <TableCell align="center">Remove Items</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cartList.map(item =>
                                    <TableRow key={item.id}>
                                        <TableCell align="left">{item.title}</TableCell>
                                        <TableCell align="left">
                                            {item.author.join(", ")}
                                        </TableCell>
                                        <TableCell align="center">{item.publisher.publisherName}</TableCell>
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
                                            <NavLink to={"/user/loans"}>
                                                <Button color="success" onClick={() => {
                                                    if (user) {
                                                        handleLoan(cart, user);
                                                    }
                                                }}
                                                >
                                                    Place order
                                                </Button>
                                            </NavLink>
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