import { useState } from "react";
import { Productos } from "../../App";
import { useAppSelector } from "../../app/hooks";
import { useArticles } from "../../hooks/useArticles";

const initialArticle: Productos = {
  image: "",
  category: "",
  description: "",
  id: "",
  price: 0,
  title: "",
};

const ArticleForm = (): JSX.Element => {
  const [article, setArticle] = useState(initialArticle);
  const { uid } = useAppSelector((state) => state.user);
  const { createArticle } = useArticles();

  const handleSubmit = async () => {
    if (await createArticle(`${uid}`, article)) {
      setArticle(initialArticle);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticle({ ...article, [event.target.id]: event.target.value });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",

        width: "350px",
      }}
      onSubmit={(event) => {
        event.preventDefault();
        console.log(article);
        handleSubmit();
      }}
    >
      <h1>Create Article</h1>
      <label htmlFor="name">Name</label>
      <input
        id="title"
        type="text"
        value={article.title}
        onChange={handleChange}
      />

      <label htmlFor="image">Image</label>
      <input
        id="image"
        type="text"
        value={article.image}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        value={article.description}
        onChange={handleChange}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        type="number"
        value={article.price}
        onChange={handleChange}
      />

      <label htmlFor="category">Cateogry</label>
      <input
        id="category"
        type="text"
        value={article.category}
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default ArticleForm;
