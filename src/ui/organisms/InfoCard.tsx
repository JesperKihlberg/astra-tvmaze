import React from "react";
import Card from "../atoms/Card";
import "./InfoCard.css";

interface InfoCardProps {
  header: string;
  content: React.ReactNode;
}
const InfoCard: React.FC<InfoCardProps> = ({ header, content }) => {
  return (
    <Card className="info-card">
      <h1>{header}</h1>
      <p>{content}</p>
    </Card>
  );
};

export default InfoCard;
