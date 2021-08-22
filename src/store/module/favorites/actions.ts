import { Track } from "../../../services/types";
import { FavoritesActionTypes, Types } from "./types";

export function addFavorites(track: Track): FavoritesActionTypes {
  return {
    type: Types.ADD,
    payload: { track },
  };
}

export function removeFavorites(track: Track): FavoritesActionTypes {
  return {
    type: Types.REMOVE,
    payload: { track },
  };
}
