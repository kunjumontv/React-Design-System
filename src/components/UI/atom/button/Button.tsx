import React from "react";
import "./Button.css";
import { ButtonPropsType } from "./button";

const Button: React.FC<ButtonPropsType> = ({
  children,
  type,
  classes,
  click,
  variant,
  ...props
}) => {
  return (
    <button type={type} onClick={click} className={classes}>
      {children}
    </button>
  );
};

export default Button;
