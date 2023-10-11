import React from "react";
import InfoCard from "../organisms/InfoCard";

const EmptySearchStringDescriptionPage: React.FC = () => {
  return (
    <InfoCard
      header="Search Page"
      content={<>Welcome to the search page! To find what you're looking for, enter a search term in the box above.</>}
    />
  );
};

export default EmptySearchStringDescriptionPage;
