import React from "react";
import InfoCard from "../organisms/InfoCard";

interface NoSearchResultPageProps {
  searchInput: string;
}
const NoSearchResultPage: React.FC<NoSearchResultPageProps> = ({ searchInput }) => {
  return (
    <InfoCard
      header="No Results Found"
      content={<>"Sorry, we couldn't find any results for your search: '{searchInput}'. Please try again with a different search term."</>}
    />
  );
};

export default NoSearchResultPage;
