import React from "react";
import * as css from "./Subtitle.style";

export type ISubtitle = {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
};

const Subtitle = ({ className, children }: ISubtitle) => {
  return (
    <css.Subtitle className={className} size="small">
      {children}
    </css.Subtitle>
  );
};

export default Subtitle;
