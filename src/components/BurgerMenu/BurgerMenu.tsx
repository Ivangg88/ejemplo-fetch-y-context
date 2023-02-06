import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={handleClick}>
        {open ? "iconocCerrar" : "iconoMenu"}
      </button>

      {open && (
        <div>
          <NavLink to={"/login"} title="Login">
            Login
          </NavLink>

          <NavLink to={"/register"}> Register</NavLink>

          <NavLink to="/">Home</NavLink>
        </div>
      )}
    </>
  );
};

export default Header;
