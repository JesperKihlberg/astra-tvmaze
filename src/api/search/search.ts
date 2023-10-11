import { SearchInput } from "../../components/SearchInput/SearchInputAtom";
import { ShowSearchResults } from "../dto/ShowSearchResults";

export async function search(searchInputString: string) {
  const encodedValue = encodeURIComponent(searchInputString);
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodedValue}`);
  if (!response.ok) throw new Error("API Error");
  const data = (await response.json()) as ShowSearchResults;
  return data;
}
