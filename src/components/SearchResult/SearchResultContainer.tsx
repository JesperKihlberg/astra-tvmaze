import React from "react";
import { searchResultQuery } from "./SearhResultQuery";
import { useRecoilValue } from "recoil";
import { ShowSearchResult } from "../../api/dto/ShowSearchResult";
import ShowCard from "../../ui/organisms/ShowCard";

const SearchResultContainer: React.FC = () => {
  const searchResult = useRecoilValue(searchResultQuery);

  return (
    <>
      {searchResult.map((result: ShowSearchResult) => {
        return <ShowCard show={result.show} key={result.show.id} />;
      })}
    </>
  );
};

export default SearchResultContainer;
