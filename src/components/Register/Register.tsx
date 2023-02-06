import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Firebase/firebase";
import { NavLink } from "react-router-dom";

const Register = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    email: string,
    password: string
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("usuario creado", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
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
            registerHandler(event, email, password);
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
