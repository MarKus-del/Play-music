import { Track } from "../../../services/types";

export type MiniPlayerActionTypes = {
  type: Types;
  payload: Payload;
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
