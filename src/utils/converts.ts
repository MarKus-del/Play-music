import { AxiosResponse } from "axios";
import { Album, Artist, Track } from "../services/types";

type RequestSearchDeezer = {
  data: Track[];
  next?: string | null;
  total: number;
  prev?: string | null;
};

export function convertAxiosResponseToStoreState(
  data: RequestSearchDeezer
): RequestSearchDeezer {
  const { data: result, total, next, prev } = data;

  const filter: Track[] = result.map((track) =>
    convertResponseTrackToEntityTrack(track)
  );

  return {
    data: filter,
    total,
    next: next ? next : null,
    prev: prev ? prev : null,
  };
}

export function convertResponseTrackToEntityTrack(responseTrack: Track): Track {
  return {
    id: responseTrack.id,
    title: responseTrack.title,
    link: responseTrack.link,
    preview: responseTrack.preview,
    duration: responseTrack.duration,
    artist: convertResponseArtistToEntityArtist(responseTrack.artist),
    album: convertResponseAlbumToEntityAlbum(responseTrack.album),
  };
}

export function convertResponseArtistToEntityArtist(
  responseArtist: Artist
): Artist {
  return {
    id: responseArtist.id,
    name: responseArtist.name,
    link: responseArtist.link,
    picture: responseArtist.picture,
    tracklist: responseArtist.tracklist,
  };
}

export function convertResponseAlbumToEntityAlbum(responseAlbum: Album): Album {
  return {
    id: responseAlbum.id,
    title: responseAlbum.title,
    cover: responseAlbum.cover,
    tracklist: responseAlbum.tracklist,
  };
}
