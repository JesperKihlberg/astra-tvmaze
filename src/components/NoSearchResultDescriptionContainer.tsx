import React from "react";
import { useRecoilValue } from "recoil";
import { searchInputAtom } from "./SearchInput/SearchInputAtom";
import { searchResultQuery } from "./SearchResult/SearhResultQuery";

import NoSearchResultPage from "../ui/pages/NoSearchResultPage";

const NoSearchResultDescriptionContainer: React.FC = () => {
  const searchInput = useRecoilValue(searchInputAtom);
  const searchResult = useRecoilValue(searchResultQuery);

  return searchInput && searchResult.length === 0 ? <NoSearchResultPage searchInput={searchInput} /> : null;
};

export default NoSearchResultDescriptionContainer;
