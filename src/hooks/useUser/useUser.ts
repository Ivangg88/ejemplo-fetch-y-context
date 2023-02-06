import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const useUser = () => {
  const userLogin = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("usuario logueado", user);
    } catch (error) {
      console.error(error);
    }
  };

  const userRegister = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("usuario logueado", user);
    } catch (error) {
      console.error(error);
    }
  };

  return { userLogin, userRegister };
};

export default useUser;
