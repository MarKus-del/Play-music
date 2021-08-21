import { CombinedState, combineReducers } from "redux";
import music from "./music/reducer";
import miniplayer from "./miniplayer/reducer";
import favorites from "./favorites/reducer";
import { StoreStates } from "./types";

export const reducers = combineReducers({
  music,
  miniplayer,
  favorites
});

export type RootState = ReturnType<typeof reducers>;
