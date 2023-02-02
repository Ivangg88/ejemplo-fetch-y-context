import { useContext } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";

import { useArticles } from "./hooks/useArticles";
import { deleteArticlesActionCreator } from "./store/actions/articlesActions/articlesActions";
import ArticleContext from "./store/ArticleContext/ArticleContext";
import { tarjeta } from "./util/datos";

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

  const handleData = () => {
    getData("https://fakestoreapi.com/products");
  };

  const handleDelete = () => {
    dispatch(deleteArticlesActionCreator());
  };

  return <Card article={tarjeta}></Card>;
}

export default App;
