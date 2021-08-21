import { Track } from "../../../services/types";
import { ActionTypes, Types } from "./types";

export function addFavorites(track: Track): ActionTypes {
  return {
    type: Types.ADD,
    payload: { track },
  };
}

export function removeFavorites(track: Track): ActionTypes {
  return {
    type: Types.REMOVE,
    payload: { track },
  };
}
