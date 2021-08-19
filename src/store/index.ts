import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore, Store } from "redux";
import { reducers } from "./module/rootReducer";

const makeStore: MakeStore<Store> = (context: Context) => createStore(reducers);

export const storeWrapper = createWrapper(makeStore, { debug: false });
