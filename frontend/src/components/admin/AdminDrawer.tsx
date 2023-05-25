import { Box, Divider, Drawer, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AdminProps } from "../../types/adminProps";
import Notifications from "../Notifications";
import AddMenu from "./AddMenu";
import AddToBookMenu from "./AddToBookMenu";

const AdminDrawer = ({ open, onClose }: AdminProps) => {
  
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
        <AddMenu />
        <AddToBookMenu />
      </Box>
      <Notifications />
    </Drawer>
  );
};

export default AdminDrawer;
