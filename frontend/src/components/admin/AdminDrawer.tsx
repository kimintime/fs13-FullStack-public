import { Box, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, ListSubheader, MenuItem, MenuList } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavLink } from "react-router-dom";
import BookIcon from '@mui/icons-material/Book';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StyleIcon from '@mui/icons-material/Style';
import BusinessIcon from '@mui/icons-material/Business';
import InventoryIcon from '@mui/icons-material/Inventory';

type AdminDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const AdminDrawer = ({ open, onClose }: AdminDrawerProps) => {
  const addItems = [
    {
      nav: '/',
      type: 'book',
      name: "Add Book"
    },
    {
      nav: '/',
      type: 'author',
      name: "Add Author",
    },
    {
      nav: '/',
      type: 'category',
      name: "Add Category",
    },
    {
      nav: '/',
      type: 'publisher',
      name: "Add Publisher",
    },
    {
      nav: '/',
      name: "Add Copy",
      type: 'copy'
    },
  ]

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
          {addItems.map(addItem => (
            <MenuItem>
              <ListItemIcon>
                {
                  (addItem.type === "book" &&  <BookIcon fontSize="small" />) ||
                  (addItem.type === "author" &&  <PersonAddIcon fontSize="small" />) ||
                  (addItem.type === "category" && <StyleIcon fontSize="small" /> ) ||
                  (addItem.type === "publisher" && <BusinessIcon fontSize="small" /> ) ||
                  (addItem.type === "copy" && <InventoryIcon fontSize="small" /> )
                }
              </ListItemIcon>
              <ListItemText primary={addItem.name} />
            </MenuItem>
          ))}
          <Divider />
        </MenuList>
      </Box>
    </Drawer>

  );
};

export default AdminDrawer;
