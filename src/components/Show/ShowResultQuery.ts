import { selector } from "recoil";
import { showIdAtom } from "./ShowIdAtom";
import { getShow } from "../../api/show/getShow";

export const showResultQuery = selector({
  key: "showResult",
  get: async ({ get }) => {
    const showId = get(showIdAtom);
    if (!showId) return null;
    return await getShow(showId);
  },
});
