import { combineReducers } from "redux";
import music from "./music/reducer";
import miniplayer from "./miniplayer/reducer";

export const reducers = combineReducers({
  music,
  miniplayer
});

export type RootState = ReturnType<typeof reducers>;
