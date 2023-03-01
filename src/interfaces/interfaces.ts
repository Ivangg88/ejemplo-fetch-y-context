export interface Productos {
    id: string;
    image: string;
    title: string;
    description: string;
    category: string;
    price: number;
  }
  
  export interface ArticleFromDb extends Productos {
    name: string;
    autor: string;
  }