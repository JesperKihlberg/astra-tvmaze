import { Show } from "../dto/Show";

export async function getShow(showId: number) {
  //?embed[]=cast&embed[]=episodes
  const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
  if (!response.ok) throw new Error("API Error");
  const data = (await response.json()) as Show;
  return data;
}
