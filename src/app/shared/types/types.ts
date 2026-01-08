export enum Colour {
  Red = "red",
  Yellow = "yellow",
  Purple = "purple",
  Blue = "blue",
  LightBlue = "light-blue",
  Green = "green",
}

export interface TrackInfo {
  title: string;
  artist: string;
  href: string;
  images: Image[];
}

// export interface Image {
//   height: number;
//   url: string;
//   width: number;
// }

export interface LastFmResponse {
  recenttracks: Recenttracks;
}

export interface Recenttracks {
  track: Track[];
  "@attr": Attr2;
}

export interface Track {
  artist: Artist;
  streamable: string;
  image: Image[];
  mbid: string;
  album: Album;
  name: string;
  "@attr"?: Attr;
  url: string;
  date?: Date;
}

export interface Artist {
  mbid: string;
  "#text": string;
}

export interface Image {
  size: string;
  "#text": string;
}

export interface Album {
  mbid: string;
  "#text": string;
}

export interface Attr {
  nowplaying: string;
}

export interface Date {
  uts: string;
  "#text": string;
}

export interface Attr2 {
  user: string;
  totalPages: string;
  page: string;
  perPage: string;
  total: string;
}
