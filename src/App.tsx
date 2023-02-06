import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Login } from "./components/Login/Login";
import Register from "./components/Register/Register";

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

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
