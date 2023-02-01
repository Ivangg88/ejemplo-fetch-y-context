import { Productos } from "../../../App";
import { Action, AddArticlesAction } from "../../types/actions";

export const addArticlesActionCreator = (
  articles: Productos[]
): AddArticlesAction => ({
  type: "addArticles",
  payload: articles,
});

export const deleteArticlesActionCreator = (): Action => ({
  type: "deleteArticles",
});
