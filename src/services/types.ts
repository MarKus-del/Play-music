export type Track = {
    id: number;
    title: string;
    link: string;
    duration: number;
    preview: string;
    artist: Artist;
    album: Album;
}

export type Album = {
    id: number;
    title: string;
    link: string;
    cover: string;
    duration: number;
}

export type Artist = {
    id: number;
    name: string;
    link: string;
    picture: string;
}