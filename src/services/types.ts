export type Track = {
  id: number;
  title: string;
  link: string;
  duration: number;
  preview: string;
  artist: Artist;
  album: Album;
};

export type Album = {
  id: number;
  title: string;
  tracklist: string;
  cover: string;
};

export type Artist = {
  id: number;
  name: string;
  link: string;
  picture: string;
  tracklist: string;
};
