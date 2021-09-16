import {UPDATE_BOARD} from "../types.js";

export const updateBoard = (squareIndex, currentPlayer) => {
    return {
        type: UPDATE_BOARD,
        payload: {
            squareIndex: squareIndex,
            currentPlayer: currentPlayer
        }
    }
}