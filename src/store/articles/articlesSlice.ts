import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Productos } from "../../App";
import { initialArticle } from "../../util/data";

const articleSlice = createSlice({
  name: "article",
  initialState: [initialArticle],
  reducers: {
    loadArticles: (previousState, action: PayloadAction<Productos[]>) =>
      action.payload,

    deleteArticles: (previousState) => [],
  },
});

export const articleReducer = articleSlice.reducer;

export const {
  loadArticles: loadArticlesActionCreator,
  deleteArticles: deleteArticlesActionCreator,
} = articleSlice.actions;
