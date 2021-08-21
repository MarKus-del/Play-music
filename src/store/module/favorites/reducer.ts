import { FavoritesActionTypes, Types, State } from "./types";

export const favoritesInitialState: State = {
  favoritesTracks: [],
};

export default function reducers(state = favoritesInitialState, action: FavoritesActionTypes) {
  switch (action.type) {
    case Types.ADD: {
      const newState = { ...state };
      const alreadyWithFilter = newState.favoritesTracks.filter(
        ({ id }) => (id === action.payload.track.id)
      );

      if (alreadyWithFilter.length > 0) {
        return newState;
      }

      newState.favoritesTracks.push(action.payload.track);
      return newState;
    }
    case Types.REMOVE: {
      const newState = { ...state };
      const idForDeleteFavorites = action.payload.track.id;
      newState.favoritesTracks = state.favoritesTracks.filter(
        (track) => track.id !== idForDeleteFavorites
      );
      console.log(newState);

      return newState;
    }

    default:
      return state;
  }
}
