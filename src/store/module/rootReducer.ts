import { combineReducers } from "redux";
import music from "./music/reducer";
import miniplayer from "./miniplayer/reducer";
import favorites from "./favorites/reducer";
import themes from "./themes/reducer";

export const rootReducers = combineReducers({
  music,
  miniplayer,
  favorites,
  themes
});

export type RootState = ReturnType<typeof rootReducers>;
