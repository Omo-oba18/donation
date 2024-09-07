// components/DropdownMenu.js
import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropdownMenu = ({ title, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={open ? "dropdown-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "#000",
          textTransform: "uppercase",
          fontSize: "12px",
          fontFamily: "Baskervville SC, serif",
          fontWeight:"700"
        }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {title}
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "dropdown-button",
        }}
      >
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            component={Link}
            to={item.link}
            sx={{
              fontFamily: "Baskervville SC, serif",
              fontWeight:"700"
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropdownMenu;
