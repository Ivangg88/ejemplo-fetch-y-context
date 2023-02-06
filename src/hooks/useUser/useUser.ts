import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { auth } from "../../Firebase/firebase";
import { LoggedUser, loginUserActionCreator } from "../../store/user/userSlice";

const useUser = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userLogin = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user: LoggedUser = { ...userCredential.user, isLogged: false };
      const token = await auth.currentUser?.getIdToken();

      dispatch(loginUserActionCreator(user));
      localStorage.setItem("token", token!);
      navigate("/");
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
