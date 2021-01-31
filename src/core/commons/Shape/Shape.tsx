import React from "react";
import * as css from "./Shape.style";

export type IShape = {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
};

const Shape = ({ className, children }: IShape) => {
  return (
    <css.Shape className={className} data-testid="article" role="article">
      {children}
    </css.Shape>
  );
};

export default Shape;
