import { selector } from "recoil";
import { searchInputAtom } from "../SearchInput/SearchInputAtom";
import { search } from "../../api/search/search";

export const searchResultQuery = selector({
  key: "searchResult",
  get: async ({ get }) => {
    const searchInput = get(searchInputAtom);
    return await search(searchInput);
  },
});
