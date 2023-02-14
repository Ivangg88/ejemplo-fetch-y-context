import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
      toast.success(`User: ${user.email} logged`);
      navigate("/");
    } catch (error: any) {
      toast.error(error.message);
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
      toast.success(`User: ${user.email} registered`);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return { userLogin, userRegister };
};

export default useUser;
