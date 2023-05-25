import { MenuList, Divider, ListItemText, MenuItem, ListItemIcon, Collapse } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StyleIcon from '@mui/icons-material/Style';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const AddToBookMenu = () => {
    const [openAddBook, setOpenAddBook] = useState(false)

    const handleClick = () => {
        setOpenAddBook(!openAddBook)
    }

    return (
        <MenuList>
            <MenuItem onClick={handleClick}>
                <ListItemText primary="Add to Book:" />
                {openAddBook ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            <Collapse in={openAddBook} timeout="auto" unmountOnExit>
                <MenuItem>
                    <ListItemIcon>
                        <AddIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Author" />
                    <ListItemIcon sx={{ ml: 2 }}>
                        <PersonAddIcon fontSize="small" />
                    </ListItemIcon>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AddIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Category" />
                    <ListItemIcon sx={{ ml: 2 }}>
                        <StyleIcon fontSize="small" />
                    </ListItemIcon>
                </MenuItem>
            </Collapse>
            <Divider />
        </MenuList>
    )
}

export default AddToBookMenu;