import { ActionTypes, State, Types } from "./types";

const initialState: State = {
  track: {
    id: 0,
    title: "Nome da musica",
    link: "",
    preview: "",
    duration: 0,
    album: {
      id: 0,
      cover: "",
      title: "",
      tracklist: "",
    },
    artist: {
      name: "Nome do Compositor",
      id: 0,
      link: "",
      picture: "https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_960_720.jpg",
      tracklist: "",
    },
  },
  isPlaying: false,
};

export default function reducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case Types.LOAD: {
      const newState = { ...state };
      newState.track = action.payload.track;
      return newState;
    }
    case Types.PLAY: {
      const newState = { ...state };
      newState.isPlaying = true;
      newState.track = action.payload.track;
      return newState;
    }
    case Types.STOP: {
      const newState = { ...state };
      newState.isPlaying = false;
      return newState;
    }
    default:
      return state;
  }
}
