import React, { useState } from "react";
import "./BurgerMenu.css";
function Header() {
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
          <a href="#">Home</a>
          <a href="#">Create</a>
          <a href="#">My list</a>
        </div>
      )}
    </>
  );
}

export default Header;
