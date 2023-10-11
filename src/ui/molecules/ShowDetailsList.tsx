import React from "react";
import { Show } from "../../api/dto/Show";

interface ShowDetailsListProps {
  show: Show | null | undefined;
}
const ShowDetailsList: React.FC<ShowDetailsListProps> = ({ show }) => {
  return (
    <div>
      <ul>
        <li>Type: {show?.type}</li>
        <li>Language: {show?.language}</li>
        <li>Genres: {show?.genres.join(", ")}</li>
        <li>Status: {show?.status}</li>
        <li>Runtime: {show?.runtime} minutes</li>
        <li>Average Runtime: {show?.averageRuntime} minutes</li>
        <li>Premiered: {show?.premiered}</li>
        <li>Ended: {show?.ended || "N/A"}</li>
        <li>Official Site: {show?.officialSite || "N/A"}</li>
        <li>Rating: {show?.rating.average || "N/A"}</li>
        <li>Weight: {show?.weight}</li>
        <li>Network: {show?.network?.name}</li>
        <li>Web Channel: {show?.webChannel?.name || "N/A"}</li>
        <li>DVD Country: {show?.dvdCountry?.name}</li>
      </ul>
    </div>
  );
};
export default ShowDetailsList;
