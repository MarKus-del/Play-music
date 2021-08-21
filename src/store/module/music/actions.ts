import { Track } from "../../../services/types";
import { MusicActionTypes, Payload, Types } from "./types";

export const load = (tracks: Track[]) => {
  return {
    type: Types.LOAD,
    payload: {
      tracks,
    },
  };
};

export const searchRequest = () => {
  return {
    type: Types.SEARCH_REQUEST,
  };
};

export const update = (payloadRequest: Payload) => {
  return {
    type: Types.UPDATE,
    payload: payloadRequest,
  };
};
