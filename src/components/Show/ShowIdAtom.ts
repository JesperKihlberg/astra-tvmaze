import { number, nullable } from "@recoiljs/refine";
import { atom } from "recoil";
import { syncEffect } from "recoil-sync";

export type ShowId = number | null | undefined;

export const showIdAtom = atom<ShowId>({
  key: "showId",
  default: null,
  effects: [
    syncEffect({
      refine: nullable(number()),
      read: ({ read }) => read("showId"),
      write: ({ write, reset }, newValue) => {
        if (!newValue) return reset("showId");
        write("showId", newValue);
      },
    }),
  ],
});
