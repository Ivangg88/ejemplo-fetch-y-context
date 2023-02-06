import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export interface LoggedUser extends User {
  isLogged: boolean;
}

const userInitialState: Partial<LoggedUser> = {};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (previousState, action: PayloadAction<LoggedUser>) => ({
      ...action.payload,
      isLogged: true,
    }),

    logOutUser: (previousState) => {
      localStorage.removeItem("token");
      return userInitialState;
    },
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logOutUser: logOutUserActionCreator,
} = userSlice.actions;
