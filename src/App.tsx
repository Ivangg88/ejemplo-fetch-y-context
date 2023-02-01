import React, { useContext } from "react";
import "./App.css";

import { useArticles } from "./hooks/useArticles";
import { deleteArticlesActionCreator } from "./store/actions/articlesActions/articlesActions";
import ArticleContext from "./store/ArticleContext/ArticleContext";

export interface Productos {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  price: number;
}

function App() {
  const { articles, dispatch } = useContext(ArticleContext);
  const { getData } = useArticles();

  // const getData = useCallback(async () => {
  //   const { data } = await axios.get("https://fakestoreapi.com/products");
  //   setArticulos(data);
  // }, []);

  const handleData = () => {
    getData("https://fakestoreapi.com/products");
  };

  const handleDelete = () => {
    dispatch(deleteArticlesActionCreator());
  };

  return (
    <>
      <div>
        <button onClick={handleData}>Get data</button>
        <button onClick={handleDelete}>Delete all</button>

        <ul>
          {articles.map((objeto) => (
            <li key={objeto.id}>
              <img src={objeto.image} alt="" width={50} />
              <span>{objeto.id} </span>
              <span>{objeto.title}</span>
              <span>{objeto.description} </span>
              <span>{objeto.category} </span>
              <span>{objeto.price} €</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
