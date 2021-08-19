import { HYDRATE } from "next-redux-wrapper";
import { State, Types, ActionTypes } from "./types";

const initialState: State = {
  tracks: [],
  isLoading: false,
  currentPage: 1,
  totalPageList: 1,
};

function reducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case Types.LOAD: {
      console.log("Hello from server side");
      console.log(state);

      const newState = {
        ...state,
        tracks: action.payload.tracks,
      };
      console.log(newState);

      return newState;
    }
    case Types.SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.UPDATE:
      return {
        ...state,
        tracks: action.payload.tracks,
        totalPageList: action.payload.totalPageList,
      };
    default:
      return state;
  }
}

export default reducer;
