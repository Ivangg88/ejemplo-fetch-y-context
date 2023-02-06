import { useState } from "react";
import { Productos } from "../../App";
import { useAppSelector } from "../../app/hooks";
import { auth } from "../../Firebase/firebase";
import "./Card.css";

interface CardProps {
  article: Productos;
}

export const Card = ({ article }: CardProps): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  return (
    <section className="card-container">
      <img src={article.image} alt="" width={50} />
      <div className="card-container__title">
        <span>{article.title}</span>
        <span>{article.price} €</span>
      </div>
      <span>{article.category} </span>
      <span>{article.description} </span>

      {isLogged && (
        <div className="button-container">
          <button>Añadir</button>
          <button>Eliminar</button>
          <button>Editar</button>
        </div>
      )}
    </section>
  );
};
