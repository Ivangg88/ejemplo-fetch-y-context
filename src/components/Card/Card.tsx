import { useState } from "react";
import { Productos } from "../../App";
import "./Card.css";

interface CardProps {
  article: Productos;
}

export const Card = ({ article }: CardProps): JSX.Element => {
  const [login, setlogin] = useState(false);
  return (
    <section className="card-container">
      <img src={article.image} alt="" width={50} />
      <div className="card-container__title">
        <span>{article.title}</span>
        <span>{article.price} €</span>
      </div>
      <span>{article.category} </span>
      <span>{article.description} </span>

      {login && (
        <div className="button-container">
          <button>Añadir</button>
          <button>Eliminar</button>
          <button>Editar</button>
        </div>
      )}

      <button onClick={() => setlogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
    </section>
  );
};
