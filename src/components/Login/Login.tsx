import { useState } from "react";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { userLogin } = useUser();

  const handleClick = () => {
    userLogin(user.email, user.password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  return (
    <div className="login">
      <h1>Log in </h1>

      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={handleChange}
          placeholder="Enter your email"
          value={user.email}
          type="email"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          onChange={handleChange}
          placeholder="Enter your password"
          value={user.password}
          type="password"
        />
        <button type="button" onClick={handleClick}>
          Log in
        </button>
      </form>
      <p>
        Don't have an account yet?
        <NavLink to="/register"> Register</NavLink>
      </p>
    </div>
  );
};
