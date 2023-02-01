import { useReducer } from "react";
import { Productos } from "../../App";
import articlesReducer from "../reducers/articlesReducer/articlesReducer";
import ArticleContext from "./ArticleContext";

interface ArticleContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const initialArticles: Productos[] = [];

const ArticleContextProvider = ({
  children,
}: ArticleContextProviderProps): JSX.Element => {
  const [articles, dispatch] = useReducer(articlesReducer, initialArticles);

  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
