import { Track } from "../../../services/types"
import { MiniPlayerActionTypes, Types } from "./types"

export function firstTrack(track: Track) {
    return {
        type: Types.LOAD,
        payload: { track }
    }
}

export function play(track: Track) {
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