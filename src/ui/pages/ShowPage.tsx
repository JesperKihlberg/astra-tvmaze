import React from "react";
import { Show } from "../../api/dto/Show";
import Image from "../atoms/Image";
import HtmlText from "../atoms/HtmlText";
import ShowHeader from "../molecules/ShowHeader";
import "./ShowPage.css";
import ShowDetailsList from "../molecules/ShowDetailsList";

interface ShowPageProps {
  show: Show | undefined | null;
}
const ShowPage: React.FC<ShowPageProps> = ({ show }) => {
  const fromDate = show?.premiered ? new Date(show?.premiered) : undefined;
  const toDate = show?.ended ? new Date(show?.ended) : undefined;
  const showName = show?.name || "";
  const networkName = show?.network?.name || show?.webChannel?.name || "N/A";
  const networkContry = show?.network?.country || show?.webChannel?.country || undefined;
  const countryName = networkContry?.name || "N/A";
  const countryCode = networkContry?.code || undefined;
  return (
    show && (
      <div className="show-page">
        <ShowHeader
          showName={showName}
          networkName={networkName}
          countryName={countryName}
          countryCode={countryCode}
          fromDate={fromDate}
          toDate={toDate}
        />
        <div className="show-page-main-content">
          <Image src={show?.image?.medium} alt={show?.name} />
          {show?.summary ? <HtmlText html={show?.summary} /> : <p>No summary available</p>}
        </div>
        <ShowDetailsList show={show} />
      </div>
    )
  );
};

export default ShowPage;
