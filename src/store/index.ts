import { useMemo } from "react";
import { createStore, EmptyObject, Store } from "redux";
import { favoritesInitialState } from "./module/favorites/reducer";
import { miniplayerInitialState } from "./module/miniplayer/reducer";
import { musicInitialState } from "./module/music/reducer";
import { RootState } from "./module/rootReducer";
import { MusicActionTypes } from "./module/music/types";
import { MiniPlayerActionTypes } from "./module/miniplayer/types";
import { FavoritesActionTypes } from "./module/favorites/types";
import { persistedReducers } from "./module/rootPersist";
import { PersistPartial } from "redux-persist/es/persistReducer";
import { themesInitialState } from "./module/themes/reducer";
import { ThemeActions } from "./module/themes/types";

type ActionsTypes =
  | MusicActionTypes
  | MiniPlayerActionTypes
  | FavoritesActionTypes
  | { type: ThemeActions };

let store:
  | Store<EmptyObject & RootState & PersistPartial, ActionsTypes>
  | undefined;

export const initialState: RootState = {
  favorites: favoritesInitialState,
  miniplayer: miniplayerInitialState,
  music: musicInitialState,
  themes: themesInitialState,
};

function initStore(preloadedState = initialState) {
  return createStore(persistedReducers, preloadedState);
}

export const initializeStore = (preloadedState?: any) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window !== "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: RootState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
