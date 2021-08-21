import { Context, createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import { createStore, Store } from "redux";
import { ActionTypes as MusicActions } from "./module/music/types";
import { ActionTypes as MiniPlayerActions } from "./module/miniplayer/types";
import { reducers } from "./module/rootReducer";

const reducer = (state: any, action: MusicActions & MiniPlayerActions) => {
  if (action.type === HYDRATE) {
    const nextState = { ...action.payload };
    
    if (nextState.music || nextState.miniplay) return { ...nextState };

    return state;
  } else {
    return reducers(state, action);
  }
};

const makeStore: MakeStore<Store> = (context: Context) => createStore(reducer);

export const storeWrapper = createWrapper(makeStore, { debug: false });
