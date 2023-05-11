import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { AppBar, IconButton, Toolbar, Typography, Button, Badge, Menu, MenuItem, ListItemIcon, ListItemText, Divider, Box } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import StyleIcon from '@mui/icons-material/Style';
import BusinessIcon from '@mui/icons-material/Business';

import { useAppSelector } from "../hooks/reduxHooks";
import React from "react";


const Header = () => {
    //const navigate = useNavigate()
    //const user = useAppSelector(state => state.user)
    const cart = useAppSelector(state => state.cart)
    const [badge, setBadge] = useState(0)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const pages = [
        {
            nav: '/',
            name: "Home"
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

    const menuPages = [
        {
            nav: 'categories',
            name: "Browse Categories"
        },
        {
            nav: 'authors',
            name: "Browse Authors",
        },
        {
            nav: 'publishers',
            name: "Browse Publishers",
        },
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
                <Box display='flex' flexGrow={1}>
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
                    >
                        Fake Library
                    </Typography>
                    <Button
                        color="inherit"
                        variant="text"
                        size="large"
                        aria-label="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        startIcon={<MenuBookIcon />}
                        sx={{ml: 2}}
                        
                    >
                        Menu
                    </Button>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        menuPages.map(page => (
                            <NavLink key={page.nav} to={page.nav} style={{ textDecoration: 'none', color: 'black' }}>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        {
                                            (page.nav === "categories" && <StyleIcon fontSize="small" />) ||
                                            (page.nav === "authors" && <LocalLibraryIcon fontSize="small" />) ||
                                            (page.nav === "publishers" && <BusinessIcon fontSize="small" />)
                                        }
                                    </ListItemIcon>
                                    <ListItemText>{page.name}</ListItemText>
                                </MenuItem>
                            </NavLink>
                        ))
                    }

                </Menu>
                {
                    pages.map(page => (
                        <NavLink key={page.nav} to={page.nav} style={{ textDecoration: 'none', color: 'white' }}>
                            <Button
                                color="inherit"
                                variant="text"
                                startIcon=
                                {
                                    (page.nav === "/" && <HomeIcon fontSize="small" />) ||
                                    (page.nav === "cart" && <Badge badgeContent={badge} color="success"><ShoppingCartOutlinedIcon /></Badge>) ||
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