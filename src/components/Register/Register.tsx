import { useState } from "react";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";

const Register = (): JSX.Element => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { userRegister } = useUser();

  const handleClick = () => {
    userRegister(user.email, user.password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  return (
    <div className="login">
      <h1>Register </h1>

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
          Register
        </button>
      </form>

      <p>
        Have an account yet?
        <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
};

export default Register;
