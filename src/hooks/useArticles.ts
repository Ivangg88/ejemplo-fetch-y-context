import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { ArticleFromDb, Productos } from "../App";
import { useAppDispatch } from "../app/hooks";
import {
  deleteArticleByIdActionCreator,
  loadArticlesActionCreator,
} from "../store/articles/articlesSlice";
import {
  deleteFavouriteActionCreator,
  loadFavouritesActionCreator,
} from "../store/favouriteArticles/favouriteArticles";

const apiUrl =
  "https://proyecto-final-bootcamp-18e38-default-rtdb.firebaseio.com/products.json";

const apiUrlDelete =
  "https://proyecto-final-bootcamp-18e38-default-rtdb.firebaseio.com/products/";
const publicApi = "https://fakestoreapi.com/products";

export const useArticles = () => {
  const dispatch = useAppDispatch();

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get(publicApi);
      const firebaseResponse = await axios.get(apiUrl);

      if (!firebaseResponse.data) {
        const products: ArticleFromDb[] = [];

        dispatch(
          loadArticlesActionCreator({
            public: data,
            private: products as ArticleFromDb[],
          })
        );
        toast.success("Articles added");
        throw new Error("Error with the data from firebase");
      }

      const products = Object.entries(firebaseResponse.data).map((object) => ({
        ...(object[1] as Productos),
        id: object[0],
      }));

      dispatch(
        loadArticlesActionCreator({
          public: data,
          private: products as ArticleFromDb[],
        })
      );

      toast.success("Articles added");
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [dispatch]);

  const createArticle = useCallback(
    async (author: string, article: Productos) => {
      try {
        const articlefromDb: ArticleFromDb = {
          ...article,
          name: "",
          autor: author,
        };

        const response = await axios.post(apiUrl, articlefromDb);

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        toast.success("Articles created successfully");
        return true;
      } catch (error: any) {
        toast.error(error.message);
        return false;
      }
    },
    []
  );

  const addFav = useCallback(async (article: Productos, author: string) => {
    try {
      const articlefromDb: ArticleFromDb = {
        ...article,
        name: "",
        autor: `${author}`,
      };

      const response = await axios.post(apiUrl, articlefromDb);

      toast.success(response.statusText);
    } catch (error: any) {
      toast.error(error.message);
    }
  }, []);

  const getFav = useCallback(
    async (autor: string) => {
      const { data } = await axios.get(apiUrl, {
        params: {
          autor: autor,
        },
      });
      console.log(Object.entries(data));
      const favourites = Object.entries(data).map((object) => ({
        ...(object[1] as Productos),
        id: object[0],
      }));
      dispatch(loadFavouritesActionCreator(favourites as ArticleFromDb[]));
    },
    [dispatch]
  );

  const deleteArticle = useCallback(
    async (id: string) => {
      try {
        const response = await axios.delete(apiUrlDelete + id + ".json");

        dispatch(deleteArticleByIdActionCreator(id));
        dispatch(deleteFavouriteActionCreator(id));
        toast.success(response.statusText);
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [dispatch]
  );

  return { getData, getFav, createArticle, addFav, deleteArticle };
};
