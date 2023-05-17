import { Box, Toolbar, Button } from "@mui/material"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const pages = [
        {
            nav: 'categories',
            name: "Categories"
        },
        {
            nav: 'authors',
            name: "Authors",
        },
        {
            nav: 'publishers',
            name: "Publishers",
        },
        {
            nav: 'copies',
            name: "Copies",
        },
    ]

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",

        }}>
            <Toolbar>
                {
                    pages.map(page => (
                        <NavLink key={page.nav} to={page.nav}>
                            <Button
                                color="inherit"
                                variant="text"
                            >
                                {page.name}
                            </Button>
                        </NavLink>
                    ))
                }
            </Toolbar>


        </Box>
    )
}

export default Navbar