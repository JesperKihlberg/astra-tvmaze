import React from "react";
import "./Brand.css";
import VideoSearchIcon from "../atoms/icons/VideoSearchIcon";
const Brand: React.FC = () => {
  return (
    <div className="brand-container">
      <div className="logo">
        <VideoSearchIcon />
      </div>
      <h1>ShowSpotter</h1>
    </div>
  );
};

export default Brand;
