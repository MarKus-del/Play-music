import { HYDRATE } from "next-redux-wrapper";
import { Track } from "../../../services/types";

export type MiniPlayerActionTypes = {
  type: Types | typeof HYDRATE;
  payload: Payload & HydratePayload;
};

export enum Types {
  LOAD = "miniplayer/LOAD",
  PLAY = "miniplayer/PLAY",
  STOP = "miniplayer/STOP",
}

export type State = {
  track: Track;
  isPlaying: boolean;
};

export type Payload = {
  track: Track;
};

export type HydratePayload = {
  miniplayer?: Payload;
};
