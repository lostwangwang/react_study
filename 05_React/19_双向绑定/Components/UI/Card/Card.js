import React from "react";
import "./Card.css";
export const Card = (props) => {
  // props.children 表示组件的标签体
  //   console.log("Card组件的props:", props);
  return <div className={`card ${props.className}`}>{props.children}</div>;
};
