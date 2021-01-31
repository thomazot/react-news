import IArticle from "./IArticle";

interface INews {
  status: string;
  totalResult: number;
  articles: IArticle[];
}

export default INews;
