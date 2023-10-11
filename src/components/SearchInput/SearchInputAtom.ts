import { string } from "@recoiljs/refine";
import { atom } from "recoil";
import { syncEffect } from "recoil-sync";

export type SearchInput = string;

export const searchInputAtom = atom<SearchInput>({
  key: "searchInput",
  default: "",
  effects: [
    syncEffect({
      refine: string(),
      read: ({ read }) => read("searchInput"),
      write: ({ write, reset }, newValue) => {
        write("searchInput", newValue);
      },
    }),
  ],
});
