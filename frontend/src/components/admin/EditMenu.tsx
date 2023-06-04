import { MenuList, Divider, ListItemText, MenuItem, ListItemIcon, Collapse } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StyleIcon from '@mui/icons-material/Style';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { AdminProps } from "../../types/adminProps";

const EditMenu = ({ onClose }: AdminProps) => {
    const [openAddBook, setOpenAddBook] = useState(false)

    const handleClick = () => {
        setOpenAddBook(!openAddBook)
    }

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <MenuList>
            <MenuItem onClick={handleClick}>
                <ListItemText primary="Add to Book:" />
                {openAddBook ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            <Collapse in={openAddBook} timeout="auto" unmountOnExit>
                <NavLink to={`/admin/addauthor`} style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AddIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Author" />
                        <ListItemIcon sx={{ ml: 2 }}>
                            <PersonAddIcon fontSize="small" />
                        </ListItemIcon>
                    </MenuItem>
                </NavLink>
                <NavLink to={`/admin/addcategory`} style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AddIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Category" />
                        <ListItemIcon sx={{ ml: 2 }}>
                            <StyleIcon fontSize="small" />
                        </ListItemIcon>
                    </MenuItem>
                </NavLink>
            </Collapse>
            <Divider />
        </MenuList>
    )
}

export default EditMenu;