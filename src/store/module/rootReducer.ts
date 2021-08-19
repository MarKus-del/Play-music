import { combineReducers } from "redux";
import music from "./music/reducer";

export const reducers = combineReducers({
  music,
});

export type RootState = ReturnType<typeof reducers>;
