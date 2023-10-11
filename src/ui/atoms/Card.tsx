import React from "react";
import "./Card.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  withHoverEffect?: boolean;
}
const Card: React.FC<CardProps> = ({ children, className, onClick, withHoverEffect }) => {
  return (
    <div onClick={onClick} className={`card ${className || ""} ${withHoverEffect && "card-hover"}`}>
      {children}
    </div>
  );
};

export default Card;
