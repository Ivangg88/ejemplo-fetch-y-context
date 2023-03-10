import { ArticleFromDb, Productos } from "../App";

export let articulos: Array<Productos> = [
  {
    category: "Cualquiera",
    description: "Un articulo más",
    id: "01",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbubble.com%2Fes%2Fi%2Flamina%2FBubu-Dudu-de-mergijesitse%2F93380662.7Q6GI&psig=AOvVaw0eqEsRS9o9fiFxXhdXq2Kf&ust=1676051006990000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjrw9n-iP0CFQAAAAAdAAAAABAE",
    price: 5555555550,
    title: "Bubu",
  },
];

export const initialArticle: Productos = {
  category: "",
  description: "",
  id: "",
  image: "",
  price: 0,
  title: "",
};

export const initialFavourite: ArticleFromDb = {
  category: "",
  description: "",
  id: "",
  image: "",
  price: 0,
  title: "",
  name: "",
  autor: "",
};
