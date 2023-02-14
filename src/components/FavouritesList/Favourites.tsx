import { async } from "@firebase/util";
import axios from "axios";
import { link } from "fs";
import { useCallback, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { useArticles } from "../../hooks/useArticles";
import { Card } from "../Card/Card";

const FavouritesList = (): JSX.Element => {
  const articles = useAppSelector((state) => state.favourites);
  const { uid } = useAppSelector((state) => state.user);
  const { getFav } = useArticles();

  useEffect(() => {
    (async () => {
      await getFav(`${uid}`);
    })();
  }, [uid, getFav]);

  return (
    <ul>
      {articles.length ? (
        articles.map((article) => (
          <li key={article.id}>
            <Card article={article} />
          </li>
        ))
      ) : (
        <li key={"empty"}>
          <span>Empty list</span>
        </li>
      )}
    </ul>
  );
};

export default FavouritesList;
