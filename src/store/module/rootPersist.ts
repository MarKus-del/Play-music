import { } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducers, RootState, } from "./rootReducer";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
}

export const persistedReducers = persistReducer(
  persistConfig,
  rootReducers
)
