import { HYDRATE } from "next-redux-wrapper";
import { Track } from "../../../services/types";

export type MusicActionTypes = {
  type: Types;
  payload: Payload | { tracks: Track[] };
};

export enum Types {
  LOAD = "music/LOAD",
  SEARCH_REQUEST = "music/SEARCH_REQUEST",
  UPDATE = "music/UPDATE",
}

export type State = {
  tracks: Track[];
  isLoading: boolean;
  totalPageList: number;
  currentPage: number;
  searchName: string;
};

export type Payload = {
  tracks: Track[];
  totalPageList: number;
  currentPage: number;
  searchName: string;
};
