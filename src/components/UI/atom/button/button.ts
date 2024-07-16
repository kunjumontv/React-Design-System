import { MouseEventHandler } from "react";

type ButtonType = "submit" | "reset" | "button";
type ButtonVariant = "primary" | "secondary" | "tertiary";

export interface ButtonPropsType extends React.HTMLAttributes<HTMLElement> {
  type: ButtonType;
  variant?: ButtonVariant;
  classes?: string;
  click?: MouseEventHandler;
}
