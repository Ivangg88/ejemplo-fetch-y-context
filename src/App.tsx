import { useContext } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import Header from "./components/BurgerMenu/BurgerMenu";
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
  const { email } = useAppSelector((state) => state.user);

  const { getData } = useArticles();

  const handleData = () => {
    getData("https://fakestoreapi.com/products");
  };

  const handleDelete = () => {
    dispatch(deleteArticlesActionCreator());
  };

  const list: JSX.Element = (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Card article={article} />
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {" "}
      <Header />
      <div style={{ width: "100vh" }}>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route
            path="/home"
            element={
              <div>
                <h1>Home</h1>
                {<span>{email ? `User: ${email}` : "No logged"}</span>}
                <button onClick={handleData}>Get data</button>
                <button onClick={handleDelete}>Delete data</button>
                {articles && list}
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Página no encontrada</h1>{" "}
                <NavLink to={"/"}>Go Home</NavLink>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
