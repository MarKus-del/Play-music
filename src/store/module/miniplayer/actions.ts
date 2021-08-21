import { Track } from "../../../services/types"
import { ActionTypes, Types } from "./types"

export function firstTrack(track: Track) {
    return {
        type: Types.LOAD,
        payload: { track }
    }
}

export function play(track: Track): ActionTypes {
    return {
        type: Types.PLAY,
        payload: { track }
    }
}

export function stop() {
    return {
        type: Types.STOP,
    }
}