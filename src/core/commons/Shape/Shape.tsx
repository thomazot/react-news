import React from "react";
import * as css from "./Shape.style";

export type IShape = {
  children?: React.ReactChild | React.ReactChild[];
};

const Shape = ({ children }: IShape) => {
  return (
    <css.Shape data-testid="article" role="article">
      {children}
    </css.Shape>
  );
};

export default Shape;
