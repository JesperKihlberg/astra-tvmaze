import React from "react";
import SearchResultContainer from "../SearchResult/SearchResultContainer";
import EmptySearchStringDescriptionContainer from "../EmptySearchStringDescriptionContainer";
import NoSearchResultDescriptionContainer from "../NoSearchResultDescriptionContainer";
import { showIdAtom } from "../Show/ShowIdAtom";
import { useRecoilValue } from "recoil";

const SearchPageContainer: React.FC = () => {
  const showId = useRecoilValue(showIdAtom);
  return (
    !showId && (
      <>
        <React.Suspense fallback={<div>loading...</div>}>
          <SearchResultContainer />
        </React.Suspense>
        <EmptySearchStringDescriptionContainer />
        <React.Suspense fallback={<div>loading...</div>}>
          <NoSearchResultDescriptionContainer />
        </React.Suspense>
      </>
    )
  );
};

export default SearchPageContainer;
