import { Track } from "../../../services/types";

export type FavoritesActionTypes = {
  type: Types;
  payload: Payload;
};

export enum Types {
  ADD = "favorites/ADD",
  REMOVE = "favorites/REMOVE",
}

export type State = {
  favoritesTracks: Track[];
};

export type Payload = {
  track: Track;
};

export type HydratePayload = {
  favorites?: Payload;
};
