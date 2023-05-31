import { MenuList, Divider, ListItemText, MenuItem, ListItemIcon } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StyleIcon from '@mui/icons-material/Style';
import BusinessIcon from '@mui/icons-material/Business';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import AddBookModal from "./AddBookModal";
import AddAuthorModal from "./AddAuthorModal";
import AddCategoryModal from "./AddCategoryModal";
import AddPublisherModal from "./AddPublisherModal";
import { NavLink } from "react-router-dom";
import { AdminProps } from "../../types/adminProps";

const AddMenu = ({ onClose }: AdminProps) => {
    const [addBookModalOpen, setAddBookModalOpen] = useState(false)
    const [addAuthorModalOpen, setAddAuthorModalOpen] = useState(false)
    const [addCategoryModalOpen, setAddCategoryModalOpen] = useState(false)
    const [addPublisherModalOpen, setAddPublisherModalOpen] = useState(false)

    const handleOpenAddBookModal = () => {
        setAddBookModalOpen(true);
    };

    const handleCloseAddBookModal = () => {
        setAddBookModalOpen(false);
    };

    const handleOpenAddAuthorModal = () => {
        setAddAuthorModalOpen(true);
    };

    const handleCloseAddAuthorModal = () => {
        setAddAuthorModalOpen(false);
    };

    const handleOpenAddCategoryModal = () => {
        setAddCategoryModalOpen(true);
    };

    const handleCloseAddCategoryModal = () => {
        setAddCategoryModalOpen(false);
    };

    const handleOpenAddPublisherModal = () => {
        setAddPublisherModalOpen(true);
    };

    const handleCloseAddPublisherModal = () => {
        setAddPublisherModalOpen(false);
    };

    const handleClick = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <MenuList>
            <Divider />
            <ListItemText sx={{ marginLeft: 2 }} primary="Add:" />
            <MenuItem onClick={handleOpenAddBookModal}>
                <ListItemIcon>
                    <AddIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Book" />
                <ListItemIcon sx={{ ml: 2 }}>
                    <BookIcon fontSize="small" />
                </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={handleOpenAddAuthorModal}>
                <ListItemIcon>
                    <AddIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Author" />
                <ListItemIcon sx={{ ml: 2 }}>
                    <PersonAddIcon fontSize="small" />
                </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={handleOpenAddCategoryModal}>
                <ListItemIcon>
                    <AddIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Category" />
                <ListItemIcon sx={{ ml: 2 }}>
                    <StyleIcon fontSize="small" />
                </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={handleOpenAddPublisherModal}>
                <ListItemIcon>
                    <AddIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Publisher" />
                <ListItemIcon sx={{ ml: 2 }}>
                    <BusinessIcon fontSize="small" />
                </ListItemIcon>
            </MenuItem>
            <NavLink to={`/admin/addcopy`} style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem onClick={handleClick}>
                    <ListItemIcon>
                        <AddIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Copy" />
                    <ListItemIcon sx={{ ml: 2 }}>
                        <InventoryIcon fontSize="small" />
                    </ListItemIcon>
                </MenuItem>
            </NavLink>
            <Divider />
            <AddBookModal open={addBookModalOpen} onClose={handleCloseAddBookModal} />
            <AddAuthorModal open={addAuthorModalOpen} onClose={handleCloseAddAuthorModal} />
            <AddCategoryModal open={addCategoryModalOpen} onClose={handleCloseAddCategoryModal} />
            <AddPublisherModal open={addPublisherModalOpen} onClose={handleCloseAddPublisherModal} />
        </MenuList>
    )
}

export default AddMenu;