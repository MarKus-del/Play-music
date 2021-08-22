import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducers } from "./rootReducer";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites", "themes"],
};

export const persistedReducers = persistReducer(persistConfig, rootReducers);
