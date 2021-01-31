interface IArticle {
  source: {
    id: string;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishdAt: string;
  content: string;
}

export default IArticle;
