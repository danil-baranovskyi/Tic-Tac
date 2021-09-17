import {createAction} from "redux-actions";

export const updateBoard = createAction("UPDATE_BOARD", (squareIndex, currentPlayer) => ({
    squareIndex,
    currentPlayer
}));