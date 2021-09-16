import {CHANGE_PLAYER, RESET_BOARD, UPDATE_BOARD} from "../types.js";
import {calculateWinner} from "../../functions/calculateWinner.js";

const initialState = {
    board: [
        "", "", "",
        "", "", "",
        "", "", ""
    ],
    currentPlayer: "X",
    winner: null
}

export const board = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BOARD:
            const board = state.board.map((square, index) => {
                if (index === action.payload.squareIndex) {
                    square = action.payload.currentPlayer
                }

                return square;
            });

            return {
                ...state,
                winner: calculateWinner(board),
                board
            }
        case CHANGE_PLAYER:
            if (action.payload.currentPlayer === "X") {
                return {
                    ...state,
                    currentPlayer: "O"
                }
            }
            return {
                ...state,
                currentPlayer: "X"
            }
        case RESET_BOARD:
            const newBoard = [
                "", "", "",
                "", "", "",
                "", "", ""
            ];

            return {
                ...state,
                board: [...newBoard],
                currentPlayer: "X",
                winner: null
            }
        default:
            return state;
    }
}