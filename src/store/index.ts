import { Context, createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import { AnyAction, createStore, Store } from "redux";
import { ActionTypes } from "./module/music/types";
import { reducers } from "./module/rootReducer";

const reducer = (state: any, action: ActionTypes) => {
  if (action.type === HYDRATE) {
    const nextState = { ...action.payload };

    if (nextState.music) return { ...nextState };

    return state;
  } else {
    return reducers(state, action);
  }
};

const makeStore: MakeStore<Store> = (context: Context) => createStore(reducer);

export const storeWrapper = createWrapper(makeStore, { debug: false });
