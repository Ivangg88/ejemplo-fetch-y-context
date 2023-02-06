import { useState } from "react";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";

const Register = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userRegister } = useUser();

  return (
    <div className="login">
      <h1>Register </h1>

      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          value={email}
          type="email"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          value={password}
          type="password"
        />
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            userRegister(email, password);
          }}
        >
          Register
        </button>
      </form>

      <p>
        Have an account yet?
        <NavLink to="/register">Register</NavLink>
      </p>
    </div>
  );
};

export default Register;
