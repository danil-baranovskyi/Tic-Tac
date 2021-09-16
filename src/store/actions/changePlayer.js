import {CHANGE_PLAYER} from "../types.js";

export const changePlayer = (currentPlayer) => {
    return {
        type: CHANGE_PLAYER,
        payload: {
            currentPlayer: currentPlayer
        }
    }
}