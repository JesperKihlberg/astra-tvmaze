import React from "react";
import "./ShowCard.css";
import { Show } from "../../api/dto/Show";
import CardContentBox from "../molecules/CardContentBox";
import Card from "../atoms/Card";
import { useRecoilState } from "recoil";
import { showIdAtom } from "../../components/Show/ShowIdAtom";
import ShowHeader from "../molecules/ShowHeader";

type ShowCardProps = {
  show: Show;
};

const ShowCard: React.FC<ShowCardProps> = ({ show }) => {
  const backgroundImageStyle = { backgroundImage: `url(${show.image?.medium})` };
  const [showId, setShowId] = useRecoilState(showIdAtom);
  const onClick = () => {
    setShowId(show.id);
  };
  const fromDate = show.premiered ? new Date(show.premiered) : undefined;
  const toDate = show.ended ? new Date(show.ended) : undefined;
  const showName = show.name;
  const networkName = show.network?.name || show.webChannel?.name || "N/A";
  const networkContry = show.network?.country || show.webChannel?.country || undefined;
  const countryName = networkContry?.name || "N/A";
  const countryCode = networkContry?.code || undefined;
  return (
    <Card className="show-card" onClick={onClick} withHoverEffect>
      <div className="show-card-background" style={backgroundImageStyle}></div>
      <div className="show-card-contents">
        <CardContentBox className="show-card-image-container">
          <img
            src={show.image?.medium || "https://images.placeholders.dev/?width=100&height=160&text=?"}
            alt={show.name}
            className="show-card-image"
          />
        </CardContentBox>
        <div className="show-card-details">
          <CardContentBox>
            <ShowHeader
              showName={showName}
              networkName={networkName}
              countryName={countryName}
              countryCode={countryCode}
              fromDate={fromDate}
              toDate={toDate}
            />
          </CardContentBox>

          <div className="show-card-meta">
            <CardContentBox className="show-card-genres">{show.genres.join(", ")}</CardContentBox>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ShowCard;
