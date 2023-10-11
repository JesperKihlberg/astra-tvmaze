import { ShowSchedule } from "./ShowSchedule";
import { ShowRating } from "./ShowRating";
import { ShowNetwork } from "./ShowNetwork";
import { ShowWebChannel } from "./ShowWebChannel";
import { ShowExternals } from "./ShowExternals";
import { ShowImage } from "./ShowImage";
import { ShowLinks } from "./ShowLinks";

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: ShowSchedule;
  rating: ShowRating;
  weight: number;
  network: ShowNetwork | null;
  webChannel: ShowWebChannel | null;
  dvdCountry: {
    name: string;
    code: string;
    timezone: string;
  };
  externals: ShowExternals;
  image: ShowImage;
  summary: string | null;
  updated: number;
  _links: ShowLinks;
}
