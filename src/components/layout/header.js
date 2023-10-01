import React from "react";
import { FiChevronDown } from "react-icons/fi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <section className="bg-primary shadow-2xl text-white py-4 px-8 h-[10vh] flex items-center justify-between">
      <h1 className="text-xl">Payouts</h1>
      <div className="flex items-center gap-1">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src="/images/doc.jpg"
          alt=""
        />
        <FiChevronDown
          onClick={handleClick}
          className="text-xl cursor-pointer"
        />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </section>
  );
};

export default Header;
