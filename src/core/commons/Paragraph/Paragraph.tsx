import React from "react";
import * as css from "./Paragraph.style";

export type IParagraph = {
  children?: React.ReactChild | React.ReactChild[];
};

const Paragraph = ({ children }: IParagraph) => {
  return <css.Paragraph>{children}</css.Paragraph>;
};

export default Paragraph;
