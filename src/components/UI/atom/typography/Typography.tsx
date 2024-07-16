import React from "react";
import { TypographyPropsType } from "./type";

const Typography:React.FC<TypographyPropsType> = ({
  tag,
  text,
  classes,
  children,
  style,
  
}) => {
  return React.createElement(
    tag,
    {
      className: classes,
      style: style,
      
    },
    text,
    children
  );
};

export default Typography;
