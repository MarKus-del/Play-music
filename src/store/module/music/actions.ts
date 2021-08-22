import { Payload, Types } from "./types";

export const load = (payloadRequest: Payload) => {
  return {
    type: Types.LOAD,
    payload: payloadRequest,
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
