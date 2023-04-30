import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { AppBar, IconButton, Toolbar, Typography, Button, Badge } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';

import { useAppSelector } from "../hooks/reduxHooks";


const Header = () => {
    const navigate = useNavigate()

    const user = useAppSelector(state => state.user)
    const cart = useAppSelector(state => state.cart)

    const [badge, setBadge] = useState(0)

    const pages = [
        {
            nav: '/',
            name: 'Home'
        },
        {
            nav: 'cart',
            name: 'Cart',
        },
        {
            nav: 'profile',
            name: "Profile"
        }
    ]

    const handleBadge = () => {
        let sum = 0
        cart.forEach(item => {
            sum += item.amount
        })

        setBadge(sum)
    }

    useEffect(() => {
        handleBadge()
    })

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    onClick={() => navigate("/home")}
                >
                    Fake Library
                </Typography>
                {
                    pages.map(page => (
                        <NavLink key={page.nav} to={page.nav} style={{ textDecoration: 'none', color: 'white' }}>
                            <Button
                                color="inherit"
                                variant="text"
                                startIcon=
                                {
                                    (page.nav === "cart" && <Badge badgeContent={badge} color="success"><ShoppingCartOutlinedIcon /></Badge>) ||
                                    (page.nav === "/" && <HomeIcon />) ||
                                    (page.nav === "profile" && <AccountCircleOutlinedIcon />)
                                }
                            >
                                {page.name}
                            </Button>
                        </NavLink>
                    ))
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header