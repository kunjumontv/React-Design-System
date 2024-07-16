import React from "react";

export interface TypographyPropsType extends React.HTMLAttributes<HTMLElement> {
  tag: keyof JSX.IntrinsicElements;
  text: string;
  classes?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}
