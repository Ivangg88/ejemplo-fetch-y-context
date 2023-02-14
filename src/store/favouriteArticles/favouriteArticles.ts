import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleFromDb } from "../../App";
const initialState: ArticleFromDb[] = [];

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: initialState,
  reducers: {
    loadFavourites: (previousState, action: PayloadAction<ArticleFromDb[]>) =>
      action.payload,

    deleteFavourite: (previousState, action: PayloadAction<string>) =>
      previousState.filter((article) => article.id !== action.payload),
  },
});

export const favouriteReducer = favouriteSlice.reducer;

export const {
  loadFavourites: loadFavouritesActionCreator,
  deleteFavourite: deleteFavouriteActionCreator,
} = favouriteSlice.actions;
