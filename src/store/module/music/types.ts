import { HYDRATE } from "next-redux-wrapper";
import { Track } from "../../../services/types";

export type ActionTypes = {
  type: Types | typeof HYDRATE;
  payload: Payload;
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
};

export type Payload = {
  tracks: Track[];
  totalPageList: number;
  currentPage: number;
};
