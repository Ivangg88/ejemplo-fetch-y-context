import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleFromDb, Productos } from "../../App";

const initialState: Productos[] = [];

const articleSlice = createSlice({
  name: "article",
  initialState: initialState,
  reducers: {
    loadArticles: (
      previousState,
      action: PayloadAction<{ public: Productos[]; private: ArticleFromDb[] }>
    ) => action.payload.public.concat(action.payload.private),

    deleteArticleById: (previousState, action: PayloadAction<string>) =>
      previousState.filter((article) => article.id !== action.payload),

    deleteArticles: (previousState) => [],
  },
});

export const articleReducer = articleSlice.reducer;

export const {
  loadArticles: loadArticlesActionCreator,
  deleteArticles: deleteArticlesActionCreator,
  deleteArticleById: deleteArticleByIdActionCreator,
} = articleSlice.actions;
