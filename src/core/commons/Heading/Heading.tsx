import React from "react";
import * as css from "./Heading.style";

export type IHeading = {
  children?: React.ReactChild | React.ReactChild[];
};

const Heading = ({ children }: IHeading) => {
  return <css.Heading size="small">{children}</css.Heading>;
};

export default Heading;
