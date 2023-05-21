import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AdminProtected from "./AdminProtected";

type AdminDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const AdminDrawer = ({ open, onClose }: AdminDrawerProps) => {
  return (
    <AdminProtected>
      <Drawer open={open} onClose={onClose}>
        {/* Drawer content */}
        {/* Include the icon within the drawer */}
        <IconButton color="inherit" onClick={onClose}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Drawer>
    </AdminProtected>
  );
};

export default AdminDrawer;
