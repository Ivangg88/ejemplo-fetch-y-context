import { ArticleFromDb, Productos } from "../../App";
import { useAppSelector } from "../../app/hooks";
import { useArticles } from "../../hooks/useArticles";
import "./Card.css";

interface CardProps {
  article: Productos | ArticleFromDb;
}

export const Card = ({ article }: CardProps): JSX.Element => {
  const { isLogged, uid } = useAppSelector((state) => state.user);
  const { deleteArticle, addFav, getFav } = useArticles();

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
          <button
            onClick={async () => {
              addFav(article, uid!);
              getFav(uid!);
            }}
          >
            Añadir
          </button>

          <button onClick={async () => deleteArticle(article.id)}>
            Eliminar
          </button>
        </div>
      )}
    </section>
  );
};
