import React from "react";

import "./ShowRunningTime.css";

interface ShowRunningTimeProps {
  fromDate?: Date;
  toDate?: Date;
}

const ShowRunningTime: React.FC<ShowRunningTimeProps> = ({ fromDate, toDate }) => {
  const fromYear = fromDate ? fromDate.getFullYear() : "?";
  const toYear = toDate ? toDate.getFullYear() : "?";

  return (
    <span className="show-running-time">
      {fromYear} - {toYear}
    </span>
  );
};

export default ShowRunningTime;
