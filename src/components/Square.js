import React, {useCallback, useState} from "react";
import {connect} from "react-redux";
import {changePlayer} from "../store/actions/changePlayer.js";
import {updateBoard} from "../store/actions/updateBoard.js";

function Square({board, currentPlayer, changePlayer, updateBoard, index, winner}) {
    const step = useCallback((e) => {
        if (winner !== null || board[index]) {
            return;
        }

        updateBoard(index, currentPlayer);
        changePlayer(currentPlayer);
    }, [currentPlayer, board, winner])

    return (
        <button className="square" onClick={step}>
            {board[index]}
        </button>
    );
}

const mapStateToProps = state => {
    return {
        board: state.board.board,
        currentPlayer: state.board.currentPlayer,
        winner: state.board.winner
    };
}

const mapDispatchToProps = {
    changePlayer,
    updateBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)