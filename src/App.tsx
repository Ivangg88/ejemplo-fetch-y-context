import { useContext } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Header from "./components/BurgerMenu/BurgerMenu";
import { Card } from "./components/Card/Card";
import { Login } from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useArticles } from "./hooks/useArticles";
import { deleteArticlesActionCreator } from "./store/articles/articlesSlice";

export interface Productos {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  price: number;
}

function App() {
  const articles = useAppSelector((state) => state.articles);
  const { email } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

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
                {articles.length ? list : ""}
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
