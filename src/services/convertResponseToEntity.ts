import { Album, Artist, Track } from "./types";

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
