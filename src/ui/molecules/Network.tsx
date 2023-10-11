import React from "react";
import Flag from "../atoms/Flag";
import "./Network.css";

type NetworkProps = {
  name: string;
  countryName: string;
  countryCode?: string;
};

const Network: React.FC<NetworkProps> = ({ name, countryName, countryCode }) => {
  return (
    <span className="network-container">
      ({name} {countryCode && <Flag contryCode={countryCode} size={16} alt={countryName} />})
    </span>
  );
};

export default Network;
