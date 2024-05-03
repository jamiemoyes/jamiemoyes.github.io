export enum Colour {
  Red = "red",
  Yellow = "yellow",
  Purple = "purple",
  Blue = "blue",
  LightBlue = "light-blue",
  Green = 'green'
}

export interface TrackInfo {
  title: string;
  artist: string;
  href: string;
  images: Image[];
}

export interface Image {
  height: number;
  url: string;
  width: number;
}
