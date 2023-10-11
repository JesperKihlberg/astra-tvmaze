import React from "react";

import { useRecoilState, useSetRecoilState } from "recoil";
import TextInput from "../../ui/atoms/TextInput";
import { searchInputAtom } from "./SearchInputAtom";
import { showIdAtom } from "../Show/ShowIdAtom";

const SearchInputContainer: React.FC = () => {
  const [searchText, setSearchText] = useRecoilState(searchInputAtom);
  const setShowId = useSetRecoilState(showIdAtom);
  const onClick = () => {
    setShowId(null);
  };
  return (
    <TextInput
      value={searchText}
      onChange={(value) => setSearchText(value)}
      onClick={onClick}
      adornment={<span className="material-symbols-outlined">search</span>}
    />
  );
};

export default SearchInputContainer;
