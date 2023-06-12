import { MenuList, Divider, ListItemText, MenuItem, ListItemIcon, Collapse } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { AdminProps } from "../../types/adminProps";

const UserMenu = ({ onClose }: AdminProps) => {
    const [openEdit, setOpenEdit] = useState(true)

    const pages = [
        {
            name: "Loans",
            nav: "/admin/returns"
        },
        {
            name: "Users",
            nav: "/admin/users"
        },
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
                <ListItemText primary="User Admin:" />
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
                                    (page.name === "Loans" && <AccountBalanceIcon fontSize="small" />) ||
                                    (page.name === "Users" && <AccountCircleIcon fontSize="small" />) 
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

export default UserMenu;