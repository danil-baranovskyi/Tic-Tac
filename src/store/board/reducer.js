import {handleActions} from "redux-actions";
import {calculateWinner} from "../../functions/calculateWinner.js";
import {changePlayer} from "./actions/changePlayer.js";
import {updateBoard} from "./actions/updateBoard.js";
import {resetBoard} from "./actions/resetBoard.js";
import {initialState} from "./initialState.js";

const handleChangePlayer = (state) => ({
    ...state,
    currentPlayer: state.currentPlayer === "X" ? "0" : "X"
})

const handleUpdateBoard = (state, {payload}) => {
    const board = state.board.map((square, index) => {
        if (index === payload.squareIndex) {
            square = payload.currentPlayer
        }

        return square;
    });

    return {
        ...state,
        winner: calculateWinner(board),
        board
    }
}

const handleResetBoard = (state) => {
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
}

export const board = handleActions(
    {
        [changePlayer]: handleChangePlayer,
        [updateBoard]: handleUpdateBoard,
        [resetBoard]: handleResetBoard

    },
    initialState
);