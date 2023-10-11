import React from "react";

import "./Header.css";
import Brand from "../molecules/Brand";

interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <header>
    <div className="header">
      <Brand />
      <div className="header-center">{children}</div>
      <div className="header-right" />
    </div>
  </header>
);
