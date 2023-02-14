import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logOutUserActionCreator } from "../../store/user/userSlice";
import "./BurgerMenu.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { isLogged } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className="burger" onClick={handleClick}>
        {open ? "X" : "open"}
      </button>

      {open && (
        <nav className="navigation-bar">
          <NavLink to="/">Home</NavLink>

          {!isLogged ? (
            <NavLink to={"/login"} title="Login">
              Login
            </NavLink>
          ) : (
            <>
              <NavLink to="/myarticles">My articles</NavLink>
              <NavLink
                to={"/"}
                onClick={() => {
                  dispatch(logOutUserActionCreator());
                  toast.success("User logouted");
                }}
              >
                Logout
              </NavLink>
            </>
          )}

          <NavLink to={"/register"}> Register</NavLink>
        </nav>
      )}
    </>
  );
};

export default Header;
