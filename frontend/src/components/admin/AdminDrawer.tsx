import { Box, Divider, Drawer, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavLink } from "react-router-dom";
import BookIcon from '@mui/icons-material/Book';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StyleIcon from '@mui/icons-material/Style';
import BusinessIcon from '@mui/icons-material/Business';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import AddBookModal from "./AddBookModal";
import { AdminProps } from "../../types/adminProps";

const AdminDrawer = ({ open, onClose }: AdminProps) => {
  const [addBookModalOpen, setAddBookModalOpen] = useState(false)

  const handleOpenAddBookModal = () => {
    setAddBookModalOpen(true);
  };

  const handleCloseAddBookModal = () => {
    setAddBookModalOpen(false);
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          mr={1}
        >
          <IconButton color="inherit" edge="end" aria-label="menu" onClick={onClose}>
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <MenuList>
          <Divider />
          <ListItemText sx={{ marginLeft: 2 }} primary="Add:" />
          <MenuItem onClick={handleOpenAddBookModal}>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Book" />
            <ListItemIcon sx={{ml: 2}}>
              <BookIcon fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Author" />
            <ListItemIcon sx={{ml: 2}}>
              <PersonAddIcon fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Category" />
            <ListItemIcon sx={{ml: 2}}>
              <StyleIcon fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Publisher" />
            <ListItemIcon sx={{ml: 2}}>
              <BusinessIcon fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Copy" />
            <ListItemIcon sx={{ml: 2}}>
              <InventoryIcon fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <Divider />
        </MenuList>
      </Box>
      <AddBookModal open={addBookModalOpen} onClose={handleCloseAddBookModal} />
    </Drawer>

  );
};

export default AdminDrawer;
