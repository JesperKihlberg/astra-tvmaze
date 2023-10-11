import React from "react";

interface HtmlTextProps {
  html: string;
}
const HtmlText: React.FC<HtmlTextProps> = ({ html }) => {
  const summaryHtml = { __html: html || "" };
  return <p dangerouslySetInnerHTML={summaryHtml}></p>;
};

export default HtmlText;
