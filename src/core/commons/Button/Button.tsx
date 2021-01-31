import React, { useState } from "react";
import * as css from "./Button.style";

export interface IButton {
  buttonType?: "button";
  type?: "primary";
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

const Button = ({
  buttonType = "button",
  type = "primary",
  children,
  className,
}: IButton) => {
  const [pressed, setPressed] = useState(false);

  return (
    <css.Button
      className={className}
      type={buttonType}
      primary={type === "primary"}
      data-color={type}
      aria-pressed={pressed}
      onMouseEnter={() => setPressed(true)}
      onMouseLeave={() => setPressed(false)}
    >
      {children}
    </css.Button>
  );
};

export default Button;
