import React from "react";
import "./CssVariables.css";

interface CssVariablesProps {
  children: React.ReactNode;
}
const CssVariables: React.FC<CssVariablesProps> = ({ children }) => {
  return <>{children}</>;
};

export default CssVariables;
