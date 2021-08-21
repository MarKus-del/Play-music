import { Context, createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import { createStore, EmptyObject, Store } from "redux";
import { ActionTypes as MusicActions } from "./module/music/types";
import { ActionTypes as MiniPlayerActions } from "./module/miniplayer/types";
import { ActionTypes as FavoritesActions } from "./module/favorites/types";
import { reducers, RootState } from "./module/rootReducer";

type Actions =
  & MusicActions
  & MiniPlayerActions
  & FavoritesActions;

const reducer = (state: any, action: Actions) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...action.payload
    };
    console.log(action.payload);
    console.log(state);
    
    if (nextState.music && nextState.favorites && nextState.miniplayer) return nextState;
    
    return state;
  } else {
    return reducers(state, action);
  }
};

const makeStore: MakeStore<Store> = (context: Context) => createStore(reducer);

export const storeWrapper = createWrapper(makeStore, { debug: false });
