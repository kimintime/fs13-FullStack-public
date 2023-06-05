import { MenuList, Divider, ListItemText, MenuItem, ListItemIcon, Collapse } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import StyleIcon from '@mui/icons-material/Style';
import EditIcon from '@mui/icons-material/Edit';
import BookIcon from '@mui/icons-material/Book';
import InventoryIcon from '@mui/icons-material/Inventory';
import BusinessIcon from '@mui/icons-material/Business';
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { AdminProps } from "../../types/adminProps";

const EditMenu = ({ onClose }: AdminProps) => {
    const [openEdit, setOpenEdit] = useState(true)

    const pages = [
        {
            name: "Book",
            nav: "/admin/editbook"
        },
        {
            name: "Author",
            nav: "/admin/editauthor"
        },
        {
            name: "Category",
            nav: "/admin/editcategory"
        },
        {
            name: "Publisher",
            nav: "/admin/editpublisher"
        },
        {
            name: "Copy",
            nav: "/admin/editcopy"
        }
    ]

    const handleClick = () => {
        setOpenEdit(!openEdit)
    }

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <MenuList>
            <MenuItem onClick={handleClick}>
                <ListItemText primary="Edit:" />
                {openEdit ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            <Collapse in={openEdit} timeout="auto" unmountOnExit>
                {pages.map(page => (
                    <NavLink key={page.name} to={page.nav} style={{ textDecoration: 'none', color: 'black' }}>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <EditIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={page.name} />
                            <ListItemIcon sx={{ ml: 2 }}>
                                {
                                    (page.name === "Book" && <BookIcon fontSize="small" />) ||
                                    (page.name === "Author" && <PersonIcon fontSize="small" />) ||
                                    (page.name === "Category" && <StyleIcon fontSize="small" />) ||
                                    (page.name === "Publisher" && <BusinessIcon fontSize="small" />) ||
                                    (page.name === "Copy" && <InventoryIcon fontSize="small" />)
                                }
                            </ListItemIcon>
                        </MenuItem>
                    </NavLink>
                ))}
            </Collapse>
            <Divider />
        </MenuList>
    )
}

export default EditMenu;