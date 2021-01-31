import React from "react";
import * as css from "./Paragraph.style";

export type IParagraph = {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
};

const Paragraph = ({ className, children }: IParagraph) => {
  return <css.Paragraph className={className}>{children}</css.Paragraph>;
};

export default Paragraph;
