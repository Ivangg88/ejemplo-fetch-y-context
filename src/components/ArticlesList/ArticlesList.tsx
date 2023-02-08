import { useAppSelector } from "../../app/hooks";
import { Card } from "../Card/Card";

const ArticlesList = (): JSX.Element => {
  const articles = useAppSelector((state) => state.articles);

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Card article={article} />
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
