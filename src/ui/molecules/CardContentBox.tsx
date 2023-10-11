import React from "react";

import "./CardContentBox.css";

interface CardContentBoxProps {
  children: React.ReactNode;
  className?: string;
}
const CardContentBox: React.FC<CardContentBoxProps> = ({ children, className }) => {
  return <div className={`card-content-box ${className || ""}`}>{children}</div>;
};

export default CardContentBox;
