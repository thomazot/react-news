import React from "react";
import { useRecoilValue } from "recoil";
import NewsStates from "stores/atoms/NewsStates";
import Card from "components/Card";
import * as css from "./Home.style";
import IArticle from "typings/IArticle";

const Home = () => {
  const news = useRecoilValue(NewsStates);

  const handleAction = (article: IArticle) => {
    window.open(article.url, "_blank");
  };

  return (
    <css.Grid>
      {news &&
        news.articles.map((article, index) => (
          <Card
            key={`${index}-${article.source.id}`}
            article={article}
            onActions={handleAction}
          />
        ))}
    </css.Grid>
  );
};

export default Home;
