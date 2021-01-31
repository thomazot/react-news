import React from "react";
import * as css from "./Subtitle.style";

export type ISubtitle = {
  children?: React.ReactChild | React.ReactChild[];
};

const Subtitle = ({ children }: ISubtitle) => {
  return <css.Subtitle size="small">{children}</css.Subtitle>;
};

export default Subtitle;
