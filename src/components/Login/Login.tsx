import { useState } from "react";
import { NavLink } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    email: string,
    password: string
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setEmail("");
        setPassword("");
        console.log("usuario logueado", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="login">
      <h1>Log in </h1>

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
            loginHandler(event, email, password);
          }}
        >
          Log in
        </button>
      </form>
      <p>
        Don't have an account yet?
        <NavLink to="/login"> Login</NavLink>
      </p>
    </div>
  );
};
