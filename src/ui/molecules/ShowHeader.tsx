import React from "react";
import Network from "./Network";
import ShowRunningTime from "./ShowRunningTime";
import "./ShowHeader.css";
interface ShowHeaderProps {
  showName: string;
  networkName: string;
  countryName: string;
  countryCode?: string;
  fromDate?: Date;
  toDate?: Date;
}
const ShowHeader: React.FC<ShowHeaderProps> = ({ showName, networkName, countryName, countryCode, fromDate, toDate }) => {
  return (
    <div className="show-card-header-container">
      <h2 className="show-card-title">{showName}</h2>
      <div className="show-card-network-running">
        <Network name={networkName} countryName={countryName} countryCode={countryCode} />
        <ShowRunningTime fromDate={fromDate} toDate={toDate} />
      </div>
    </div>
  );
};

export default ShowHeader;
