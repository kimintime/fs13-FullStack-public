import { Divider, Drawer, IconButton, List, ListItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavLink } from "react-router-dom";

type AdminDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const AdminDrawer = ({ open, onClose }: AdminDrawerProps) => {
  const addItems = [
    {
      nav: '/',
      name: "Add Book"
    },
    {
      nav: '/',
      name: "Add Author",
    },
    {
      nav: '/',
      name: "Add Category",
    },
    {
      nav: '/',
      name: "Add Publisher",
    },
    {
      nav: '/',
      name: "Add Copy",
    },
  ]

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {/* Drawer content */}
      <IconButton color="inherit" onClick={onClose}>
        {open ? <MenuOpenIcon /> : <MenuIcon />}
      </IconButton>
      <List>
        <ListItem>Add:</ListItem>
        {addItems.map(addItem => (
          <NavLink key={addItem.nav} to={addItem.nav} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem>{addItem.name}</ListItem>
          </NavLink>
          )
        )}
        <Divider />
      </List>
    </Drawer>
  );
};

export default AdminDrawer;
