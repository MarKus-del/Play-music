import { State, Types, ActionTypes } from "./types";

const initialState: State = {
  tracks: [],
  isLoading: false,
  currentPage: 1,
  totalPageList: 1,
  searchName: "Top Músicas"
};

function reducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case Types.LOAD: {
      const newState = { ...state };
      newState.tracks = action.payload.tracks;

      return newState;
    }
    case Types.SEARCH_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case Types.UPDATE: {
      const newState = { ...state };
      newState.tracks = action.payload.tracks;
      newState.isLoading = false;
      newState.totalPageList = action.payload.totalPageList;
      newState.searchName = action.payload.searchName

      return newState;
    }
    default:
      return state;
  }
}

export default reducer;
