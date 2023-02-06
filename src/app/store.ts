import { configureStore } from "@reduxjs/toolkit";
import { articleReducer } from "../store/articles/articlesSlice";

import { userReducer } from "../store/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    articles: articleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
