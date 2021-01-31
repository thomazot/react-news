import React from "react";
import * as css from "./Heading.style";

export type IHeading = {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
};

const Heading = ({ className, children }: IHeading) => {
  return (
    <css.Heading className={className} size="small">
      {children}
    </css.Heading>
  );
};

export default Heading;
