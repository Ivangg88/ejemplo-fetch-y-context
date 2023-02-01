import { createContext, Dispatch } from "react";
import { Productos } from "../../App";
import { Action } from "../types/actions";

interface IArticleContext {
  articles: Productos[];
  dispatch: Dispatch<Action>;
}

const initialArticles: Productos[] = [];

const ArticleContext = createContext<IArticleContext>({
  articles: initialArticles,
  dispatch: () => {},
});

export default ArticleContext;
