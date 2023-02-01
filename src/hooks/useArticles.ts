import axios from "axios";
import { useCallback, useContext } from "react";
import { addArticlesActionCreator } from "../store/actions/articlesActions/articlesActions";
import ArticleContext from "../store/ArticleContext/ArticleContext";

export const useArticles = () => {
  const { dispatch } = useContext(ArticleContext);
  const getData = useCallback(
    async (url: string) => {
      try {
        const { data, status } = await axios.get(url);
        dispatch(addArticlesActionCreator(data));

        console.log(status);
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch]
  );

  return { getData };
};
