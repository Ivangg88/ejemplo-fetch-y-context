import { Productos } from "../../../App";
import { Action, AddArticlesAction, AnyAction } from "../../types/actions";

const articlesReducer = (
  previousState: Productos[],
  action: Action | AnyAction
) => {
  let articles: Productos[];

  switch (action.type) {
    case "addArticles":
      articles = (action as AddArticlesAction).payload;
      break;

    case "deleteArticles":
      articles = [];
      break;

    default:
      articles = { ...previousState };
  }
  return articles;
};

export default articlesReducer;
