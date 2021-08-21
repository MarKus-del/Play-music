import { combineReducers } from "redux";
import music from "./music/reducer";
import miniplayer from "./miniplayer/reducer";
import favorites from "./favorites/reducer";

export const rootReducers = combineReducers({
  music,
  miniplayer,
  favorites
});

export type RootState = ReturnType<typeof rootReducers>;
