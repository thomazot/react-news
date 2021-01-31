import React from "react";
import IArticle from "typings/IArticle";
import * as css from "./Card.style";

export type ICard = {
  article: IArticle;
  onActions?: (article: IArticle) => void;
};

const Card = ({ article, onActions }: ICard) => {
  const handleActions = () => {
    if (typeof onActions === "function") {
      onActions(article);
    }
  };

  return (
    <css.CardShape>
      <css.CardHeading>{article.title}</css.CardHeading>
      <css.CardSubtitle>{article.description}</css.CardSubtitle>
      <css.CardParagraph>{article.content}</css.CardParagraph>
      <css.CardButton onClick={handleActions}>Ver mais</css.CardButton>
    </css.CardShape>
  );
};

export default Card;
