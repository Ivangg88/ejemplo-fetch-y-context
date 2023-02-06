import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch } from "../app/hooks";
import { loadArticlesActionCreator } from "../store/articles/articlesSlice";

export const useArticles = () => {
  const dispatch = useAppDispatch();
  const getData = useCallback(
    async (url: string) => {
      try {
        const { data, status } = await axios.get(url);
        console.log(data);
        dispatch(loadArticlesActionCreator(data));

        console.log(status);
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch]
  );

  return { getData };
};
