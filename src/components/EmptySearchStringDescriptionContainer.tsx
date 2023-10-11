import React from "react";
import { useRecoilValue } from "recoil";
import { searchInputAtom } from "./SearchInput/SearchInputAtom";
import EmptySearchStringDescriptionPage from "../ui/pages/EmptySearchStringDescriptionPage";

const EmptySearchStringDescriptionContainer: React.FC = () => {
  const searchInput = useRecoilValue(searchInputAtom);
  return !searchInput && searchInput.length < 1 ? <EmptySearchStringDescriptionPage /> : null;
};

export default EmptySearchStringDescriptionContainer;
