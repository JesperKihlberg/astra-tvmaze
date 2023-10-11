import React from "react";
import TextInput from "../atoms/TextInput";
import SearchIcon from "../atoms/icons/SearchIcon";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return <TextInput value={value} onChange={onChange} adornment={<SearchIcon />} />;
};

export default SearchInput;
