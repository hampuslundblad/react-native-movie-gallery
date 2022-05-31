export interface MovieResult {
  score: string;
  show: Show;
}

export interface Show {
  id: string;
  url: string;
  name: string;
  type: string;
  languages: string;
  genres: string[];
  status: string;
  runtime: string;
  averageRuntime: string;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: string;
  network: Network;
  webChannel: string;
  dvdCountry: string;
  externals: Externals;
  image: Image;
  summary: string;
  updated: string;
  _links: _Links;
}

export interface Schedule {
  time: string;
  days: string[];
}
export interface Rating {
  average: string;
}
export interface Network {
  id: string;
  name: string;
  country: Country;
  officialSite: string;
}
export interface Country {
  name: string;
  code: string;
  timezone: string;
}
export interface Externals {
  tvrage: string;
  thetvdb: string;
  imdb: string;
}
export interface Image {
  medium: string;
  original: string;
}
export interface _Links {
  self: Self;
  previousepisode: PreviousEpisode;
}
export interface Self {
  href: string;
}
export interface PreviousEpisode {
  href: string;
}

export default MovieResult;
