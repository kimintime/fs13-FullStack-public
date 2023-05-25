import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import { AppBar, IconButton, Toolbar, Typography, Button, Badge, Menu, MenuItem, ListItemIcon, ListItemText, Box } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import StyleIcon from '@mui/icons-material/Style';
import BusinessIcon from '@mui/icons-material/Business';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import React from "react";
import AdminDrawer from "./admin/AdminDrawer";
import { getOwnProfile, setUser } from "../redux/reducers/userReducer";
import { User } from "../types/user";

const Header = () => {
    //const navigate = useNavigate()
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const cart = useAppSelector(state => state.cart)
    const [badge, setBadge] = useState(0)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        if (!isUserDataLoaded && user) {
            dispatch(getOwnProfile(user)).then((response) => {
                const userProfile = response.payload as User;
                dispatch(setUser(userProfile));

                setIsUserDataLoaded(true);
            });

            if (user?.roles && user.roles.includes("Admin")) {
                setIsUserAdmin(true)
    
            }
        } 

    }, [dispatch, user, isUserDataLoaded]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };

    const handleToggleDrawer = () => {
        setIsDrawerOpen((prevState) => !prevState);
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
            nav: 'user/profile',
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
        {
            nav: 'copies',
            name: "Browse Copies",
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
                    {isUserAdmin && (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleOpenDrawer}
                        >
                            {isDrawerOpen ? <MenuOpenIcon /> : <MenuIcon />}
                        </IconButton>
                    )}
                    {isUserAdmin && (
                        <AdminDrawer open={isDrawerOpen} onClose={handleToggleDrawer} />
                    )}
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
                        sx={{ ml: 2 }}
                    >
                        Books
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
                                            (page.nav === "publishers" && <BusinessIcon fontSize="small" />) ||
                                            (page.nav === "copies" && <InventoryIcon fontSize="small" />)
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
                                    (page.nav === "user/profile" && <AccountCircleOutlinedIcon />)
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